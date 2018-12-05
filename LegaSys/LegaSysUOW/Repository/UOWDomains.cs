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
    public class UOWDomains : IUOWDomains
    {
        private readonly LegaSysEntities db;

        public UOWDomains(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

        public bool ChangeStatus(int id)
        {
            var domain = db.LegaSys_Master_TechDomains.FirstOrDefault(x => x.TechDomainID == id);

            if (domain == null)
                return false;

            if (domain.IsActive)
                domain.IsActive = false;
            else
                domain.IsActive = true;

            db.SaveChanges();

            return true;
        }

        public int CreateDomain(Domain model, int userId)
        {
            var domain = new LegaSys_Master_TechDomains
            {
                DomainName = model.DomainName,
                Created_Date = DateTime.Now,
                Created_By = userId,
                IsActive = true
            };

            db.LegaSys_Master_TechDomains.Add(domain);
            db.SaveChanges();

            return domain.TechDomainID;
        }

        public IQueryable<Domain> GetAllActiveDomains()
        {
            return FetchDomains().Where(x => x.IsActive);
        }

        public IQueryable<Domain> GetAllDomains()
        {
            return FetchDomains();
        }

        public Domain GetDomainById(int id)
        {
            return FetchDomains().FirstOrDefault(x => x.TechDomainID == id);
        }

        public bool UpdateDomain(Domain model, int userId)
        {
            var domain = db.LegaSys_Master_TechDomains.FirstOrDefault(x => x.TechDomainID == model.TechDomainID);

            if (domain == null)
                return false;

            domain.DomainName = model.DomainName;
            domain.Updated_Date = DateTime.Now;
            domain.Updated_By = userId;

            db.SaveChanges();

            return true;
        }

        private IQueryable<Domain> FetchDomains()
        {
            return db.LegaSys_Master_TechDomains.Select(y => new Domain
            {
                TechDomainID = y.TechDomainID,
                DomainName = y.DomainName,
                IsActive = y.IsActive
            });
        }
    }
}
