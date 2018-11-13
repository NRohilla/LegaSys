using LegaSysDataEntities;
using System.Linq;

namespace LegaSysUOW.Interface
{
    public interface IUOWLocations
    {
        IQueryable<Location> GetAllLocations();
    }
}
