using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LegaSysUOW.Repository;
using LegaSysUOW.Interface;
using LegaSysDataEntities;

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
        public List<ClientDetail> GetAllClient()
        {

            return _ClientRepository.GetAllClient();

        }


        [HttpGet]
        [Route("client/GetClientById/{id}")]

        //Get client detail by Id
        public ClientDetail GetClientById(Int32 Id)
        {

            return _ClientRepository.GetClientById(Id);

        }



        [HttpPost]
        [Route("client/AddClientDetails")]
        //Post client details
        public int AddClientDetails(ClientDetail Objclient)
        {
            int Result;
            return Result= _ClientRepository.AddClientDetails(Objclient);
        

        }


        
        [HttpPut]
        [Route("client/UpdateClientDetails")]
        //Update client details
        public string UpdateClientDetails(ClientDetail objClient)
        {
           
            Result= _ClientRepository.UpdateClientDetails(objClient);
            return Result;

        }


        

        [HttpDelete]
        [Route("client/DeleteClientById/{id}")]
        //Delete client
        public string DeleteClientById(Int32 Id)
        {
           
            Result = _ClientRepository.DeleteClientById(Id);

            return Result;

        }





    }
}
