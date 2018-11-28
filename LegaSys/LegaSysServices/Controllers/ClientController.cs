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



        IUOWClient ClientRepository = new UOWClient();
        string Result = string.Empty;


        [HttpGet]
        //Get all client list
        [Route("api/Client/GetAllClient")]
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
        public ClientDetail AddClientDetails(ClientDetail Objclient)
        {
            return ClientRepository.AddClientDetails(Objclient);


        }



        [HttpPut]
        //Update client details
        public string UpdateClientDetails(ClientDetail objClient)
        {

            Result = ClientRepository.UpdateClientDetails(objClient);
            return Result;

        }



        [HttpDelete]
        //Delete client 
        public string DeleteClientById(Int32 Id)
        {

            Result = ClientRepository.DeleteClientById(Id);

            return Result;

        }

        //added by MohitK 15/11/2018
        [HttpGet]
        [Route("api/Client/GetAllClientStatus")]
        //List of Client Status 
        public List<LegaSysDataAccess.LegaSys_ClientStatus> GetAllClientStatus()
        {
            return ClientRepository.GetClientStatus() ;

        }
    }
}
