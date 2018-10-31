using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LegaSysUOW.Interface;
using LegaSysUOW.Repository;

namespace LegaSysServices.Controllers
{
    [RoutePrefix("LegaSysAPI/Users")]
    public class UserController : ApiController
    {
        IUOWUsers UsersRepository = new UOWUsers();

        [HttpGet]
        [Route("AuthenticateLogin")]
        public List<object> AuthenticateAndFetchUserDetail(string UserEmailId, string password)
        {
            return UsersRepository.AuthenticateAndFetchUserDetail(UserEmailId, password);
        }
    }
}
