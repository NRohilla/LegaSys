using System.Collections.Generic;
using System.Linq;
using LegaSysUOW.Interface;
using LegaSysDataAccess;

namespace LegaSysUOW.Repository
{
    public class UOWUsers : IUOWUsers
    {
        public List<object> AuthenticateAndFetchUserDetail(string Username, string Password)
        {
            //declare the object to return
            List<object> ObjUserInfo = null;

            using (LegaSysEntities db = new LegaSysEntities())
            {
                //validate user credentials
                var GetUserDetails = db.LegaSys_UserLogin.Where(p => p.Username.ToLower().Trim() == Username.ToLower().Trim()).FirstOrDefault();
                if (GetUserDetails != null)
                {
                    //initialize the object
                    ObjUserInfo = new List<object>();
                    ObjUserInfo.Add(new LegaSysDataEntities.UserLoginDetails()
                    {
                        UserLoginDetailID = GetUserDetails.UserLoginDetailID,
                    });
                }
            }
            return ObjUserInfo;
        }
    }
}