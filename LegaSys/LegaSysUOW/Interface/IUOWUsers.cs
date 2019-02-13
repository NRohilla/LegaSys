using LegaSysDataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysUOW.Interface
{
    public interface IUOWUsers
    {
        UserLoginDetails AuthenticateAndFetchUserDetail(string Username, string Password);
        List<UserDetail> GetUserList(int roleId);
        List<ProjectResources> GetAvailableUserListForProject(int[] roleId);
    }
}
    