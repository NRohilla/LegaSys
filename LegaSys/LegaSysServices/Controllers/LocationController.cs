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
    public class LocationController : ApiController
    {
        private readonly IUOWLocations _uOWLocations;

        public LocationController(IUOWLocations uOWLocations)
        {
            _uOWLocations = uOWLocations;
        }

        [HttpGet]
        [Route("location/getall")]
        public IHttpActionResult GetAllLocations()
        {
            return Json(_uOWLocations.GetAllLocations());
        }

        [HttpGet]
        [Route("location/getallactive")]
        public IHttpActionResult GetAllActiveLocations()
        {
            return Json(_uOWLocations.GetAllActiveLocations());
        }

        [HttpGet]
        [Route("location/{id}")]
        public IHttpActionResult GetLocationById(int id)
        {
            return Json(_uOWLocations.GetLocationById(id));
        }

        [HttpGet]
        [Route("location/changestatus/{id}")]
        public IHttpActionResult ChangeStatus(int id)
        {
            return Json(new { success = _uOWLocations.ChangeStatus(id) });
        }

        [HttpPost]
        [Route("location/create")]
        public IHttpActionResult CreateLocation(Location model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            int id = _uOWLocations.CreateLocation(model, userId);

            if (id <= 0)
                return InternalServerError();

            return Json(new { success = true, id });
        }

        [HttpPost]
        [Route("location/update")]
        public IHttpActionResult UpdateLocation(Location model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            if (!_uOWLocations.UpdateLocation(model, userId))
                return NotFound();

            return Json(new { success = true });
        }
    }
}
