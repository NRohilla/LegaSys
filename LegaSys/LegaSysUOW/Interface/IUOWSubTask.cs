using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LegaSysDataEntities;

namespace LegaSysUOW.Interface
{

    //Interface******SADHANA********
    public interface IUOWSubTask
    {
        IEnumerable<SubTaskDetail> GetAllProjectsSubTask();
        bool CreateProjectSubTaskDetail(int id, List<SubTaskDetail> subtaskDetail);
        SubTaskDetail GetProjectSubTaskbyId(int id);
        void DeleteProjectSubTask(int id);
        int UpdateProjectSubTaskDetail(SubTaskDetail projectTaskDetail);
    }
}
