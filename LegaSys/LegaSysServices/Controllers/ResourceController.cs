﻿using LegaSysDataEntities;
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
        [Route("resource/delete/{id}")]
        public IHttpActionResult DeleteResource(int id)
        {
            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            return Json(new { success = _uOWResources.DeleteResource(id, userId) });
        }
        [HttpPost]
        [Route("resource/checkemail")]
        public IHttpActionResult IfEmailAlreadyExists(string email)
            {
            bool msg = _uOWResources.CheckEmail(email);
            if (msg)
            {
                return Json(new { success = false });
            }
            else
            {
                return Json(new { success = true });
            }

               

           // return Json(new { success = true, uDetail.EmailId });
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

            if (id < 0)
                return InternalServerError();

            return Json(new { success = true, id });
        }
        [HttpPost]
        [Route("resource/addskillbyid")]
        public IHttpActionResult AddSkillbyId(UserDetail userDetail)
        {
            if(userDetail == null)
                return BadRequest("Model cannot be null");
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var createdBy);

            userDetail.Created_By = createdBy;

            if (!_uOWResources.AddSkillById(userDetail))
                return NotFound();

            return Json(new { success = true });
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

        [Route("resource/getuserbackground/{id}")]
        public IHttpActionResult GetUserBackground(int id)
        {
            return Json(_uOWResources.GetUserBackground(id));
        }

        [HttpPost]
        [Route("resource/createbackground/{id}")]
        public IHttpActionResult AddUserBackground([FromUri] int id, bool isExp, List<UserBackground> model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _uOWResources.CreateUserBackground(id, isExp, model);

            return Json(new { success = true });
        }
        [Route("resource/getuserqualification/{id}")]
        public IHttpActionResult GetUserQualification(int id)
        {
            return Json(_uOWResources.GetUserQualification(id));
        }
        [Route("resource/getusercertification/{id}")]
        public IHttpActionResult GetUserCertification(int id)
        {
            return Json(_uOWResources.GetUserCertification(id));
        }
        [HttpPost]
        [Route("resource/createqualification/{id}")]
        public IHttpActionResult AddUserQualification([FromUri]int id, List<UserEducationModel> model)
        {
            if (model == null || model?.Count == 0)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            _uOWResources.CreateUserQualification(id, model);

            return Json(new { success = true });
        }
        [Route("resource/getResourceProject/{id}")]
        public IHttpActionResult GetResourceProject(int id)
        {
            return Json(_uOWResources.getResourceProject(id));
        }
    }
}
