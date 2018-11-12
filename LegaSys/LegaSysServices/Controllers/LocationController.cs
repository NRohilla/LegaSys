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
    }
}
