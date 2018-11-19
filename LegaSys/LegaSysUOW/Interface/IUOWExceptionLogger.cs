using System;
using System.Net.Http;
using System.Web.Http.Controllers;
using System.Web.Http.ExceptionHandling;

namespace LegaSysUOW.Interface
{
    public interface IUOWExceptionLogger
    {
        void RegisterException(ExceptionLoggerContext context);
        void RegisterException(HttpRequestMessage request, HttpRequestContext requestContext, Exception ex);
    }
}
