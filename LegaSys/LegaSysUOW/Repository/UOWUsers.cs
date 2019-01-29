using System.Collections.Generic;
using System.Linq;
using LegaSysUOW.Interface;
using LegaSysDataAccess;
using LegaSysDataEntities;
using System;

namespace LegaSysUOW.Repository
{
    public class UOWUsers : IUOWUsers
    {
        private readonly LegaSysEntities db;

        public UOWUsers(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

        public UserLoginDetails AuthenticateAndFetchUserDetail(string Username, string Password)
        {
            //validate user credentials
            var user = (from login in db.LegaSys_UserLogin.Where(x => x.IsActive.Value)
                        join details in db.LegaSys_UserDetails.Where(x => x.IsActive) on login.UserDetailID equals details.UserDetailID
                        where login.Username.ToLower().Trim() == Username.ToLower().Trim() && login.Password.Trim() == Password.Trim()
                        select new
                        {
                            login,
                            details
                        }).FirstOrDefault();

            if (user == null)
                return null;

            var lastLogin = user.login.LastLogin;
            user.login.LastLogin = DateTime.Now;
            db.SaveChanges();

            return new UserLoginDetails
            {
                UserDetailID = user.details.UserDetailID,
                Username = user.login.Username,
                Name = user.details.Firstname,
                LastLogin = lastLogin
            };
        }

        public List<UserDetail> GetUserList(int roleId)
        {
            List<UserDetail> list = null;
            using (LegaSysEntities db = new LegaSysEntities())
            {
                list = db.LegaSys_UserDetails.Where(x => (x.IsActive && x.Master_Role_ID < roleId) || x.Master_Role_ID == 2).AsEnumerable().Select(y => new UserDetail
                {
                    UserDetailID = y.UserDetailID,
                    Fullname = $"{y.Firstname} {y.Lastname}"
                }).ToList();
            }
            return list;
        }
        public List<ProjectDetail> GetAvailableUserListForProject(int[] Id)
        {
            List<ProjectDetail> list = null;
            using (LegaSysEntities db = new LegaSysEntities())
            {
                list = (from d in db.LegaSys_UserDetails.Where(x => (!Id.Contains(x.UserDetailID)) && x.IsActive == true).AsEnumerable()
                        join s in db.LegaSys_Master_Shifts on d.Master_Shift_ID equals s.ShiftID into s_join
                        from s in s_join.DefaultIfEmpty()
                        join r in db.LegaSys_Master_Roles on d.Master_Role_ID equals r.UserRoleID into r_join
                        from r in r_join.DefaultIfEmpty()
                        join rh in db.LegaSys_UserDetails on d.ReportingHead_ID equals rh.UserDetailID into rh_join
                        from rh in rh_join.DefaultIfEmpty()                        
                        select new ProjectDetail
                        {
                            Resource_ID = d.UserDetailID,
                            ResourceName = $"{d.Firstname} {d.Lastname}",
                            ResourceEmailId = d.EmailId,
                            ReportingHead_ID = d.ReportingHead_ID,
                            ReportingHeadName = $"{rh.Firstname} {rh.Lastname}",
                            Master_Shift_ID = d.Master_Shift_ID,
                            Shift = $"{s.StartTimeIST} {"-"} {s.EndTimeIST}",
                            TotalExp = d.TotalExp,
                            Master_Role_ID = d.Master_Role_ID,
                            Master_Role = r.Role
                        }).ToList();
            }
            return list;
        }
    }
}