using LegaSysDataAccess;
using LegaSysUOW.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using LegaSysDataEntities;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.IO;

namespace LegaSysUOW.Repository
{
    public class UOWSubTask : IUOWSubTask
    {

        private readonly LegaSysEntities db;
        public UOWSubTask(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

     


        //Method for get all SubTask.******SADHANA********
        IEnumerable<SubTaskDetail> IUOWSubTask.GetAllProjectsSubTask()
        {

            var subtaskdetail = (from subtasks in db.LegaSys_ProjectSubTasks
                                 join tasks in db.LegaSys_ProjectTasks on subtasks.Project_Task_ID equals tasks.ProjectTaskID
                                 join projects in db.LegaSys_Projects on tasks.Project_ID equals projects.ProjectID
                                 select new { subtasks, tasks, projects }).AsEnumerable()
                   .Select(x => new SubTaskDetail
                   {
                       ProjectSubTaskID = x.subtasks.ProjectSubTaskID,
                       SubTask_Title = x.subtasks.Title,
                       SubTask_Description = x.subtasks.Description,
                       Attachment_ID = x.tasks.Attachment_ID,
                       Project_Task_ID = x.tasks.ProjectTaskID,
                       TaskTitle = x.tasks.Title,
                       Description = x.tasks.Description,
                       Project_Title = x.projects.Title,

                   });

            Console.WriteLine(subtaskdetail);
            return subtaskdetail;
        }


        //Method To get Subtask By Id ******SADHANA********
        IEnumerable<SubTaskDetail> IUOWSubTask.GetAllProjectSubTaskbyTaskId(int id)
        {
            var subtaskdetail = (from subtasks in db.LegaSys_ProjectSubTasks
                                 join tasks in db.LegaSys_ProjectTasks on subtasks.Project_Task_ID equals tasks.ProjectTaskID
                                 join projects in db.LegaSys_Projects on tasks.Project_ID equals projects.ProjectID
                                 where subtasks.Project_Task_ID == id
                                 select new { subtasks, tasks, projects }).AsEnumerable()

                                .Select(x => new SubTaskDetail
                                {
                                    ProjectSubTaskID = x.subtasks.ProjectSubTaskID,
                                    SubTask_Title = x.subtasks.Title,
                                    SubTask_Description = x.subtasks.Description,
                                    Attachment_ID = x.tasks.Attachment_ID,
                                    Project_Task_ID = x.tasks.ProjectTaskID,
                                    TaskTitle = x.tasks.Title,
                                    Description = x.tasks.Description,
                                    Project_Title = x.projects.Title

                                });
            return subtaskdetail;
        }



        //Method for creating new Subtask.******SADHANA******** 26 Dec 2018
        //Method to add upload on server folder.

        public string addAttechmentonServer(HttpPostedFile postedFile)
        {

            var AttachmentName = Path.GetFileName(postedFile.FileName);
            var attachmentPath = Path.Combine(System.Web.HttpContext.Current.Server.MapPath("~/App_Data/Subtask Uploads"), AttachmentName);
            postedFile.SaveAs(attachmentPath);


            return (attachmentPath);
        }


        //Method for creating new Subtask.******SADHANA********
        public bool CreateProjectSubTaskDetail(int id, List<SubTaskDetail> subtaskDetail, int createdBy)
        {
            

            var typeattachment = subtaskDetail.Select(z => new LegaSys_AttachmentTypes
            {
                AttachmentTypeID = z.AttachmentTypeID ?? 0,
                AttachmentType = z.AttachmentType,
                Created_Date = DateTime.Now,
                Description = z.SubTask_Description,
               
            }).ToList();

            typeattachment.RemoveAll(x => x.AttachmentType == null);

            foreach (var item in db.LegaSys_AttachmentTypes)
            {
                var type = typeattachment.FirstOrDefault(x => x.AttachmentType == item.AttachmentType);
                if (type != null)
                    typeattachment.Remove(type);
            }
            
            db.BulkInsert(typeattachment);

            var attachment = subtaskDetail.Select(y => new LegaSys_Attachments
            {
                AttachmentPath =y.AttachmentPath,
                Title = y.SubTask_Title,
                Description = y.SubTask_Description ,
                Created_By = createdBy,
                Created_Date = DateTime.Now,
                AttachmentTypeID = db.LegaSys_AttachmentTypes.FirstOrDefault(P => P.AttachmentType == y.AttachmentType)?.AttachmentTypeID
            }).ToList();

            attachment.RemoveAll(x => x.AttachmentPath == null);

            db.BulkInsert(attachment);

            var subtaskModel = subtaskDetail.Select(x => new LegaSys_ProjectSubTasks
            {
                Project_Task_ID = id,
                ProjectSubTaskID = x.ProjectSubTaskID,
                Title = x.SubTask_Title,
                Description = x.SubTask_Description,
                Attachment_ID = db.LegaSys_Attachments.FirstOrDefault(z => z.AttachmentPath == x.AttachmentPath)?.AttachmentID
                
            });

            db.BulkMerge(subtaskModel);

            db.SaveChanges();

            return true;
        }




        //method to update Subtask******SADHANA********
        public int UpdateProjectSubTaskDetail(SubTaskDetail projectSubTaskDetail)
        {
            var objProjectsubtaskDetail = db.LegaSys_ProjectSubTasks.Where(x => x.ProjectSubTaskID == projectSubTaskDetail.ProjectSubTaskID).FirstOrDefault();
            if (objProjectsubtaskDetail != null)
            {
                objProjectsubtaskDetail.ProjectSubTaskID = projectSubTaskDetail.ProjectSubTaskID;
                objProjectsubtaskDetail.Title = projectSubTaskDetail.SubTask_Title;
                objProjectsubtaskDetail.Description = projectSubTaskDetail.SubTask_Description;
                objProjectsubtaskDetail.Attachment_ID = projectSubTaskDetail.Attachment_ID;
                objProjectsubtaskDetail.Project_Task_ID = projectSubTaskDetail.Project_Task_ID;

                objProjectsubtaskDetail.Updated_By = projectSubTaskDetail.SubTask_Updated_By;

                objProjectsubtaskDetail.Updated_Date = (projectSubTaskDetail.projectTask_Updated_Date != null) ? projectSubTaskDetail.projectTask_Updated_Date : DateTime.Now;
                db.SaveChanges();
            }

            return projectSubTaskDetail.ProjectSubTaskID;


        }


        //Method For Delet Project******SADHANA********
        public void DeleteProjectSubTask(int id)
        {


        }


    }

}
