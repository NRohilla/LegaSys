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
        int AddClientDetails(ClientDetail objClient);
        ClientDetail GetClientById(Int32 Id);
        Boolean UpdateClientDetails(ClientDetail objClient);

        List<ClientDetail> GetAllClient();

        List<ClientProjects> GetAllProjectOfClient(Int32 Id);

        Boolean DeleteClientById(Int32 Id, Int32 userId);
        Boolean UpdateClientProjectDetailsWithId(ClientProjects objClientProject);

        Boolean ChangeClientStatus(Int32 ID, Int32 userId);

    }
}

