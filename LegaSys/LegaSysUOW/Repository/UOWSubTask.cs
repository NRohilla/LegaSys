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
                                    Project_Title = x.projects.Title,
                                    SubTaskOriginal_Estimate = x.subtasks.SubTaskOriginal_Estimate,
                                    Completed = (x.subtasks.SubTaskCompleted),
                                    Remaining = (x.subtasks.SubTaskRemaining),
                                    Status_Id = x.subtasks.SubTask_Status,
                                    SubTask_Status_Icon= db.LegaSys_TaskStatus.SingleOrDefault(TaskIcon_obj => TaskIcon_obj.Status_Id == x.subtasks.SubTask_Status)?.Status_Icon,
                                    SubTask_Status = db.LegaSys_TaskStatus.SingleOrDefault(SubTaskStatus_obj => SubTaskStatus_obj.Status_Id == x.subtasks.SubTask_Status)?.Status_Type,
                                    Priority_Id = x.subtasks.SubTask_Priority,
                                    SubTask_Priority = db.LegaSys_Priority.SingleOrDefault(SubTaskPriority_obj => SubTaskPriority_obj.Priority_Id == x.subtasks.SubTask_Priority)?.Priority_Type,
                                    Activity_Id = x.subtasks.SubTask_Activity,
                                    SubTask_Activity = db.LegaSys_Activity.SingleOrDefault(SubTaskActivity_obj => SubTaskActivity_obj.Activity_Id == x.subtasks.SubTask_Activity)?.Activity_Name,

                                    Risk_Id = x.subtasks.SubTask_Risk,
                                    SubTask_AssignTo = x.tasks.Task_AssignTo,
                                    SubTaskTarget_Date = x.subtasks.SubTarget_Date,
                                    SubTaskStart_Date = x.subtasks.SubTaskStart_Date,
                                    SubTaskAcceptance_Criteria = x.subtasks.SubTaskAcceptance_Criteria,


                                });
            return subtaskdetail;
        }



        //Method for creating new Subtask.******SADHANA******** 26 Dec 2018
        //Method to add upload on server folder.

        //public string addAttechmentonServer(HttpPostedFile postedFile)
        //{

        //    var AttachmentName = Path.GetFileName(postedFile.FileName);
        //    var attachmentPath = Path.Combine(System.Web.HttpContext.Current.Server.MapPath("~/App_Data/Subtask Uploads"), AttachmentName);
        //    postedFile.SaveAs(attachmentPath);


        //    return (attachmentPath);
        //}


        //Method for creating new Subtask.******SADHANA********
        public bool CreateProjectSubTaskDetail(int id,SubTaskDetail objSubTask)
        {


            //var typeattachment = subtaskDetail.Select(z => new LegaSys_AttachmentTypes
            //{
            //    AttachmentTypeID = z.AttachmentTypeID ?? 0,
            //    AttachmentType = z.AttachmentType,
            //    Created_Date = DateTime.Now,
            //    Description = z.SubTask_Description,

            //}).ToList();

            //typeattachment.RemoveAll(x => x.AttachmentType == null);

            //foreach (var item in db.LegaSys_AttachmentTypes)
            //{
            //    var type = typeattachment.FirstOrDefault(x => x.AttachmentType == item.AttachmentType);
            //    if (type != null)
            //        typeattachment.Remove(type);
            //}

            //db.BulkInsert(typeattachment);

            //var attachment = subtaskDetail.Select(y => new LegaSys_Attachments
            //{
            //    AttachmentPath = y.AttachmentPath,
            //    Title = y.SubTask_Title,
            //    Description = y.SubTask_Description,
            //    Created_By = createdBy,
            //    Created_Date = DateTime.Now,
            //    AttachmentTypeID = db.LegaSys_AttachmentTypes.FirstOrDefault(P => P.AttachmentType == y.AttachmentType)?.AttachmentTypeID
            //}).ToList();

            //attachment.RemoveAll(x => x.AttachmentPath == null);

            //db.BulkInsert(attachment);

            //adding data to project task table
            var subtaskModel = new LegaSys_ProjectSubTasks
            {
                Project_Task_ID = id,

                Title = objSubTask.SubTask_Title,

                Description = objSubTask.SubTask_Description,

                // Attachment_ID = attachment.AttachmentID,

               // Created_By = createdBy,

                SubTaskAcceptance_Criteria = objSubTask.SubTaskAcceptance_Criteria,

                SubTarget_Date = objSubTask.SubTaskTarget_Date,

                SubTaskStart_Date = objSubTask.SubTaskStart_Date,

                Created_Date = DateTime.Now,

                SubTask_Priority = objSubTask.Priority_Id,

                SubTask_Risk = objSubTask.Risk_Id,

                SubTask_Status = objSubTask.Status_Id,

                SubTaskOriginal_Estimate = objSubTask.SubTaskOriginal_Estimate,

                SubTaskRemaining = objSubTask.Remaining,

                SubTaskCompleted = objSubTask.Completed


            };

            db.LegaSys_ProjectSubTasks.Add(subtaskModel);

            db.SaveChanges();

           
                //db.BulkMerge(subtaskModel);

                 db.SaveChanges();

            return true;
        }




        //method to update Subtask******SADHANA********
        public int UpdateSubTaskDetail(SubTaskDetail projectSubTaskDetail)
        {
            var objSubTask = db.LegaSys_ProjectSubTasks.Where(x => x.ProjectSubTaskID == projectSubTaskDetail.ProjectSubTaskID).FirstOrDefault();
            if (objSubTask != null)
            {
                objSubTask.ProjectSubTaskID = projectSubTaskDetail.ProjectSubTaskID;

                objSubTask.Title = projectSubTaskDetail.SubTask_Title;

                objSubTask.Description = projectSubTaskDetail.SubTask_Description;

                objSubTask.SubTaskAcceptance_Criteria = projectSubTaskDetail.SubTaskAcceptance_Criteria;

                objSubTask.SubTarget_Date = projectSubTaskDetail.SubTaskTarget_Date;

                objSubTask.SubTaskStart_Date = projectSubTaskDetail.SubTaskStart_Date;

                objSubTask.SubTask_Activity = projectSubTaskDetail.Activity_Id;

                objSubTask.SubTask_AssignTo = db.LegaSys_ProjectTasks.SingleOrDefault(Task_obj => Task_obj.ProjectTaskID == projectSubTaskDetail.Project_Task_ID)?.Task_AssignTo;

                objSubTask.SubTask_Priority = projectSubTaskDetail.Priority_Id;

                objSubTask.SubTask_Risk = projectSubTaskDetail.Risk_Id;

                objSubTask.SubTask_Status = projectSubTaskDetail.Status_Id;

                objSubTask.SubTaskOriginal_Estimate = projectSubTaskDetail.SubTaskOriginal_Estimate;

                objSubTask.SubTaskRemaining = projectSubTaskDetail.Remaining;

                objSubTask.SubTaskCompleted = projectSubTaskDetail.Completed;

                db.SaveChanges();
            }

            return projectSubTaskDetail.ProjectSubTaskID;


        }


        //Method For Delet Project******SADHANA********
        public void DeleteProjectSubTask(int id)
        {


        }


        public bool CheckIsSubTaskExsists(string subtaskTittle)
        {

            var SubTask = (from subtasks in db.LegaSys_ProjectSubTasks
                           where (subtasks.Title == subtaskTittle)
                           select subtasks).FirstOrDefault();

            if (SubTask == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }


    }

}
