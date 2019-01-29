using LegaSysDataAccess;
using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System;
using System.Linq;

namespace LegaSysUOW.Repository
{
    public class UOWShifts : IUOWShifts
    {
        private readonly LegaSysEntities db;

        public UOWShifts(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

        public bool ChangeStatus(int id)
        {
            var shift = db.LegaSys_Master_Shifts.FirstOrDefault(x => x.ShiftID == id);

            if (shift == null)
                return false;

            if (shift.IsActive)
                shift.IsActive = false;
            else
                shift.IsActive = true;

            db.SaveChanges();

            return true;
        }

        public int CreateShift(Shift model, int userId)
        {
            var shift = new LegaSys_Master_Shifts
            {
                WeekOff1 = model.WeekOff1,
                WeekOff2 = model.WeekOff2,
                WeekOff3 = model.WeekOff3,
                StartTimeIST = model.StartTimeIST,
                EndTimeIST = model.EndTimeIST,
                Created_Date = DateTime.Now,
                Created_By = userId,
                IsActive = true
            };

            db.LegaSys_Master_Shifts.Add(shift);
            db.SaveChanges();

            return shift.ShiftID;
        }

        public IQueryable<Shift> GetAllActiveShifts()
        {
            return FetchShifts().Where(x => x.IsActive);
        }

        public IQueryable<Shift> GetAllShifts()
        {
            return FetchShifts();
        }

        private IQueryable<Shift> FetchShifts()
        {
            return db.LegaSys_Master_Shifts.Select(y => new Shift
            {
                ShiftID = y.ShiftID,
                WeekOff1 = y.WeekOff1,
                WeekOff2 = y.WeekOff2,
                WeekOff3 = y.WeekOff3,
                StartTimeIST = y.StartTimeIST,
                EndTimeIST = y.EndTimeIST,
                IsActive = y.IsActive
            });
        }

        public Shift GetShiftById(int id)
        {
            return FetchShifts().FirstOrDefault(x => x.ShiftID == id);
        }

        public bool UpdateShift(Shift model, int userId)
        {
            var shift = db.LegaSys_Master_Shifts.FirstOrDefault(x => x.ShiftID == model.ShiftID);

            if (shift == null)
                return false;

            shift.WeekOff1 = model.WeekOff1;
            shift.WeekOff2 = model.WeekOff2;
            shift.WeekOff3 = model.WeekOff3;
            shift.StartTimeIST = model.StartTimeIST;
            shift.EndTimeIST = model.EndTimeIST;
            shift.Updated_Date = DateTime.Now;
            shift.Updated_By = userId;

            db.SaveChanges();

            return true;
        }
    }
}
