using LegaSysDataEntities;
//using LegaSysUOW.Interface;
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
        [HttpPost]
        [Route("task/create")]
        public IHttpActionResult Post([FromBody] TaskDetail objTask)
        {

            var result = _Taskdt.CreateProjectTaskDetail(objTask);

            if (result <= 0)
                return InternalServerError();

            return Json(new { id = result, message = "Project Task created successfully." });
        }

        [HttpPost]
        [Route("task/update")]
        public IHttpActionResult Put([FromBody]TaskDetail objTask)
        {
            var lsProjects = _Taskdt.UpdateProjectTaskDetail(objTask);
            if (lsProjects <= 0)
                return InternalServerError();

            return Json(new { id = lsProjects, message = "Project Updated successfully." });

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
