using LegaSysDataEntities;
using System.Linq;

namespace LegaSysUOW.Interface
{
    public interface IUOWShifts
    {
        IQueryable<Shift> GetAllShifts();
    }
}
