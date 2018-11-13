using LegaSysDataAccess;
using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System.Linq;

namespace LegaSysUOW.Repository
{
    public class UOWLocations : IUOWLocations
    {
        private readonly LegaSysEntities db;

        public UOWLocations(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

        public IQueryable<Location> GetAllLocations()
        {
            return db.LegaSys_Master_Locations.Where(x => x.IsActive).Select(y => new Location
            {
                LocationID = y.LocationID,
                LocationAddress = y.LocationAddress
            });
        }
    }
}
