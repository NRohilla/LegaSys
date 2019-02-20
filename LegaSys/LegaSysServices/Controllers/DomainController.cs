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
    //[Authorize]
    public class DomainController : ApiController
    {
        private readonly IUOWDomains _uOWDomains;

        public DomainController(IUOWDomains uOWDomains)
        {
            _uOWDomains = uOWDomains;
        }

        [HttpGet]
        [Route("domain/getall")]
        public IHttpActionResult GetAllDomains()
        {
            return Json(_uOWDomains.GetAllDomains());
        }

        [HttpGet]
        [Route("domain/getallactive")]
        public IHttpActionResult GetAllActiveDomains()
        {
            return Json(_uOWDomains.GetAllActiveDomains());
        }

        [HttpGet]
        [Route("domain/{id}")]
        public IHttpActionResult GetDomainById(int id)
        {
            return Json(_uOWDomains.GetDomainById(id));
        }

        [HttpGet]
        [Route("domain/changestatus/{id}")]
        public IHttpActionResult ChangeStatus(int id)
        {
            return Json(new { success = _uOWDomains.ChangeStatus(id) });
        }

        [HttpPost]
        [Route("domain/create")]
        public IHttpActionResult CreateDomain(Domain model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            int id = _uOWDomains.CreateDomain(model, userId);

            if (id <= 0)
                return InternalServerError();

            return Json(new { success = true, id });
        }

        [HttpPost]
        [Route("domain/update")]
        public IHttpActionResult UpdateDomain(Domain model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            if (!_uOWDomains.UpdateDomain(model, userId))
                return NotFound();

            return Json(new { success = true });
        }
    }
}
