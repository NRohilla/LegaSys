using LegaSysDataEntities;
using LegaSysUOW.Interface;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
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
        [Route("task/create/{id}")]
        public IHttpActionResult Post(int id, [FromBody] TaskDetail objTask)
        {

         

            var result = _Taskdt.CreateProjectTaskDetail(objTask,id);

            if (result <= 0)
                return InternalServerError();

            return Json(new { id = result });
        }

        //Method for update task PuT method 
        [HttpPost]
        [Route("task/update/{id}")]
        public IHttpActionResult Put(int id,[FromBody]TaskDetail objTask)
        {
            //Fetching UserId
            //int.TryParse(((System.Security.Claims.ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var updatedBy);
            //objTask.Updated_By = updatedBy;
            var lsProjects = _Taskdt.UpdateProjectTaskDetail(objTask,id);

            if (lsProjects <= 0)
                return InternalServerError();

            return Json(new { id = lsProjects, message = "Project Task Updated successfully." });
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

        public IHttpActionResult GetAllProjectSubTaskbyTaskId(int id)
        {
            if (id <= 0)
                return BadRequest("Invalid Project Task Id.");

            var projectsubTask = _uOWSubTask.GetAllProjectSubTaskbyTaskId(id);

            if (projectsubTask == null)
                return NotFound();

            return Json(projectsubTask);
        }


        //method for create project Subtask  POST Method

        [HttpPost]
        [Route("subtask/create/{id}")]
        public IHttpActionResult Post(int id,[FromBody] SubTaskDetail objSubTask)
        {
            //Fetching UserId
         

           bool Status= _uOWSubTask.CreateProjectSubTaskDetail(id, objSubTask);
            if (Status)
            return Json(new { success = Status});
            return Json(new { success =Status} );
        }

        //Method to update task

        [HttpPost]
        [Route("subtask/update/{id}")]
        public IHttpActionResult Put(int id, [FromBody]SubTaskDetail objsubTask)
        {
           
         
            var lsProjects = _uOWSubTask.UpdateSubTaskDetail( id,objsubTask);

            if (lsProjects <= 0)
                return InternalServerError();

            return Json(new { id = lsProjects, message = "Project Task Updated successfully." });
        }

        


        //METHOD TO DELETE TASK
        [HttpDelete]
        [Route("task/delete/{id}")]

        public IHttpActionResult DeleteProjectTask(int id)
        {
            bool Status= _Taskdt.DeleteProjectTask(id);

            if (Status)
                return Json(new { success = Status });
            return Json(new { success = Status });


         

        }



        //method to upload Attachment of SubTask on server

        [HttpPost]

        [Route("attachment/create")]
        //public string addAttechmentonServer()
        //{
        //    var httpRequest = HttpContext.Current.Request;
        //    var postedFile = httpRequest.Files[0];
        //    var attechmentPath =  _uOWSubTask.addAttechmentonServer(postedFile);

        //    return (attechmentPath);
        //}


        // method to get status of task
        [HttpGet]
        [Route("task/getstatus")]
        public IHttpActionResult GetTaskStatus()
        {
            return Json(_Taskdt.GetTaskStatus());
        }
        // method to get Priority of task
        [HttpGet]
        [Route("task/getpriority")]
        public IHttpActionResult GetTaskPriority()
        {
            return Json(_Taskdt.GetTaskPriority());
        }


        // method to get Risk of task
        [HttpGet]
        [Route("task/getrisk")]
        public IHttpActionResult GetTaskRisk()
        {
            return Json(_Taskdt.GetTaskRisk());
        }


        // method to get Risk of task
        [HttpGet]
        [Route("task/getactivity")]
        public IHttpActionResult GetTaskActivity()
        {
            return Json(_Taskdt.GetTaskActivity());
        }


        //Method to check any new task created already exsists

            [HttpGet]
            [Route("task/isexsists")]
            public IHttpActionResult CheckIsTaskExsists(string taskname)
                {
                    return Json(_Taskdt.CheckIsTaskExsists(taskname));
                }


        [HttpGet]
        [Route("subtask/isexsists")]
        public IHttpActionResult CheckIsSubTaskExsists(string subtaskname)
        {
            return Json(_uOWSubTask.CheckIsSubTaskExsists(subtaskname));
        }

        //updated the following code in the task controller from MohitK 30/01/2019 
        [HttpGet]
        [Route("project/getalltaskofproject/{id}")]
        public IHttpActionResult GetAllTaskOfProject(int id)
        {

            return Json(_Taskdt.GetAllTaskOfProject(id));
        }

    }
}
