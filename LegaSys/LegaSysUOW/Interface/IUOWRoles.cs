using LegaSysDataEntities;
using System.Linq;

namespace LegaSysUOW.Interface
{
    public interface IUOWRoles
    {
        IQueryable<Role> GetAllRoles();
    }
}
