using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace LegaSysServices.Controllers
{
    public class LeaveController : ApiController
    {
        private readonly IUOWLeaves _uOWLeaves;

        public LeaveController(IUOWLeaves uOWLeaves)
        {
            _uOWLeaves = uOWLeaves;
        }

        [HttpGet]
        [Route("leave/getall")]
        public IHttpActionResult GetAllLeaves()
        {
            return Json(_uOWLeaves.GetAllLeaves());
        }

        [HttpGet]
        [Route("leave/getallactive")]
        public IHttpActionResult GetAllActiveLeaves()
        {
            return Json(_uOWLeaves.GetAllActiveLeaves());
        }

        [HttpGet]
        [Route("leave/{id}")]
        public IHttpActionResult GetLeaveById(int id)
        {
            return Json(_uOWLeaves.GetLeaveById(id));
        }

        [HttpGet]
        [Route("leave/changestatus/{id}")]
        public IHttpActionResult ChangeStatus(int id)
        {
            return Json(new { success = _uOWLeaves.ChangeStatus(id) });
        }

        [HttpPost]
        [Route("leave/create")]
        public IHttpActionResult CreateLeave(Leave model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            int id = _uOWLeaves.CreateLeave(model, userId);

            if (id <= 0)
                return InternalServerError();

            return Json(new { success = true, id });
        }

        [HttpPost]
        [Route("leave/update")]
        public IHttpActionResult UpdateLeave(Leave model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            if (!_uOWLeaves.UpdateLeave(model, userId))
                return NotFound();

            return Json(new { success = true });
        }

        [HttpGet]
        [Route("leavetype/getall")]
        public IHttpActionResult GetAllLeavetype()
        {
            return Json(_uOWLeaves.GetAllLeavetype());
        }

        [HttpGet]
        [Route("leavetype/getallactive")]
        public IHttpActionResult GetAllActiveLeavetype()
        {
            return Json(_uOWLeaves.GetAllActiveLeavetype());
        }

        [HttpGet]
        [Route("leavetype/{id}")]
        public IHttpActionResult GetLeavetypeById(int id)
        {
            return Json(_uOWLeaves.GetLeavetypeById(id));
        }

        [HttpGet]
        [Route("leavetype/changestatus/{id}")]
        public IHttpActionResult ChangeLeavetypeStatus(int id)
        {
            return Json(new { success = _uOWLeaves.ChangeLeavetypeStatus(id) });
        }

        [HttpPost]
        [Route("leavetype/create")]
        public IHttpActionResult CreateLeavetype(LeaveType model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            int id = _uOWLeaves.CreateLeavetype(model, userId);

            if (id <= 0)
                return InternalServerError();

            return Json(new { success = true, id });
        }

        [HttpPost]
        [Route("leavetype/update")]
        public IHttpActionResult UpdateLeavetype(LeaveType model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            if (!_uOWLeaves.UpdateLeavetype(model, userId))
                return NotFound();

            return Json(new { success = true });
        }

    }
}
