using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LegaSysDataEntities;

//Test Shubham

namespace LegaSysUOW.Interface
{
    public interface IUOWClient
    {
        ClientDetail AddClientDetails(ClientDetail objClient);
        ClientDetail GetClientById(Int32 Id);
        string UpdateClientDetails(ClientDetail objClient);

        List<ClientDetail> GetAllClient();

        string DeleteClientById(Int32 Id);
        List<LegaSysDataAccess.LegaSys_ClientStatus> GetClientStatus();

    }
}

