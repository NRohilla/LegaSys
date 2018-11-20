using LegaSysDataEntities;
using LegaSysUOW.Interface;
using Microsoft.AspNet.Identity;
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

        [HttpGet]
        [Route("resource/{id}")]
        public IHttpActionResult GetResourceById(int id)
        {
            return Json(_uOWResources.GetResourceById(id));
        }

        [HttpGet]
        [Route("resource/delete{id}")]
        public IHttpActionResult DeleteResource(int id)
        {
            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            return Json(new { success = _uOWResources.DeleteResource(id, userId) });
        }

        [HttpPost]
        [Route("resource/create")]
        public IHttpActionResult GetAllResources(UserDetail model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var createdBy);

            model.Created_By = createdBy;

            int id = _uOWResources.CreateResoure(model);

            if (id <= 0)
                return InternalServerError();

            return Json(new { success = true, id });
        }


        [HttpPost]
        [Route("resource/update")]
        public IHttpActionResult UpdateResource(UserDetail model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var createdBy);

            model.Created_By = createdBy;

            if (!_uOWResources.UpdateResource(model))
                return NotFound();

            return Json(new { success = true });
        }
    }
}
