using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
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

        [HttpGet]
        [Route("role/getallactive")]
        public IHttpActionResult GetAllActiveRoles()
        {
            return Json(_uOWRoles.GetAllActiveRoles());
        }

        [HttpGet]
        [Route("role/{id}")]
        public IHttpActionResult GetRoleById(int id)
        {
            return Json(_uOWRoles.GetRoleById(id));
        }

        [HttpGet]
        [Route("role/changestatus/{id}")]
        public IHttpActionResult ChangeStatus(int id)
        {
            return Json(new { success = _uOWRoles.ChangeStatus(id) });
        }

        [HttpPost]
        [Route("role/create")]
        public IHttpActionResult CreateRole(Role model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            int id = _uOWRoles.CreateRole(model, userId);

            if (id <= 0)
                return InternalServerError();

            return Json(new { success = true, id });
        }

        [HttpPost]
        [Route("role/update")]
        public IHttpActionResult UpdateRole(Role model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            if (!_uOWRoles.UpdateRole(model, userId))
                return NotFound();

            return Json(new { success = true });
        }
    }
}
