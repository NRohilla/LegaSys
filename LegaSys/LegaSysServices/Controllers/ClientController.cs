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
    
    public class ClientController : ApiController
    {

       

      
        string Result = string.Empty;
        private readonly IUOWClient ClientRepository;

        public ClientController(UOWClient _uOWClient)
        {
            ClientRepository = _uOWClient;
        }



        [HttpGet]
        //Get all client list
        public List<ClientDetail> GetAllClient()
        {

            return ClientRepository.GetAllClient();

        }


        [HttpGet]
        //Get client detail by Id
        public ClientDetail GetClientById(Int32 Id)
        {

            return ClientRepository.GetClientById(Id);

        }



        [HttpPost]

        //Post client details
        public int AddClientDetails(ClientDetail Objclient)
        {
            int Result;
            return Result= ClientRepository.AddClientDetails(Objclient);
        

        }


        
        [HttpPut]
        //Update client details
        public string UpdateClientDetails(ClientDetail objClient)
        {
           
            Result= ClientRepository.UpdateClientDetails(objClient);
            return Result;

        }

        

        [HttpDelete]
        //Delete client 
        public string DeleteClientById(Int32 Id)
        {
           
            Result = ClientRepository.DeleteClientById(Id);

            return Result;

        }





    }
}
