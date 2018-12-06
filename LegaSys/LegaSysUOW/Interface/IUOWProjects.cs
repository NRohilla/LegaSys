using LegaSysDataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysUOW.Interface
{
    public interface IUOWProjects
    {
        int CreateProjectDetail(ProjectDetail projectDetail);

        int UpdateProjectDetail(ProjectDetail projectDetail);

        IEnumerable<ProjectDetail> GetAllProjects();
        ProjectDetail GetProject(int id);
        void DeleteProject(int id);
        IEnumerable<ProjectDetail> GetAllTechDomains();
        List<LegaSysDataAccess.LegaSys_Master_Technologies> GetAllTechnologyByDomainId(int masterdomainid);
        //List<LegaSysDataAccess.LegaSys_ClientStatus> GetClientStatus();
        //List<LegaSysDataAccess.LegaSys_Master_TechDomains> GetAllTechDomains();
        IEnumerable<ProjectDetail> GetAllTechnology();


    }
}
