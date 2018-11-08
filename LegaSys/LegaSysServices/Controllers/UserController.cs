using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LegaSysUOW.Interface;
using LegaSysUOW.Repository;
using LegaSysDataEntities;

namespace LegaSysServices.Controllers
{
	//Testing
    [RoutePrefix("LegaSysAPI/Users")]
    public class UserController : ApiController
    {
        IUOWUsers UsersRepository = new UOWUsers();

        [HttpGet]
        [Route("AuthenticateLogin")]
        public UserLoginDetails AuthenticateAndFetchUserDetail(string UserEmailId, string password)
        {
            return UsersRepository.AuthenticateAndFetchUserDetail(UserEmailId, password);
        }
    }
}
