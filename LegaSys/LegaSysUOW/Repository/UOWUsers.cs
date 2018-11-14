using System.Collections.Generic;
using System.Linq;
using LegaSysUOW.Interface;
using LegaSysDataAccess;
using LegaSysDataEntities;

namespace LegaSysUOW.Repository
{
    public class UOWUsers : IUOWUsers
    {
        public UserLoginDetails AuthenticateAndFetchUserDetail(string Username, string Password)
        {
            //declare the object to return
            UserLoginDetails ObjUserInfo = null;

            using (LegaSysEntities db = new LegaSysEntities())
            {
                //validate user credentials
                var GetUserDetails = db.LegaSys_UserLogin.Where(p => p.Username.ToLower().Trim() == Username.ToLower().Trim()).FirstOrDefault();
                if (GetUserDetails != null)
                {
                    //initialize the object
                    //ObjUserInfo = new List<UserLoginDetails>();
                    ObjUserInfo = new LegaSysDataEntities.UserLoginDetails()
                    {
                        UserLoginDetailID = GetUserDetails.UserLoginDetailID,
                        Username = GetUserDetails.Username,

                    };
                }
            }
            return ObjUserInfo;
        }

        public List<UserDetail> GetUserList()
        {
            List<UserDetail> list = null;
            using (LegaSysEntities db = new LegaSysEntities())
            {
                list = db.LegaSys_UserDetails.Where(x => x.IsActive).AsEnumerable().Select(y => new UserDetail
                {
                    UserDetailID = y.UserDetailID,
                    Fullname = $"{y.Firstname} {y.Lastname}"
                }).ToList();
            }
            return list;
        }
    }
}