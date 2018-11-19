using LegaSysUOW.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LegaSysServices.Controllers
{
    [Authorize]
    public class RoleController : ApiController
    {
        private readonly IUOWRoles _uOWRoles;

        public RoleController(IUOWRoles uOWRoles)
        {
            _uOWRoles = uOWRoles;
        }

        [HttpGet]
        [Route("role/getall")]
        public IHttpActionResult GetAllRoles()
        {
            return Json(_uOWRoles.GetAllRoles());
        }
    }
}
