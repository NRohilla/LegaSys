using System.Collections.Generic;
using System.Linq;
using LegaSysUOW.Interface;
using LegaSysDataAccess;
using LegaSysDataEntities;

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
            var user = (from login in db.LegaSys_UserLogin.Where(x => x.IsActive.HasValue)
                        join details in db.LegaSys_UserDetails.Where(x => x.IsActive) on login.UserDetailID equals details.UserDetailID
                        where login.Username.ToLower().Trim() == Username.ToLower().Trim() && login.Password.Trim() == Password.Trim()
                        select new
                        {
                            login,
                            details
                        }).FirstOrDefault();

            if (user == null)
                return null;

            return new UserLoginDetails
            {
                UserLoginDetailID = user.login.UserLoginDetailID,
                Username = user.login.Username,
                Name = user.details.Firstname
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
    }
}