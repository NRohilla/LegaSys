using LegaSysServices.App_Config;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler.Encoder;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Web;
using Thinktecture.IdentityModel.Tokens;

namespace LegaSysServices.App_Start
{
    public class CustomJwtFormat : ISecureDataFormat<AuthenticationTicket>
    {

        private const string AudiencePropertyKey = "audience";

        private readonly string _issuer = string.Empty;
        public CustomJwtFormat(string issuer)
        {
            _issuer = issuer;
        }

        private string ISecureDataFormat_Protect(AuthenticationTicket data)
        {
            if (data == null)
            {
                throw new ArgumentNullException("data");
            }

            string audienceId = AppConfiguration.GetByKey(GlobalLegaSys.ClientId);

            string symmetricKeyAsBase64 = AppConfiguration.GetByKey(GlobalLegaSys.ClientSecret);

            dynamic keyByteArray = TextEncodings.Base64Url.Decode(symmetricKeyAsBase64);

            dynamic signingKey = new HmacSigningCredentials(keyByteArray);

            dynamic issued = data.Properties.IssuedUtc;

            dynamic expires = data.Properties.ExpiresUtc;

            dynamic token = new JwtSecurityToken(_issuer, audienceId, data.Identity.Claims, issued.UtcDateTime, expires.UtcDateTime, signingKey);

            dynamic handler = new JwtSecurityTokenHandler();

            dynamic jwt = handler.WriteToken(token);

            return jwt;
        }
        string ISecureDataFormat<AuthenticationTicket>.Protect(AuthenticationTicket data)
        {
            return ISecureDataFormat_Protect(data);
        }

        private AuthenticationTicket ISecureDataFormat_Unprotect(string protectedText)
        {
            throw new NotImplementedException();
        }
        AuthenticationTicket ISecureDataFormat<AuthenticationTicket>.Unprotect(string protectedText)
        {
            return ISecureDataFormat_Unprotect(protectedText);
        }

    }
}