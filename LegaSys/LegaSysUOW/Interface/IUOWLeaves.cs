using LegaSysDataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysUOW.Interface
{
    public interface IUOWLeaves
    {
        IQueryable<Leave> GetAllLeaves();
        IQueryable<Leave> GetAllActiveLeaves();
        Leave GetLeaveById(int id);
        bool ChangeStatus(int id);
        int CreateLeave(Leave model, int userId);
        bool UpdateLeave(Leave model, int userId);
        IQueryable<LeaveType> GetAllLeavetype();
        IQueryable<LeaveType> GetAllActiveLeavetype();
        LeaveType GetLeavetypeById(int id);
        bool ChangeLeavetypeStatus(int id);
        int CreateLeavetype(LeaveType model, int userId);
        bool UpdateLeavetype(LeaveType model, int userId);
    }
}
