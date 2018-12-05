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
    [Authorize]
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

            return Json(new { id = result, message = "Project created successfully." });
        }

        [HttpPost]
        //[Route("project/{id}/update")]
        [Route("project/update")]
        public IHttpActionResult Put([FromBody]ProjectDetail objProjects)
        {
            var lsProjects = _projects.UpdateProjectDetail(objProjects);
            if (lsProjects <= 0)
                return InternalServerError();

            return Json(new { id = lsProjects, message = "Project Updated successfully." });

        }

        [HttpGet]
        [Route("project/{id}/delete")]
        public IHttpActionResult DeleteProject(int id)
        {
            _projects.DeleteProject(id);
            return Json(new { message = "Project deleted  successfully." });
        }

        [HttpGet]
        [Route("project/gettechdomains")]
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
            return Json(project);
        }

        [HttpGet]
        [Route("project/getalltechnologybydomain/{id}")]
        public IHttpActionResult GetAllTechnologyByDomainId(int id)
        {
            return Json(_projects.GetAllTechnologyByDomainId(id));
        }

    }
}
