using LegaSysDataAccess;
using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System.Linq;

namespace LegaSysUOW.Repository
{
    public class UOWRoles : IUOWRoles
    {
        private readonly LegaSysEntities db;

        public UOWRoles(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

        public IQueryable<Role> GetAllRoles()
        {
            return db.LegaSys_Master_Roles.Where(x => x.IsActive).Select(y => new Role
            {
                UserRoleID = y.UserRoleID,
                RoleName = y.Role
            });
        }
    }
}
