using LegaSysDataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysUOW.Interface
{
    public interface IUOWResources
    {
        IEnumerable<UserDetail> GetAllActiveResources();
        UserDetail GetResourceById(int id);
        int CreateResoure(UserDetail userDetail);
        void UpdateResource(UserDetail userDetail);
        void DeleteResource(int id);
    }
}
