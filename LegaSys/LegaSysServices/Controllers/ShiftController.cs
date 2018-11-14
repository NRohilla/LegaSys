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
        [Route("shift/{id}")]
        public IHttpActionResult GetShiftById(int id)
        {
            return Json(_uOWShifts.GetShiftById(id));
        }
    }
}
