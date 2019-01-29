using LegaSysDataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysUOW.Interface
{
    public interface IUOWDomains
    {
        IQueryable<Domain> GetAllDomains();
        IQueryable<Domain> GetAllActiveDomains();
        Domain GetDomainById(int id);
        bool ChangeStatus(int id);
        int CreateDomain(Domain model, int userId);
        bool UpdateDomain(Domain model, int userId);
    }
}
