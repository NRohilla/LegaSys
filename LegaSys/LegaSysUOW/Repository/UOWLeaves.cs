using LegaSysDataAccess;
using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysUOW.Repository
{
    public class UOWLeaves : IUOWLeaves
    {
        private readonly LegaSysEntities db;

        public UOWLeaves(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

        public bool ChangeLeavetypeStatus(int id)
        {
            var leave = db.LegaSys_Master_LeaveTypes.FirstOrDefault(x => x.LeaveTypeID == id);

            if (leave == null)
                return false;

            if (leave.IsActive)
                leave.IsActive = false;
            else
                leave.IsActive = true;

            db.SaveChanges();

            return true;
        }

        public bool ChangeStatus(int id)
        {
            var leave = db.LegaSys_Master_LeaveStatus.FirstOrDefault(x => x.LeaveStatusID == id);

            if (leave == null)
                return false;

            if (leave.IsActive)
                leave.IsActive = false;
            else
                leave.IsActive = true;

            db.SaveChanges();

            return true;
        }

        public int CreateLeave(Leave model, int userId)
        {
            var leave = new LegaSys_Master_LeaveStatus
            {
                StatusName = model.StatusName,
                Created_Date = DateTime.Now,
                Created_By = userId,
                IsActive = true
            };

            db.LegaSys_Master_LeaveStatus.Add(leave);
            db.SaveChanges();

            return leave.LeaveStatusID;
        }

        public int CreateLeavetype(LeaveType model, int userId)
        {
            var leave = new LegaSys_Master_LeaveTypes
            {
                TypeName = model.TypeName,
                Created_Date = DateTime.Now,
                Created_By = userId,
                IsActive = true
            };

            db.LegaSys_Master_LeaveTypes.Add(leave);
            db.SaveChanges();

            return leave.LeaveTypeID;
        }

        public IQueryable<Leave> GetAllActiveLeaves()
        {
            return FetchLeaves().Where(x => x.IsActive);
        }

        public IQueryable<LeaveType> GetAllActiveLeavetype()
        {
            return FetchLeaveType().Where(x => x.IsActive);
        }

        public IQueryable<Leave> GetAllLeaves()
        {
            return FetchLeaves();
        }

        public IQueryable<LeaveType> GetAllLeavetype()
        {
            return FetchLeaveType();
        }

        public Leave GetLeaveById(int id)
        {
            return FetchLeaves().FirstOrDefault(x => x.LeaveStatusID == id);
        }

        public LeaveType GetLeavetypeById(int id)
        {
            return FetchLeaveType().FirstOrDefault(x => x.LeaveTypeID == id);
        }

        public bool UpdateLeave(Leave model, int userId)
        {
            var leave = db.LegaSys_Master_LeaveStatus.FirstOrDefault(x => x.LeaveStatusID == model.LeaveStatusID);

            if (leave == null)
                return false;

            leave.StatusName = model.StatusName;
            leave.Updated_Date = DateTime.Now;
            leave.Updated_By = userId;

            db.SaveChanges();

            return true;
        }

        public bool UpdateLeavetype(LeaveType model, int userId)
        {
            var leave = db.LegaSys_Master_LeaveTypes.FirstOrDefault(x => x.LeaveTypeID == model.LeaveTypeID);

            if (leave == null)
                return false;

            leave.TypeName = model.TypeName;
            leave.Updated_Date = DateTime.Now;
            leave.Updated_By = userId;

            db.SaveChanges();

            return true;
        }

        private IQueryable<Leave> FetchLeaves()
        {
            return db.LegaSys_Master_LeaveStatus.Select(y => new Leave
            {
                LeaveStatusID = y.LeaveStatusID,
                StatusName = y.StatusName,
                IsActive = y.IsActive
            });
        }

        private IQueryable<LeaveType> FetchLeaveType()
        {
            return db.LegaSys_Master_LeaveTypes.Select(y => new LeaveType
            {
                LeaveTypeID = y.LeaveTypeID,
                TypeName = y.TypeName,
                IsActive = y.IsActive
            });
        }
    }
}
