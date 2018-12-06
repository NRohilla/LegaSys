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
        //List<LegaSysDataAccess.LegaSys_ClientStatus> GetClientStatus();
        List<LegaSysDataAccess.LegaSys_Master_TechDomains> GetAllTechDomains();
        IEnumerable<ProjectDetail> GetAllTechnology();

        //for updating the GIT on 06/12/2018

    }
}
