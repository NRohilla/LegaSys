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
        bool UpdateResource(UserDetail userDetail);
        bool DeleteResource(int id, int userId);
        IEnumerable<UserBackground> GetUserBackground(int id);
        bool CreateUserBackground(int id, bool isExp, List<UserBackground> userBackground);

      IEnumerable<UserEducationModel> GetUserQualification(int id);

        IEnumerable<UserEducationModel> GetUserCertification(int id);

        bool CreateUserQualification(int id,List<UserEducationModel> userEducation);
    }
}
