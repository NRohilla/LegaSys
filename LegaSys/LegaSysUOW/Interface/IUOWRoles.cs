using LegaSysDataEntities;
using System.Linq;

namespace LegaSysUOW.Interface
{
    public interface IUOWRoles
    {
        IQueryable<Role> GetAllRoles();
        IQueryable<Role> GetAllActiveRoles();
        Role GetRoleById(int id);
        bool ChangeStatus(int id);
        int CreateRole(Role model, int userId);
        bool UpdateRole(Role model, int userId);
    }
}
