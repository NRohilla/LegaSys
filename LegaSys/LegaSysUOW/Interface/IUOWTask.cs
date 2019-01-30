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
        bool DeleteProjectTask(int id);
        int UpdateProjectTaskDetail(TaskDetail projectTaskDetail);
        IEnumerable<TaskDetail> GetTaskStatus();
        IEnumerable<TaskDetail> GetTaskPriority();
        IEnumerable<TaskDetail> GetTaskRisk();
        IEnumerable<TaskDetail> GetTaskActivity();
    }
}
