using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using LegaSysDataEntities;

namespace LegaSysUOW.Interface
{

    //Interface******SADHANA********
    public interface IUOWSubTask
    {
        IEnumerable<SubTaskDetail> GetAllProjectsSubTask();
        bool CreateProjectSubTaskDetail(int id, List<SubTaskDetail> subtaskDetail, int createdBy);
        IEnumerable<SubTaskDetail> GetAllProjectSubTaskbyTaskId(int id);
        void DeleteProjectSubTask(int id);
        int UpdateProjectSubTaskDetail(SubTaskDetail projectTaskDetail);
        // string addAttechmentonServer(HttpPostedFile postedFile);
    }
}
