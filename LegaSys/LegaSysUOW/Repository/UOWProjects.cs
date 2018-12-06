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
    public class UOWProjects : IUOWProjects
    {
        private readonly LegaSysEntities db;

        public UOWProjects(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }


        //public ProjectDetail GetProject(int id)
        //{
        //    return (from projects in db.LegaSys_Projects
        //            join clients in db.LegaSys_ClientDetails on projects.Client_ID equals clients.ClientDetailID
        //            join domain in db.LegaSys_Master_TechDomains on projects.ProjectDomain_ID equals domain.TechDomainID
        //            join resources in db.LegaSys_ProjectResources on projects.ProjectID equals resources.Project_ID
        //            join resourcedetail in db.LegaSys_UserDetails on resources.Resource_ID equals resourcedetail.UserDetailID
        //            join task in db.LegaSys_ProjectTasks on projects.ProjectID equals task.Project_ID
        //            join subtask in db.LegaSys_ProjectSubTasks on task.ProjectTaskID equals subtask.Project_Task_ID
        //            where projects.ProjectID == id
        //            select new ProjectDetail
        //            {
        //                ProjectID = projects.ProjectID,
        //                Title = projects.Title,
        //                Description = projects.Description,
        //                Client_ID = projects.Client_ID.Value,
        //                ClientName = clients.ClientName,
        //                Address=clients.Address,
        //                Country = clients.Country,
        //                CoClient = clients.CoClient,
        //                CoClient2 = clients.CoClient2,
        //                CoClient3 = clients.CoClient3,
        //                CoClient4 = clients.CoClient4,
        //                EmailID = clients.EmailID,
        //                EmailID2 = clients.EmailID2,
        //                EmailID3 = clients.EmailID3,
        //                EmailID4 = clients.EmailID4,
        //                ClientStatus= clients.IsActive,

        //                ProjectDomain_ID = projects.ProjectDomain_ID.Value,
        //                DomainName = domain.DomainName,
        //                Created_By = projects.Created_By,
        //                Updated_By = projects.Updated_By,
        //                Created_Date = projects.Created_Date,
        //                Updated_Date = projects.Updated_Date,
        //                ProjectDomainName = domain.DomainName,
        //                Resource_ID = resources.Resource_ID.Value,
        //                ResourceFirstname = resourcedetail.Firstname,
        //                ResourceMiddlename = resourcedetail.Middlename,
        //                ResourceLastname = resourcedetail.Lastname,
        //                TotalExp = resourcedetail.TotalExp,
        //                ResourceEmailId = resourcedetail.EmailId,
        //                ResourceMobileNumber = resourcedetail.MobileNumber,
        //                Resource_IsActive = resourcedetail.IsActive,
        //                Remarks = resourcedetail.Remarks,
        //                Master_Shift_ID = resourcedetail.Master_Shift_ID,
        //                Master_Location_ID = resourcedetail.Master_Location_ID,
        //                ReportingHead_ID = resourcedetail.ReportingHead_ID,
        //                Master_Role_ID = resourcedetail.Master_Role_ID,
        //                ProjectTaskID = task.ProjectTaskID,
        //                TaskTitle = task.Title,
        //                TaskDescription = task.Description,
        //                TaskAttachmentID = task.Attachment_ID.Value,
        //                ProjectSubTaskID = subtask.ProjectSubTaskID,
        //                SubTaskTitle = subtask.Title,
        //                SubTaskDescription = subtask.Description,
        //                SubTaskAttachmentID = subtask.Attachment_ID.Value
        //            }).FirstOrDefault();
        //}


        public ProjectDetail GetProject(int id)
        {
            //int Client_ID, ProjectDomain_ID, ProjectID, Resource_ID, Project_ID, ProjectSubTaskID;

            var query = (from p in db.LegaSys_Projects
                         join c in db.LegaSys_ClientDetails on p.Client_ID equals c.ClientDetailID into c_join
                         from c in c_join.DefaultIfEmpty()
                         join t in db.LegaSys_Master_TechDomains on p.ProjectDomain_ID equals t.TechDomainID into t_join
                         from t in t_join.DefaultIfEmpty()
                         join r in db.LegaSys_ProjectResources on p.ProjectID equals r.Project_ID into r_join
                         from r in r_join.DefaultIfEmpty()
                         join ud in db.LegaSys_UserDetails on r.Resource_ID equals ud.UserDetailID into ud_join
                         from ud in ud_join.DefaultIfEmpty()
                         join pt in db.LegaSys_ProjectTasks on p.ProjectID equals pt.Project_ID into pt_join
                         from pt in pt_join.DefaultIfEmpty()
                         join st in db.LegaSys_ProjectSubTasks on pt.ProjectTaskID equals st.ProjectSubTaskID into st_join
                         from st in st_join.DefaultIfEmpty()
                         where p.ProjectID == id
                         select new ProjectDetail
                         {
                             ProjectID = p.ProjectID,
                             Title = p.Title,
                             Description = p.Description,
                             Client_ID = p.Client_ID.Value,
                             ClientName = c.ClientName,
                             Address = c.Address,
                             Country = c.Country,
                             CoClient = c.CoClient,
                             CoClient2 = c.CoClient2,
                             CoClient3 = c.CoClient3,
                             CoClient4 = c.CoClient4,
                             EmailID = c.EmailID,
                             EmailID2 = c.EmailID2,
                             EmailID3 = c.EmailID3,
                             EmailID4 = c.EmailID4,
                             ClientStatus = c.IsActive,

                             ProjectDomain_ID = p.ProjectDomain_ID.Value,
                             DomainName = t.DomainName,
                             Created_By = p.Created_By,
                             Updated_By = p.Updated_By,
                             Created_Date = p.Created_Date,
                             Updated_Date = p.Updated_Date,
                             ProjectDomainName = t.DomainName,
                             Resource_ID = r.Resource_ID.Value,
                             ResourceFirstname = ud.Firstname,
                             ResourceMiddlename = ud.Middlename,
                             ResourceLastname = ud.Lastname,
                             TotalExp = ud.TotalExp,
                             ResourceEmailId = ud.EmailId,
                             ResourceMobileNumber = ud.MobileNumber,
                             Resource_IsActive = ud.IsActive,
                             Remarks = ud.Remarks,
                             Master_Shift_ID = ud.Master_Shift_ID,
                             Master_Location_ID = ud.Master_Location_ID,
                             ReportingHead_ID = ud.ReportingHead_ID,
                             Master_Role_ID = ud.Master_Role_ID,
                             ProjectTaskID = pt.ProjectTaskID,
                             TaskTitle = pt.Title,
                             TaskDescription = pt.Description,
                             TaskAttachmentID = pt.Attachment_ID.Value,
                             ProjectSubTaskID = st.ProjectSubTaskID,
                             SubTaskTitle = st.Title,
                             SubTaskDescription = st.Description,
                             SubTaskAttachmentID = st.Attachment_ID.Value
                         }).FirstOrDefault();
            return query;
        }
        public IEnumerable<ProjectDetail> GetAllProjects()
        {
            var allprojects = (from projects in db.LegaSys_Projects
                               join clients in db.LegaSys_ClientDetails.Where(x=>x.IsActive==true) on projects.Client_ID equals clients.ClientDetailID into c_join
                               from c in c_join.DefaultIfEmpty()
                               join domain in db.LegaSys_Master_TechDomains.Where(x=>x.IsActive==true) on projects.ProjectDomain_ID equals domain.TechDomainID into t_join
                               from t in t_join.DefaultIfEmpty()
                               
                                   //select new { projects, c, t_join }).AsEnumerable()
                               select new ProjectDetail
                               {
                                   ProjectID = projects.ProjectID,
                                   Title = projects.Title,
                                   Description = projects.Description,
                                   Client_ID = projects.Client_ID.Value,
                                   ClientName = c.ClientName,
                                   ProjectDomain_ID = projects.ProjectDomain_ID.Value,
                                   DomainName = t.DomainName,
                                   Created_By = projects.Created_By,
                                   Updated_By = projects.Updated_By,
                                   Created_Date = projects.Created_Date,
                                   Updated_Date = projects.Updated_Date,
                                   Status = projects.Status,
                                   Country = c.Country,
                                   EmailID = c.EmailID,
                                   EmailID2 = c.EmailID2,
                                   EmailID3 = c.EmailID3,
                                   CoClient = c.CoClient,

                                   //ProjectDomainName = t.DomainName,
                                   //Resource_ID = x.resources.Resource_ID.Value,
                                   //ProjectTaskID = x.task.ProjectTaskID,
                                   //TaskTitle = x.task.Title,
                                   //TaskDescription = x.task.Description,
                                   //TaskAttachmentID = x.task.Attachment_ID.Value,
                                   //ProjectSubTaskID = x.subtask.ProjectSubTaskID,
                                   //SubTaskTitle = x.subtask.Title,
                                   //SubTaskDescription = x.subtask.Description,
                                   //SubTaskAttachmentID = x.subtask.Attachment_ID.Value
                               }).AsEnumerable();
            return allprojects;
        }
        public int CreateProjectDetail(ProjectDetail projectDetail)
        {
            var projectModel = new LegaSys_Projects
            {
                Title = projectDetail.Title,
                Description = projectDetail.Description,
                Client_ID = projectDetail.Client_ID,
                ProjectDomain_ID = projectDetail.ProjectDomain_ID,
                Status = 0,//projectDetail.Status,
                Created_By = projectDetail.Created_By,
                Updated_By = projectDetail.Updated_By,
                Created_Date = DateTime.Now,
                Updated_Date = DateTime.Now,
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
                //objProjectDetail.Status = projectDetail.Status;
                objProjectDetail.Created_By = projectDetail.Created_By;
                objProjectDetail.Updated_By = projectDetail.Updated_By;
                objProjectDetail.Created_Date = projectDetail.Created_Date;
                objProjectDetail.Updated_Date = DateTime.Now;// (projectDetail.Updated_Date != null) ? projectDetail.Updated_Date : DateTime.Now;
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

        public IEnumerable<ProjectDetail> GetAllTechnology()
        {
            return (from projects in db.LegaSys_Master_TechDomains
                    select new { projects }).AsEnumerable()
                  .Select(x => new ProjectDetail
                  {
                      ProjectDomain_ID = x.projects.TechDomainID,
                      DomainName = x.projects.DomainName,
                  });
        }

        public IEnumerable<ProjectDetail> GetAllTechDomains()
        {
            try
            {
                return (from projects in db.LegaSys_Master_TechDomains
                        select new { projects }).AsEnumerable()
                 .Select(x => new ProjectDetail
                 {
                     ProjectDomain_ID = x.projects.TechDomainID,
                     DomainName = x.projects.DomainName,
                 });
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<LegaSys_Master_Technologies> GetAllTechnologyByDomainId(int id)
        {
            try
            {
                using (LegaSysEntities db = new LegaSysEntities())
                {
                    var tech = db.LegaSys_Master_Technologies.AsEnumerable().Where(x => x.Master_DomainID == id).Select(x => new LegaSys_Master_Technologies
                    {
                        TechnologyID = x.TechnologyID,
                        Name = x.Name
                    }).ToList();
                    return tech;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
