using LegaSysDataAccess;
using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System;
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

        public bool ChangeStatus(int id)
        {
            var role = db.LegaSys_Master_Roles.FirstOrDefault(x => x.UserRoleID == id);

            if (role == null)
                return false;

            if (role.IsActive)
                role.IsActive = false;
            else
                role.IsActive = true;

            db.SaveChanges();

            return true;
        }

        public int CreateRole(Role model, int userId)
        {
            var role = new LegaSys_Master_Roles
            {
                UserRoleID = model.UserRoleID,
                Role = model.RoleName,
                Description = model.Description,
                Created_Date = DateTime.Now,
                Created_By = userId,
                IsActive = true
            };

            db.LegaSys_Master_Roles.Add(role);
            db.SaveChanges();

            return role.UserRoleID;
        }

        public IQueryable<Role> GetAllActiveRoles()
        {
            return FetchRoles().Where(x => x.IsActive);
        }

        public IQueryable<Role> GetAllRoles()
        {
            return FetchRoles();
        }

        public Role GetRoleById(int id)
        {
            return FetchRoles().FirstOrDefault(x => x.UserRoleID == id);
        }

        public bool UpdateRole(Role model, int userId)
        {
            var role = db.LegaSys_Master_Roles.FirstOrDefault(x => x.UserRoleID == model.UserRoleID);

            if (role == null)
                return false;

            role.Role = model.RoleName;
            role.Description = model.Description;
            role.Updated_Date = DateTime.Now;
            role.Updated_By = userId;

            db.SaveChanges();

            return true;
        }

        private IQueryable<Role> FetchRoles()
        {
            return db.LegaSys_Master_Roles.Select(y => new Role
            {
                UserRoleID = y.UserRoleID,
                RoleName = y.Role,
                Description = y.Description,
                IsActive = y.IsActive
            });
        }
    }
}
