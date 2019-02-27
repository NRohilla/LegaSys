using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LegaSysDataEntities;


namespace LegaSysUOW.Interface
{
    public interface IUOWCoClient
    {
        Boolean AddCoClient(List<CoClient> objCoClient, Int32 ClientID);
      
        List<CoClient> GetAllCoClientByClientID(Int32 ClientID);
        Boolean UpdateCoClientByClientID(List<CoClient> objCoClient,Int32 ClientID);
        
    }
}
