using LegaSysDataAccess;
using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System;
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

        public bool ChangeStatus(int id)
        {
            var location = db.LegaSys_Master_Locations.FirstOrDefault(x => x.LocationID == id);

            if (location == null)
                return false;

            if (location.IsActive)
                location.IsActive = false;
            else
                location.IsActive = true;

            db.SaveChanges();

            return true;
        }

        public int CreateLocation(Location model, int userId)
        {
            var location = new LegaSys_Master_Locations
            {
                LocationAddress = model.LocationAddress,
                Created_Date = DateTime.Now,
                Created_By = userId,
                IsActive = true
            };

            db.LegaSys_Master_Locations.Add(location);
            db.SaveChanges();

            return location.LocationID;
        }

        public IQueryable<Location> GetAllActiveLocations()
        {
            return FetchLocations().Where(x => x.IsActive);
        }

        public IQueryable<Location> GetAllLocations()
        {
            return FetchLocations();
        }

        private IQueryable<Location> FetchLocations()
        {
            return db.LegaSys_Master_Locations.Select(y => new Location
            {
                LocationID = y.LocationID,
                LocationAddress = y.LocationAddress,
                IsActive = y.IsActive
            });
        }

        public Location GetLocationById(int id)
        {
            return FetchLocations().FirstOrDefault(x => x.LocationID == id);
        }

        public bool UpdateLocation(Location model, int userId)
        {
            var location = db.LegaSys_Master_Locations.FirstOrDefault(x => x.LocationID == model.LocationID);

            if (location == null)
                return false;

            location.LocationAddress = model.LocationAddress;
            location.Updated_Date = DateTime.Now;
            location.Updated_By = userId;

            db.SaveChanges();

            return true;
        }
    }
}
