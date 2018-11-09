using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LegaSysDataEntities;

namespace LegaSysUOW.Interface
{
    public interface IUOWClient
    {
        int AddClientDetails(ClientDetail objClient);
        ClientDetail GetClientById(Int32 Id);
        string UpdateClientDetails(ClientDetail objClient);

        List<ClientDetail> GetAllClient();

        string DeleteClientById(Int32 Id);

    }
}

