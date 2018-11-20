using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.Owin.Security;
using LegaSysUOW.Repository;
using LegaSysDataEntities;
using LegaSysUOW.Interface;

namespace LegaSysServices.App_Start
{
    public class CustomOAuthProvider : OAuthAuthorizationServerProvider
    {
        public override Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
            return Task.FromResult<object>(null);
        }
        public override Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            UserLoginDetails user = AutofacWebapiConfig.ResolveRequestInstance<IUOWUsers>().AuthenticateAndFetchUserDetail(context.UserName, context.Password);
            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect");
                return Task.FromResult<object>(null);
            }
            var identity = new ClaimsIdentity("JWT");
            identity.AddClaim(new Claim(ClaimTypes.Name, context.UserName));
            identity.AddClaim(new Claim("userid", user.UserLoginDetailID.ToString()));
            identity.AddClaim(new Claim("Username", user.Username));
            var props = new AuthenticationProperties(new Dictionary<string, string>()
            {
                { "audience", context.ClientId ??string.Empty },
                { "name", user.Name }
            });
            var ticket = new AuthenticationTicket(identity, props);
            context.Validated(ticket);
            return Task.FromResult<object>(null);
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }
            return Task.FromResult<object>(null);
        }
    }
}