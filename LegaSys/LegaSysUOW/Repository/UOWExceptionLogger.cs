using LegaSysUOW.Interface;
using System;
using System.Net.Http;
using System.Web.Http.Controllers;
using System.Web.Http.ExceptionHandling;
using System.IO;
using System.Net;
using LegaSysDataAccess;

namespace LegaSysUOW.Repository
{
    public class UOWExceptionLogger : IUOWExceptionLogger
    {
        private readonly LegaSysEntities db;

        public UOWExceptionLogger(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

        public void RegisterException(ExceptionLoggerContext context)
        {
            RegisterException(context.Request, context.RequestContext, context.Exception);
        }

        public void RegisterException(HttpRequestMessage request, HttpRequestContext requestContext, Exception ex)
        {
            string endpointResponse = null;

            if (ex is WebException)
            {
                using (var rs = new StreamReader(((WebException)ex).Response.GetResponseStream()))
                {
                    endpointResponse = rs.ReadToEnd();
                }
            }

            var log = new LegaSys_ErrorLogs
            {
                IsHandled = true,
                ResourceUri = request.RequestUri.AbsoluteUri,
                QueryString = request.RequestUri.AbsoluteUri.GetQueryString(),
                ErrorDatetimeUtc = DateTime.UtcNow,
                ErrorMessage = ex.Message,
                ExceptionDetail = ex.InnerException?.GetExceptionMessages() ?? string.Empty,
                StackTrace = ex.StackTrace,
                IpAddress = request.GetClientIpAddress(),
                UserID = requestContext.Principal?.Identity.Name,
                ReferingUrl = request.Headers.Referrer?.AbsoluteUri,
                UserAgent = request.Headers.UserAgent?.ToString()
            };

            if (!string.IsNullOrEmpty(endpointResponse))
            {
                log.ExceptionDetail += Environment.NewLine + Environment.NewLine + endpointResponse;
            }

            db.LegaSys_ErrorLogs.Add(log);
            db.SaveChanges();
        }
    }

    public static class ExtensionMethods
    {
        private const string HttpContext = "MS_HttpContext";
        private const string RemoteEndpointMessage = "System.ServiceModel.Channels.RemoteEndpointMessageProperty";

        public static string GetExceptionMessages(this Exception e, string msgs = "")
        {
            if (e == null) return string.Empty;
            if (msgs == "") msgs = e.Message;
            if (e.InnerException != null)
                msgs += "\r\nInnerException: " + GetExceptionMessages(e.InnerException);
            return msgs;
        }

        public static string GetClientIpAddress(this HttpRequestMessage request)
        {
            if (request.Properties.ContainsKey(HttpContext))
            {
                dynamic ctx = request.Properties[HttpContext];
                if (ctx != null)
                {
                    return ctx.Request.UserHostAddress;
                }
            }

            if (request.Properties.ContainsKey(RemoteEndpointMessage))
            {
                dynamic remoteEndpoint = request.Properties[RemoteEndpointMessage];
                if (remoteEndpoint != null)
                {
                    return remoteEndpoint.Address;
                }
            }

            return string.Empty;
        }

        public static string GetQueryString(this string absoluteUri)
        {
            if (absoluteUri.Contains("?"))
                return absoluteUri.Split('?')[1];
            else
                return string.Empty;
        }
    }
}
