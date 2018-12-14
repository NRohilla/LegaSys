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

    //Code Fir Task Controller*********SADHANA**********
    public class TaskController : ApiController
    {
        private readonly IUOWTask _Taskdt;
        private readonly IUOWSubTask _uOWSubTask;

        public TaskController(IUOWTask uOWTask, IUOWSubTask uOWSubTask)
        {
            _Taskdt = uOWTask;
            _uOWSubTask = uOWSubTask;
        }



        //GET method
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


        //GET Method

        [HttpGet]
        [Route("task/getall")]
        public IHttpActionResult GetAllProjectsTask()
        {
            return Json(_Taskdt.GetAllProjectsTask());
        }





        //method for create project task  PosT Method
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

        //Method for update task PuT method 
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


        //DELETE Method
        [HttpGet]
        [Route("project/{id}/delete")]
        public IHttpActionResult DeleteProjectTask(int id)
        {
            _Taskdt.DeleteProjectTask(id);
            return Json(new { message = "ProjectTask deleted  successfully." });
        }




        //Code For SubTask Controller*********SADHANA**********10 dec 2018

        //GET Method

        [HttpGet]
        [Route("subtask/getall")]
        public IHttpActionResult GetAllProjectsSubTask()
        {

            return Json(_uOWSubTask.GetAllProjectsSubTask());
        }


        //method to get subtask against ID....PUT Method

        [HttpGet]
        [Route("subtask/{id}")]

        public IHttpActionResult GetProjectSubTaskbyId(int id)
        {
            if (id <= 0)
                return BadRequest("Invalid Project Task Id.");

            var projectsubTask = _uOWSubTask.GetProjectSubTaskbyId(id);

            if (projectsubTask == null)
                return NotFound();

            return Json(projectsubTask);
        }


        //method for create project Subtask  POST Method

        [HttpPost]
        [Route("subtask/create/{id}")]
        public IHttpActionResult AddSubTask ([FromBody]int id, List<SubTaskDetail> subtaskDetail)
        {
            //Fetching UserId
            int.TryParse(((System.Security.Claims.ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var createdBy);
            //subtaskDetail.= createdBy;

            _uOWSubTask.CreateProjectSubTaskDetail(id,subtaskDetail);

            return Json(new { success = true });
        }


      

    }
}
