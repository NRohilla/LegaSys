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
    public class UOWTechnologies : IUOWTechnologies
    {
        private readonly LegaSysEntities db;

        public UOWTechnologies(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

        public bool ChangeStatus(int id)
        {
            var technology = db.LegaSys_Master_Technologies.FirstOrDefault(x => x.TechnologyID == id);

            if (technology == null)
                return false;

            if (technology.IsActive)
                technology.IsActive = false;
            else
                technology.IsActive = true;

            db.SaveChanges();

            return true;
        }

        public int CreateTechnology(Technology model, int userId)
        {
            var technology = new LegaSys_Master_Technologies
            {
                Name = model.Name,
                Master_DomainID = model.Master_DomainID,
                Created_Date = DateTime.Now,
                Created_By = userId,
                IsActive = true
            };

            db.LegaSys_Master_Technologies.Add(technology);
            db.SaveChanges();

            return technology.TechnologyID;
        }

        public IEnumerable<Technology> GetAllActiveTechnologies()
        {
            return FetchTechnologies().Where(x => x.IsActive);
        }

        public IEnumerable<Technology> GetAllTechnologies()
        {
            return FetchTechnologies();
        }

        public Technology GetTechnologyById(int id)
        {
            return FetchTechnologies().FirstOrDefault(x => x.TechnologyID == id);
        }

        public bool UpdateTechnology(Technology model, int userId)
        {
            var technology = db.LegaSys_Master_Technologies.FirstOrDefault(x => x.TechnologyID == model.TechnologyID);

            if (technology == null)
                return false;

            technology.Name = model.Name;
            technology.Master_DomainID = model.Master_DomainID;
            technology.Updated_Date = DateTime.Now;
            technology.Updated_By = userId;

            db.SaveChanges();

            return true;
        }

        private IEnumerable<Technology> FetchTechnologies()
        {
            return (from tech in db.LegaSys_Master_Technologies
                    join domain in db.LegaSys_Master_TechDomains on tech.Master_DomainID equals domain.TechDomainID
                    select new { tech, domain }).AsEnumerable()
                         .Select(y => new Technology
                         {
                             Name = y.tech.Name,
                             Master_DomainID = y.tech.Master_DomainID,
                             TechnologyID = y.tech.TechnologyID,
                             Master_DomainName = y.domain.DomainName,
                             IsActive = y.tech.IsActive
                         });
        }
    }
}
