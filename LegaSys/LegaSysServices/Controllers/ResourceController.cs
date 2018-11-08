using LegaSysDataEntities;
using LegaSysUOW.Interface;
using Microsoft.AspNet.Identity;
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

        [HttpPost]
        [Route("resource/create")]
        public IHttpActionResult GetAllResources(UserDetail model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(User.Identity.GetUserId(), out int createdBy);

            model.Created_By = createdBy;

            int id = _uOWResources.CreateResoure(model);

            if (id <= 0)
                return InternalServerError();

            return Json(new { success = true, id });
        }
    }
}
