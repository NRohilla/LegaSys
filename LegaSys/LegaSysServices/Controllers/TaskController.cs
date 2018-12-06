using LegaSysDataEntities;
//using LegaSysUOW.Interface;
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
    public class TaskController : ApiController
    {
        private readonly IUOWTask _Taskdt;

        public TaskController(IUOWTask uOWTask)
        {
            _Taskdt = uOWTask;
        }

        [HttpGet]
        [Route("task/{id}")]
        public IHttpActionResult GetProjectTaskbyId(int id)
        {
            if (id <= 0)
                return BadRequest("Invalid Project Task Id.");

            var projectTask = _Taskdt.GetProjectTaskbyId(id);

            if (projectTask == null)
                return NotFound();

            return Json(projectTask);
        }

        [HttpGet]
        [Route("task/getall")]
        public IHttpActionResult GetAllProjectsTask()
        {
            return Json(_Taskdt.GetAllProjectsTask());
        }

        //method for create project
        [HttpPost]
        [Route("task/create")]
        public IHttpActionResult Post([FromBody] TaskDetail objTask)
        {
            //Fetching UserId
            int.TryParse(((System.Security.Claims.ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var createdBy);
            objTask.Created_By = createdBy;

            var result = _Taskdt.CreateProjectTaskDetail(objTask);

            if (result <= 0)
                return InternalServerError();

            return Json(new { id = result, message = "Project Task created successfully." });
        }

        //Method for update atsk
        [HttpPost]
        [Route("task/update")]
        public IHttpActionResult Put([FromBody]TaskDetail objTask)
        {
            //Fetching UserId
            int.TryParse(((System.Security.Claims.ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var updatedBy);
            objTask.Updated_By = updatedBy;
            var lsProjects = _Taskdt.UpdateProjectTaskDetail(objTask);

            if (lsProjects <= 0)
                return InternalServerError();

            return Json(new { id = lsProjects, message = "Project Task Updated successfully." });
        }

        [HttpGet]
        [Route("project/{id}/delete")]
        public IHttpActionResult DeleteProjectTask(int id)
        {
            _Taskdt.DeleteProjectTask(id);
            return Json(new { message = "Project deleted  successfully." });
        }
    }
}
