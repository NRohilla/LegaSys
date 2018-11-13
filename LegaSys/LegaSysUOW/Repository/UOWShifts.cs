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
            return db.LegaSys_Master_Shifts.Where(x => x.IsActive).Select(y => new Shift
            {
                ShiftID = y.ShiftID,
                StartTimeIST = y.StartTimeIST,
                EndTimeIST = y.EndTimeIST
            });
        }
    }
}
