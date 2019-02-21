using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LegaSysServices.Controllers
{
    [RoutePrefix("TestAPI")]
    public class testController : ApiController
    {
        [HttpGet]
        [Route("TestMethod")]
        public string Test()
        {
            return "Success";
        }
    }
}
