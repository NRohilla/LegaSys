using LegaSysServices.App_Config;
using LegaSysServices.App_Start;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Microsoft.Owin.Security.DataHandler.Encoder;
using Microsoft.Owin.Security.Jwt;
using Microsoft.Owin.Security;
[assembly: OwinStartup(typeof(LegaSysServices.Startup))]
namespace LegaSysServices
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            AutofacWebapiConfig.Initialize(GlobalConfiguration.Configuration);
            config.MapHttpAttributeRoutes();
            ConfigureJWTTokenGeneration(app);
            ConfigureJWTTokenConsumption(app);

        }
        public void ConfigureJWTTokenGeneration(IAppBuilder app)
        {

            //For Dev enviroment only (on production should be AllowInsecureHttp = false)
            OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/api/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(Convert.ToDouble(AppConfiguration.GetByKey(GlobalLegaSys.TokenExpireTime))),
                Provider = new CustomOAuthProvider(),
                AccessTokenFormat = new CustomJwtFormat(AppConfiguration.GetByKey(GlobalLegaSys.ApiBaseURL))
            };
            app.UseOAuthAuthorizationServer(OAuthServerOptions);

        }

        private void ConfigureJWTTokenConsumption(IAppBuilder app)
        {
            dynamic issuer = AppConfiguration.GetByKey(GlobalLegaSys.ApiBaseURL);
            string audienceId = AppConfiguration.GetByKey(GlobalLegaSys.ClientId);
            byte[] audienceSecret = TextEncodings.Base64Url.Decode(AppConfiguration.GetByKey(GlobalLegaSys.ClientSecret));
            string[] myArray = { audienceId };
            app.UseJwtBearerAuthentication(new JwtBearerAuthenticationOptions
            {
                AuthenticationMode = AuthenticationMode.Active,
                AllowedAudiences = myArray,
                IssuerSecurityTokenProviders = new IIssuerSecurityTokenProvider[] { new SymmetricKeyIssuerSecurityTokenProvider(issuer, audienceSecret) }
            });
        }
    }

}