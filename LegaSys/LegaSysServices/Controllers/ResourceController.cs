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
    public class ResourceController : ApiController
    {
        private readonly IUOWResources _uOWResources;

        public ResourceController(IUOWResources uOWResources)
        {
            _uOWResources = uOWResources;
        }

        [HttpGet]
        [Route("resource/getall")]
        public IHttpActionResult GetAllResources()
        {
            return Json(_uOWResources.GetAllActiveResources());
        }
    }
}
