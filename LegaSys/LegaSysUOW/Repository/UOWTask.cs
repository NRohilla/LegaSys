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
    public class UOWTask : IUOWTask
    {
        private readonly LegaSysEntities db;
        //declation of Global Variable to accept Id and Send To Perticuler db Table.
        private int attachmentid;
        private int attachmentTypeId;

        public UOWTask(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

        //Method for get any perticuler Task by Id
        public TaskDetail GetProjectTaskbyId(int id)
        {
            return (from tasks in db.LegaSys_ProjectTasks
                    join Projects in db.LegaSys_Projects on tasks.Project_ID equals Projects.ProjectID
                    join clients in db.LegaSys_ClientDetails on Projects.Client_ID equals clients.ClientDetailID

                    where tasks.ProjectTaskID == id
                    select new TaskDetail
                    {
                        ProjectTaskID = tasks.ProjectTaskID,
                        TaskTitle = tasks.Title,
                        Description = tasks.Description,
                        Attachment_ID = tasks.Attachment_ID,
                        Project_ID = tasks.Project_ID,
                        Created_By = tasks.Created_By,
                        Updated_By = tasks.Updated_By,
                        Created_Date = tasks.Created_Date,
                        Updated_Date = tasks.Updated_Date,
                        Project_Title=Projects.Title,
                        Client_ID=clients.ClientDetailID,
                        Client_Name =clients.ClientName
                     


                    }).FirstOrDefault();
        }
        //Method for get all Task.
        public IEnumerable<TaskDetail> GetAllProjectsTask()
        {
            var taskdetail=
            (from tasks in db.LegaSys_ProjectTasks
                    join Projects in db.LegaSys_Projects on tasks.Project_ID equals Projects.ProjectID
                    select new { tasks, Projects }).AsEnumerable()
                  .Select(x => new TaskDetail
                  {
                      ProjectTaskID = x.tasks.ProjectTaskID,
                      TaskTitle = x.tasks.Title,
                      Description = x.tasks.Description,
                      Attachment_ID = x.tasks.Attachment_ID,
                      Project_ID = x.tasks.Project_ID,
                      Created_By = x.tasks.Created_By,
                      Updated_By = x.tasks.Updated_By,
                      Created_Date = x.tasks.Created_Date,
                      Updated_Date = x.tasks.Updated_Date,
                      Project_Title = x.Projects.Title,
                      Project_Description = x.Projects.Description,
                      Client_ID = x.Projects.Client_ID,
                      //Client_Name=x.
                      Project_Domain_ID = x.Projects.ProjectDomain_ID,
                      Project_Status = x.Projects.Status,
                      ProjectCreated_By = x.Projects.Created_By,
                      ProjectUpdated_By = x.Projects.Updated_By,
                      ProjectCreated_Date = x.Projects.Created_Date,
                      projectUpdated_Date = x.Projects.Updated_Date


                  });
            return taskdetail;
        }

          //Method for creating new task.
         public int CreateProjectTaskDetail(TaskDetail projectTaskDetail)
        {
            //adding data to attechment table

            var attachment = new LegaSys_Attachments
            {
                AttachmentPath = projectTaskDetail.AttachmentPath,
                Title = projectTaskDetail.TaskTitle,
                Description = projectTaskDetail.Description,
                Created_Date = (projectTaskDetail.Created_Date != null) ? projectTaskDetail.Created_Date : DateTime.Now,
                AttachmentTypeID= attachmentTypeId
            };
            db.LegaSys_Attachments.Add(attachment);



            //declaration of object attachmentType
            var Typeattachment = new LegaSys_AttachmentTypes
            {
                AttachmentType = projectTaskDetail .AttachmentType,
                Description =projectTaskDetail .Description ,
                Created_Date= (projectTaskDetail.Created_Date != null) ? projectTaskDetail.Created_Date : DateTime.Now,
            };

             db.LegaSys_AttachmentTypes.Add(Typeattachment);
          


            //adding data to project task table
            var taskModel = new LegaSys_ProjectTasks
            {
                Title = projectTaskDetail.TaskTitle,
                Description = projectTaskDetail.Description,
                //fk need dropdown from project TABLE DATASOURCE
                Attachment_ID = attachmentid,
                //fk need dropdown from project TABLE DATASOURCE
                Project_ID = projectTaskDetail .Project_ID,
                Created_By = projectTaskDetail.Created_By,
                Updated_By = projectTaskDetail.Updated_By,
                Created_Date = (projectTaskDetail.Created_Date != null)?projectTaskDetail.Created_Date:DateTime.Now,
                Updated_Date = projectTaskDetail.Updated_Date,
                
            };

            //assingment of Global variable to access in any table
            attachmentid=attachment.AttachmentID;
            attachmentTypeId = Typeattachment.AttachmentTypeID;
            db.LegaSys_ProjectTasks.Add(taskModel);
            db.SaveChanges();

            return taskModel.ProjectTaskID;
        }

        public int UpdateProjectTaskDetail(TaskDetail projectTaskDetail)
        {
            var objProjecttaskDetail = db.LegaSys_ProjectTasks.Where(x => x.ProjectTaskID == projectTaskDetail.ProjectTaskID).FirstOrDefault();
            if (objProjecttaskDetail != null)
            {
                objProjecttaskDetail.ProjectTaskID = projectTaskDetail.ProjectTaskID;
                objProjecttaskDetail.Title = projectTaskDetail .TaskTitle;
                objProjecttaskDetail.Description=projectTaskDetail .Description;
                objProjecttaskDetail.Attachment_ID =projectTaskDetail.Attachment_ID;
                objProjecttaskDetail.Project_ID= projectTaskDetail .Project_ID;
                objProjecttaskDetail.Created_By = projectTaskDetail.Created_By;
                objProjecttaskDetail.Updated_By = projectTaskDetail.Updated_By;
                objProjecttaskDetail.Created_Date = projectTaskDetail.Created_Date;
                objProjecttaskDetail.Updated_Date = (projectTaskDetail.Updated_Date != null) ? projectTaskDetail.Updated_Date :DateTime.Now;
                db.SaveChanges();
            }

            return objProjecttaskDetail.ProjectTaskID;

        }

        public void DeleteProjectTask(int id)
        {
            //var Task = db.LegaSys_ProjectTasks.FirstOrDefault(x => x.ProjectTaskID == id);
            //if (Task.Status == 0)
            //{
            //    Task.Status = 1;
            //    db.SaveChanges();
            //}
            //else
            //{
            //    Task.Status = 0;
            //    db.SaveChanges();
            //}

        }

        

      
    }
}


