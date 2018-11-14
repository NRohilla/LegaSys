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
            var GetUserDetails = db.LegaSys_UserLogin.Where(p => p.Username.ToLower().Trim() == Username.ToLower().Trim()).FirstOrDefault();

            if (GetUserDetails == null)
                return null;

            return new UserLoginDetails()
            {
                UserLoginDetailID = GetUserDetails.UserLoginDetailID,
                Username = GetUserDetails.Username,
            };
        }
    }
}