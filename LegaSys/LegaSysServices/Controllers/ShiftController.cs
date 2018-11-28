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
    public class ShiftController : ApiController
    {
        private readonly IUOWShifts _uOWShifts;

        public ShiftController(IUOWShifts uOWShifts)
        {
            _uOWShifts = uOWShifts;
        }

        [HttpGet]
        [Route("shift/getall")]
        public IHttpActionResult GetAllShifts()
        {
            return Json(_uOWShifts.GetAllShifts());
        }

        [HttpGet]
        [Route("shift/getallactive")]
        public IHttpActionResult GetAllActiveShifts()
        {
            return Json(_uOWShifts.GetAllActiveShifts());
        }

        [HttpGet]
        [Route("shift/{id}")]
        public IHttpActionResult GetShiftById(int id)
        {
            return Json(_uOWShifts.GetShiftById(id));
        }

        [HttpGet]
        [Route("shift/changestatus/{id}")]
        public IHttpActionResult ChangeStatus(int id)
        {
            return Json(new { success = _uOWShifts.ChangeStatus(id) });
        }

        [HttpPost]
        [Route("shift/create")]
        public IHttpActionResult CreateShift(Shift model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            int id = _uOWShifts.CreateShift(model, userId);

            if (id <= 0)
                return InternalServerError();

            return Json(new { success = true, id });
        }

        [HttpPost]
        [Route("shift/update")]
        public IHttpActionResult UpdateShift(Shift model)
        {
            if (model == null)
                return BadRequest("Model cannot be null");

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);

            if (!_uOWShifts.UpdateShift(model, userId))
                return NotFound();

            return Json(new { success = true });
        }
    }
}
