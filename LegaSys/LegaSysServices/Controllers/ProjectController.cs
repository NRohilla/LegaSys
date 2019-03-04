using LegaSysDataEntities;
using LegaSysUOW.Interface;
using LegaSysUOW.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace LegaSysServices.Controllers
{
   // [Authorize]
    public class ProjectController : ApiController
    {
        private readonly IUOWProjects _projects;
        public ProjectController(IUOWProjects uOWProjects)
        {
            _projects = uOWProjects;
        }
        [HttpGet]
        [Route("project/{id}")]
        public IHttpActionResult GetProject(int id)
        {
            if (id <= 0)
                return BadRequest("Invalid Project Id.");

            var project = _projects.GetProject(id);

            if (project == null)
                return NotFound();

            return Json(project);
        }

        [HttpGet]
        [Route("project/getall")]
        public IHttpActionResult GetAllProjects()
        {
            return Json(_projects.GetAllProjects());
        }
        [HttpPost]
        [Route("project/create")]
        public IHttpActionResult Post([FromBody]ProjectDetail objProjects)
        {
            var result = _projects.CreateProjectDetail(objProjects);

            if (result <= 0)
                return InternalServerError();
            else
                return Json(new { id = result, message = "Project created successfully." });
        }

        [HttpPost]
        [Route("project/update")]
        public IHttpActionResult Put([FromBody]ProjectDetail objProjects)
        {
            var lsProjects = _projects.UpdateProjectDetail(objProjects);
            if (lsProjects <= 0)
                return InternalServerError();
            else
                return Json(new { id = lsProjects, message = "Project Updated successfully." });

        }

        [HttpGet]
        [Route("project/{id}/delete")]
        public IHttpActionResult DeleteProject(int id)
        {
            _projects.DeleteProject(id);
            return Json(new { message = "Success." });
        }

        [HttpGet]
        [Route("project/GetAllTechDomains")]
        public IHttpActionResult GetAllTechDomains()
        {
            return Json(_projects.GetAllTechDomains());
        }
        [HttpGet]
        [Route("project/getalltechnology")]
        public IHttpActionResult GetAllTechnology()
        {
            var project = _projects.GetAllTechnology();
            if (project == null)
                return NotFound();
            else  return Json(project);
        }

        [HttpGet]
        [Route("project/getallresourceonproject/{projectid}")]
        public IHttpActionResult GetAllResourceOnProject(int projectid)
        {
            var resource = _projects.GetAllResourceOnProject(projectid);
            if (resource == null)
                return NotFound();
            else return Json(resource);
        }
        [HttpPost]
        [Route("project/removeresource")]
        public IHttpActionResult RemoveResource(ProjectDetail projectDetail)
        {
            _projects.RemoveResource(projectDetail);
            return Json(new { message = "Success." });
        }

        [HttpPost]
        [Route("project/mapresource")]
        public IHttpActionResult MapResource(ProjectDetail projectDetail)
        {
            if (projectDetail == null)
                return BadRequest();
            else
            {
                _projects.MapResource(projectDetail);
                return Json(new { message = "Resource details updated successfully." });
            }
            
        }
        //commented for update on GIT 06/12/2018

        //[HttpGet]
        //[Route("project/GetAllActiveProjects")]
        //public IHttpActionResult GetAllActiveProjects()
        //{
        //    var projects = _projects.GetAllActiveProjects();
        //    if (projects == null)
        //        return NotFound();
        //    return Json(projects);
        //}
        [HttpGet]
        [Route("project/getactive")]
        public IHttpActionResult GetAllActiveProjects()
        {
            var projects = _projects.GetAllActiveProjects();
            if (projects == null)
                return NotFound();
            else return Json(projects);

        }
    }
}
