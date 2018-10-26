using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysUOW.Interface
{
    public interface IUOWUsers
    {
        List<object> AuthenticateAndFetchUserDetail(string Username, string Password);
    }
}
    