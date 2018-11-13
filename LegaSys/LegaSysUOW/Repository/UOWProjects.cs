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
   public class UOWProjects: IUOWProjects
    {
        private readonly LegaSysEntities db;

        public UOWProjects(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }


        public ProjectDetail GetProject(int id)
        {
            return (from projects in db.LegaSys_Projects
                    join clients in db.LegaSys_ClientDetails on projects.Client_ID equals clients.ClientDetailID
                    join domain in db.LegaSys_Master_TechDomains on projects.ProjectDomain_ID equals domain.TechDomainID
                    where projects.ProjectID == id
                    select new ProjectDetail
                    {
                        ProjectID = projects.ProjectID,
                        Title = projects.Title,
                        Description = projects.Description,
                        Client_ID = projects.Client_ID.Value,
                        ClientName = clients.ClientName,
                        ProjectDomain_ID = projects.ProjectDomain_ID.Value,
                        DomainName = domain.DomainName,
                        Created_By = projects.Created_By,
                        Updated_By = projects.Updated_By,
                        Created_Date = projects.Created_Date,
                        Updated_Date = projects.Updated_Date
                    }).FirstOrDefault();
        }

        public IEnumerable<ProjectDetail> GetAllProjects()
        {
            return (from projects in db.LegaSys_Projects
                   join clients in db.LegaSys_ClientDetails on projects.Client_ID equals clients.ClientDetailID
                   join domain in db.LegaSys_Master_TechDomains on projects.ProjectDomain_ID equals domain.TechDomainID
                   select new { projects, clients, domain }).AsEnumerable()
                  .Select(x => new ProjectDetail
                   {
                       ProjectID = x.projects.ProjectID,
                       Title = x.projects.Title,
                       Description =x. projects.Description,
                       Client_ID = x.projects.Client_ID.Value,
                       ClientName = x.clients.ClientName,
                       ProjectDomain_ID = x.projects.ProjectDomain_ID.Value,
                       DomainName =x. domain.DomainName,
                       Created_By =x.projects.Created_By,
                       Updated_By =x.projects.Updated_By,
                       Created_Date =x.projects.Created_Date,
                       Updated_Date = x.projects.Updated_Date,
                       Status =x.projects.Status,
                       Country = x.clients.Country,
                       EmailID = x.clients.EmailID,
                       EmailID2 = x.clients.EmailID2,
                       EmailID3=x.clients.EmailID3,
                       CoClient=x.clients.CoClient
                   });
        }
        public int CreateProjectDetail(ProjectDetail projectDetail)
        {
            var projectModel = new LegaSys_Projects
            {
                Title = projectDetail.Title,
                Description = projectDetail.Description,
                Client_ID = projectDetail.Client_ID,
                Status = projectDetail.Status,
                Created_By = projectDetail.Created_By,
                Updated_By = projectDetail.Updated_By,
                Created_Date = projectDetail.Created_Date,
                Updated_Date = projectDetail.Updated_Date,
            };

            db.LegaSys_Projects.Add(projectModel);
            db.SaveChanges();

            return projectModel.ProjectID;
        }

        public int UpdateProjectDetail(ProjectDetail projectDetail)
        {
            var objProjectDetail = db.LegaSys_Projects.Where(x => x.ProjectID == projectDetail.ProjectID).FirstOrDefault();
            if (objProjectDetail != null)
            {
                objProjectDetail.ProjectID = projectDetail.ProjectID;
                objProjectDetail.ProjectDomain_ID = projectDetail.ProjectDomain_ID;
                objProjectDetail.Title = projectDetail.Title;
                objProjectDetail.Description = projectDetail.Description;
                objProjectDetail.Client_ID = projectDetail.Client_ID;
                objProjectDetail.Status = projectDetail.Status;
                objProjectDetail.Created_By = projectDetail.Created_By;
                objProjectDetail.Updated_By = projectDetail.Updated_By;
                objProjectDetail.Created_Date = projectDetail.Created_Date;
                objProjectDetail.Updated_Date = (projectDetail.Updated_Date != null) ? projectDetail.Updated_Date : DateTime.Now;
                db.SaveChanges();
            }

            return objProjectDetail.ProjectID;

        }

        public void DeleteProject(int id)
        {
            var project = db.LegaSys_Projects.FirstOrDefault(x => x.ProjectID == id);
            if (project.Status == 0)
            {
                project.Status = 1;
                db.SaveChanges();
            }
            else
            {
                project.Status = 0;
                db.SaveChanges();
            }
           
        }
    }
}
