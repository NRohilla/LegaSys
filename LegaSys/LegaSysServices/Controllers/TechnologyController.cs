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
    public class TechnologyController : ApiController
    {
        private readonly IUOWTechnologies _uOWTechnologies;

        public TechnologyController(IUOWTechnologies uOWTechnologies)
        {
            _uOWTechnologies = uOWTechnologies;
        }

        [HttpGet]
        [Route("technology/getall")]
        public IHttpActionResult GetAllShifts()
        {
            return Json(_uOWTechnologies.GetAllTechnologies());
        }

        [HttpGet]
        [Route("technology/getallactive")]
        public IHttpActionResult GetAllActiveShifts()
        {
            return Json(_uOWTechnologies.GetAllActiveTechnologies());
        }

        [HttpGet]
        [Route("technology/{id}")]
        public IHttpActionResult GetShiftById(int id)
        {
            return Json(_uOWTechnologies.GetTechnologyById(id));
        }

        [HttpGet]
        [Route("technology/changestatus/{id}")]
        public IHttpActionResult ChangeStatus(int id)
        {
            return Json(new { success = _uOWTechnologies.ChangeStatus(id) });
        }

        [HttpPost]
        [Route("technology/create")]
        public IHttpActionResult CreateShift(Technology model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            int id = _uOWTechnologies.CreateTechnology(model, userId);

            if (id <= 0)
                return InternalServerError();

            return Json(new { success = true, id });
        }

        [HttpPost]
        [Route("technology/update")]
        public IHttpActionResult UpdateShift(Technology model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            if (!_uOWTechnologies.UpdateTechnology(model, userId))
                return NotFound();

            return Json(new { success = true });
        }

    }
}
