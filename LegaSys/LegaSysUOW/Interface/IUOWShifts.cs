using LegaSysDataEntities;
using System.Linq;

namespace LegaSysUOW.Interface
{
    public interface IUOWShifts
    {
        IQueryable<Shift> GetAllShifts();
        IQueryable<Shift> GetAllActiveShifts();
        Shift GetShiftById(int id);
        bool ChangeStatus(int id);
        int CreateShift(Shift model, int userId);
        bool UpdateShift(Shift model, int userId);
    }
}
