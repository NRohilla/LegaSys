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


        public ProjectDetail GetProject(int id)
        {
            return (from projects in db.LegaSys_Projects
                    join clients in db.LegaSys_ClientDetails on projects.Client_ID equals clients.ClientDetailID
                    join domain in db.LegaSys_Master_TechDomains on projects.ProjectDomain_ID equals domain.TechDomainID
                    join resources in db.LegaSys_ProjectResources on projects.ProjectID equals resources.Project_ID
                    join resourcedetail in db.LegaSys_UserDetails on resources.Resource_ID equals resourcedetail.UserDetailID
                    join task in db.LegaSys_ProjectTasks on projects.ProjectID equals task.Project_ID
                    join subtask in db.LegaSys_ProjectSubTasks on task.ProjectTaskID equals subtask.Project_Task_ID
                    where projects.ProjectID == id
                    select new ProjectDetail
                    {
                        ProjectID = projects.ProjectID,
                        Title = projects.Title,
                        Description = projects.Description,
                        Client_ID = projects.Client_ID.Value,
                        ClientName = clients.ClientName,
                        Address=clients.Address,
                        Country = clients.Country,
                        CoClient = clients.CoClient,
                        CoClient2 = clients.CoClient2,
                        CoClient3 = clients.CoClient3,
                        CoClient4 = clients.CoClient4,
                        EmailID = clients.EmailID,
                        EmailID2 = clients.EmailID2,
                        EmailID3 = clients.EmailID3,
                        EmailID4 = clients.EmailID4,
                        ClientStatus= clients.IsActive,

                        ProjectDomain_ID = projects.ProjectDomain_ID.Value,
                        DomainName = domain.DomainName,
                        Created_By = projects.Created_By,
                        Updated_By = projects.Updated_By,
                        Created_Date = projects.Created_Date,
                        Updated_Date = projects.Updated_Date,
                        ProjectDomainName = domain.DomainName,
                        Resource_ID = resources.Resource_ID.Value,
                        ResourceFirstname = resourcedetail.Firstname,
                        ResourceMiddlename = resourcedetail.Middlename,
                        ResourceLastname = resourcedetail.Lastname,
                        TotalExp = resourcedetail.TotalExp,
                        ResourceEmailId = resourcedetail.EmailId,
                        ResourceMobileNumber = resourcedetail.MobileNumber,
                        Resource_IsActive = resourcedetail.IsActive,
                        Remarks = resourcedetail.Remarks,
                        Master_Shift_ID = resourcedetail.Master_Shift_ID,
                        Master_Location_ID = resourcedetail.Master_Location_ID,
                        ReportingHead_ID = resourcedetail.ReportingHead_ID,
                        Master_Role_ID = resourcedetail.Master_Role_ID,
                        ProjectTaskID = task.ProjectTaskID,
                        TaskTitle = task.Title,
                        TaskDescription = task.Description,
                        TaskAttachmentID = task.Attachment_ID.Value,
                        ProjectSubTaskID = subtask.ProjectSubTaskID,
                        SubTaskTitle = subtask.Title,
                        SubTaskDescription = subtask.Description,
                        SubTaskAttachmentID = subtask.Attachment_ID.Value
                    }).FirstOrDefault();
        }

        public IEnumerable<ProjectDetail> GetAllProjects()
        {
            var allprojects = (from projects in db.LegaSys_Projects
                               join clients in db.LegaSys_ClientDetails on projects.Client_ID equals clients.ClientDetailID
                               join domain in db.LegaSys_Master_TechDomains on projects.ProjectDomain_ID equals domain.TechDomainID

                               select new { projects, clients, domain }).AsEnumerable()
                  .Select(x => new ProjectDetail
                  {
                      ProjectID = x.projects.ProjectID,
                      Title = x.projects.Title,
                      Description = x.projects.Description,
                      Client_ID = x.projects.Client_ID.Value,
                      ClientName = x.clients.ClientName,
                      ProjectDomain_ID = x.projects.ProjectDomain_ID.Value,
                      DomainName = x.domain.DomainName,
                      Created_By = x.projects.Created_By,
                      Updated_By = x.projects.Updated_By,
                      Created_Date = x.projects.Created_Date,
                      Updated_Date = x.projects.Updated_Date,
                      Status = x.projects.Status,
                      Country = x.clients.Country,
                      EmailID = x.clients.EmailID,
                      EmailID2 = x.clients.EmailID2,
                      EmailID3 = x.clients.EmailID3,
                      CoClient = x.clients.CoClient,

                      ProjectDomainName = x.domain.DomainName,
                      //Resource_ID = x.resources.Resource_ID.Value,
                      //ProjectTaskID = x.task.ProjectTaskID,
                      //TaskTitle = x.task.Title,
                      //TaskDescription = x.task.Description,
                      //TaskAttachmentID = x.task.Attachment_ID.Value,
                      //ProjectSubTaskID = x.subtask.ProjectSubTaskID,
                      //SubTaskTitle = x.subtask.Title,
                      //SubTaskDescription = x.subtask.Description,
                      //SubTaskAttachmentID = x.subtask.Attachment_ID.Value
                  });
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
                objProjectDetail.Updated_Date = DateTime.Now;//(projectDetail.Updated_Date != null) ? projectDetail.Updated_Date : DateTime.Now;
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

        //public List<LegaSys_ClientStatus> GetClientStatus()
        //{
        //    var status = db.LegaSys_ClientStatus.AsEnumerable().Select(x=> new LegaSys_ClientStatus
        //    {
        //        ClientStatusId =  x.ClientStatusId ,
        //        ClientStatus =  x.ClientStatus
        //    }).ToList();
        //    return status;           

        //}

        public List<LegaSys_Master_TechDomains> GetAllTechDomains()
        {
            try
            {

                using (LegaSysEntities db = new LegaSysEntities())
                {
                    var domains = db.LegaSys_Master_TechDomains.AsEnumerable().Select(x => new LegaSys_Master_TechDomains
                    {
                        TechDomainID = x.TechDomainID,
                        DomainName = x.DomainName
                    }).ToList();
                    return domains;
                }
            }
            catch (Exception)
            {

                throw;
            }





        }
    }
}
