using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LegaSysUOW.Repository;
using LegaSysUOW.Interface;
using LegaSysDataEntities;
using Microsoft.AspNet.Identity;
using System.Security.Claims;

namespace LegaSysServices.Controllers
{
    [Authorize]
    public class ClientController : ApiController
    {
        string Result = string.Empty;
        private readonly IUOWClient _ClientRepository;

        public ClientController(IUOWClient ClientRepository)
        {
            _ClientRepository = ClientRepository;
        }

        [HttpGet]
        [Route("client/GetAllClient")]
        public IHttpActionResult GetAllClient()
        {

            return Json(new { success = true, data = _ClientRepository.GetAllClient() });

        }


        [HttpGet]
        [Route("client/GetClientById/{id}")]

        //Get client detail by Id
        public IHttpActionResult GetClientById(Int32 Id)
        {
            if (Id <= 0)
                return BadRequest("Invalid Client Id.");

            var clientDetails = _ClientRepository.GetClientById(Id);

            if (clientDetails == null)
                return NotFound();

            return Json(new { success = true, data = clientDetails });

        }



        [HttpPost]
        [Route("client/AddClientDetails")]
        //Post client details
        public IHttpActionResult AddClientDetails(ClientDetail Objclient)
        {
            //  int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);
            // Objclient.Created_By = userId;

            //   return Result = _ClientRepository.AddClientDetails(Objclient);
            if (Objclient != null)
            {
                int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);
                Objclient.Created_By = userId;
                int responce = _ClientRepository.AddClientDetails(Objclient);
                return Json(new { success = true, Id = responce });

            }
            return BadRequest("Model cannot be null");


        }



        [HttpPut]
        [Route("client/UpdateClientDetails")]
        //Update client details
        public IHttpActionResult UpdateClientDetails(ClientDetail objClient)
        {
            if (objClient != null)
            {
                int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);
                objClient.Updated_By = userId;
                Boolean responce = _ClientRepository.UpdateClientDetails(objClient);
                return Json(new { success = responce });

            }
            return BadRequest("Model cannot be null");


        }




        [HttpDelete]
        [Route("client/DeleteClientById/{id}")]
        //Delete client
        public IHttpActionResult DeleteClientById(Int32 Id)
        {
            //  

            //   Result = _ClientRepository.DeleteClientById(Id, userId);

            //  return Result;
            if (Id <= 0)
                return BadRequest("Invalid Client Id.");
            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);
            return Json(new { success = true, data = _ClientRepository.DeleteClientById(Id, userId) });

        }

        [HttpGet]
        [Route("client/GetProjectsByClientId/{id}")]

        //Get project list client detail by Id
        public IHttpActionResult GetProjectsByClientId(Int32 Id)
        {
            if (Id <= 0)
                return BadRequest("Invalid Client Id.");

            var clientProjects = _ClientRepository.GetAllProjectOfClient(Id);

            if (clientProjects == null)
                return NotFound();

            return Json(new { success = true, data = clientProjects });

        }
        [HttpPut]
        [Route("client/UpdateProjectDetailsWithId")]
        //Update client details
        public IHttpActionResult UpdateProjectDetailsWithId(ClientProjects objClientProject)
        {
            // int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);
            // objClientProject.Updated_By = userId;
            //  Boolean responce = _ClientRepository.UpdateClientProjectDetailsWithId(objClientProject);
            //  return responce;
            if (objClientProject != null)
            {
                int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);
                objClientProject.Updated_By = userId;
                Boolean responce = _ClientRepository.UpdateClientProjectDetailsWithId(objClientProject);
                return Json(new { success = responce });

            }
            return BadRequest("Model cannot be null");


        }
        [HttpPost]
        [Route("client/ActivateClientWithId")]
        //Update client details

        [HttpGet]
        [Route("client/updateClientStatus/{id}")]
        //Update client details
        public IHttpActionResult UpdateClientStatus(Int32 ID)
        {
            int.TryParse(((ClaimsIdentity)User.Identity).Claims.FirstOrDefault(x => x.Type == "userid").Value, out var userId);
            //objClientProject.Updated_By = userId;
            Boolean responce = _ClientRepository.ChangeClientStatus(ID, userId);
            return Json(new { success = responce });


        }








    }
}
