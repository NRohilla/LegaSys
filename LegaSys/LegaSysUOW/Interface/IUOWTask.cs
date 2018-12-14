using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LegaSysDataEntities;

namespace LegaSysUOW.Interface
{

    //Interface
    public interface IUOWTask
    {
        int CreateProjectTaskDetail(TaskDetail projectTaskDetail);
        TaskDetail GetProjectTaskbyId(int id);
        IEnumerable<TaskDetail> GetAllProjectsTask();
        void DeleteProjectTask(int id);
        int UpdateProjectTaskDetail(TaskDetail projectTaskDetail);
    }
}
