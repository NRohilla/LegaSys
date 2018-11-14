using LegaSysDataAccess;
using LegaSysDataEntities;
using LegaSysUOW.Interface;
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

        public IQueryable<Shift> GetAllShifts()
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
            return db.LegaSys_Master_Shifts.Where(x => x.ShiftID == id).Select(y => new Shift
            {
                ShiftID = y.ShiftID,
                WeekOff1 = y.WeekOff1,
                WeekOff2 = y.WeekOff2,
                WeekOff3 = y.WeekOff3,
                StartTimeIST = y.StartTimeIST,
                EndTimeIST = y.EndTimeIST,
                IsActive = y.IsActive
            }).FirstOrDefault();
        }
    }
}
