using LegaSysDataEntities;
using System.Linq;

namespace LegaSysUOW.Interface
{
    public interface IUOWLocations
    {
        IQueryable<Location> GetAllLocations();
        IQueryable<Location> GetAllActiveLocations();
        Location GetLocationById(int id);
        bool ChangeStatus(int id);
        int CreateLocation(Location model, int userId);
        bool UpdateLocation(Location model, int userId);
    }
}
