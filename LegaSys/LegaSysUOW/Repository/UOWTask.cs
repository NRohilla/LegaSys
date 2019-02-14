using LegaSysDataAccess;
using LegaSysDataEntities;
using LegaSysUOW.Interface;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysUOW.Repository
{
    public class UOWTask : IUOWTask
    {
        private readonly LegaSysEntities db;
        //declation of Global Variable to accept Id and Send To Perticuler db Table.

        public UOWTask(IDbFactory dbFactory)
        {
            db = dbFactory.Init();
        }

        //Method for get any perticuler Task by Id******SADHANA********
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
                        Project_Description = Projects.Description,
                        Project_Title = Projects.Title,
                        Client_ID = clients.ClientDetailID,
                        Client_Name = clients.ClientName,
                        Original_Estimate = tasks.Original_Estimate,
                        Completed = (tasks.Completed),
                        Remaining = (tasks.Remaining),
                        Status_Id = tasks.Task_Status,
                        Activity_Id = tasks.Task_Activity,
                        Priority_Id = tasks.Task_Priority,
                        Risk_Id = tasks.Task_Risk,
                        Task_AssignTo = tasks.Task_AssignTo,
                        Target_Date = tasks.Target_Date,
                        Start_Date=tasks.Start_Date


                    }).FirstOrDefault();
        }

        //Method for get all Task.******SADHANA********
        public IEnumerable<TaskDetail> GetAllProjectsTask()
        {
            var taskdetail = (from tasks in db.LegaSys_ProjectTasks
                              join Projects in db.LegaSys_Projects on tasks.Project_ID equals Projects.ProjectID
                              select new { tasks, Projects }).AsEnumerable()
                  .Select(x => new TaskDetail
                  {
                      ProjectTaskID = x.tasks.ProjectTaskID,
                      TaskTitle = x.tasks.Title,
                      Description = x.tasks.Description,
                      Attachment_ID = x.tasks.Attachment_ID,
                      Project_ID = x.tasks.Project_ID,
                      Project_Title = x.Projects.Title,
                      Project_Description = x.Projects.Description,
                      Target_Date = x.tasks.Target_Date,
                      Start_Date = x.tasks.Start_Date,
                      Status_Icon = db.LegaSys_TaskStatus.SingleOrDefault(TaskIcon_obj => TaskIcon_obj.Status_Id == x.tasks.Task_Status)?.Status_Icon,
                      Original_Estimate = x.tasks.Original_Estimate,
                      Status_Type = db.LegaSys_TaskStatus.SingleOrDefault(TaskStatus_obj => TaskStatus_obj.Status_Id == x.tasks.Task_Status)?.Status_Type,
                      Priority_Type = db.LegaSys_Priority.SingleOrDefault(TaskPriority_obj => TaskPriority_obj.Priority_Id == x.tasks.Task_Priority)?.Priority_Type,
                      Risk_Type = db.LegaSys_Risk.SingleOrDefault(TaskRisk_obj => TaskRisk_obj.Risk_Id == x.tasks.Task_Risk)?.Risk_Type,
                      Task_Activity = db.LegaSys_Activity.SingleOrDefault(TaskActivity_obj => TaskActivity_obj.Activity_Id == x.tasks.Task_Activity)?.Activity_Name,
                      Task_AssignTo = db.LegaSys_UserDetails.SingleOrDefault(TaskAssignee_obj => TaskAssignee_obj.Firstname == x.tasks.Task_AssignTo)?.Firstname,


                  }).ToList();
            return taskdetail;
        }

        //Method for creating new task.******SADHANA********
        public int CreateProjectTaskDetail(TaskDetail projectTaskDetail)
        {

            //declaration of object attachmentType
            var Typeattachment = new LegaSys_AttachmentTypes
            {
                AttachmentType = projectTaskDetail.AttachmentType,
                Description = projectTaskDetail.Description,
                Created_Date = DateTime.Now,
            };

            db.LegaSys_AttachmentTypes.Add(Typeattachment);


            //adding data to attechment table
            var attachment = new LegaSys_Attachments
            {
                AttachmentPath = projectTaskDetail.AttachmentPath,
                Title = projectTaskDetail.TaskTitle,
                Description = projectTaskDetail.Description,
                Created_By = projectTaskDetail.Created_By,
                Created_Date = DateTime.Now,
                AttachmentTypeID = Typeattachment.AttachmentTypeID
            };
            db.LegaSys_Attachments.Add(attachment);


            //adding data to project task table
            var taskModel = new LegaSys_ProjectTasks
            {
                Title = projectTaskDetail.TaskTitle,

                Description = projectTaskDetail.Description,

                Attachment_ID = attachment.AttachmentID,

                Project_ID = projectTaskDetail.Project_ID,

                Created_By = projectTaskDetail.Created_By,

                Acceptance_Criteria = projectTaskDetail.Acceptance_Criteria,

                Target_Date = (projectTaskDetail.Target_Date),

                Start_Date = projectTaskDetail.Start_Date,

                Created_Date = DateTime.Now,

                Task_Activity = projectTaskDetail.Activity_Id,

                Task_AssignTo = projectTaskDetail.Task_AssignTo,

                Task_Priority = projectTaskDetail.Priority_Id,

                Task_Risk = projectTaskDetail.Risk_Id,

                Task_Status = projectTaskDetail.Status_Id,

                Original_Estimate = projectTaskDetail.Original_Estimate,

                Remaining = projectTaskDetail.Remaining,

                Completed = projectTaskDetail.Completed


            };

            db.LegaSys_ProjectTasks.Add(taskModel);

            db.SaveChanges();

            return taskModel.ProjectTaskID;
        }


        //method to update task******SADHANA********
        public int UpdateProjectTaskDetail(TaskDetail projectTaskDetail)
        {
            var objProjecttaskDetail = db.LegaSys_ProjectTasks.Where(x => x.ProjectTaskID == projectTaskDetail.ProjectTaskID).FirstOrDefault();
            if (objProjecttaskDetail != null)
            {
                objProjecttaskDetail.ProjectTaskID = projectTaskDetail.ProjectTaskID;

                objProjecttaskDetail.Title = projectTaskDetail.TaskTitle;

                objProjecttaskDetail.Description = projectTaskDetail.Description;

                objProjecttaskDetail.Attachment_ID = projectTaskDetail.Attachment_ID;

                objProjecttaskDetail.Project_ID = projectTaskDetail.Project_ID;

                objProjecttaskDetail.Updated_By = projectTaskDetail.Updated_By;

                objProjecttaskDetail.Updated_Date = (projectTaskDetail.Updated_Date != null) ? projectTaskDetail.Updated_Date : DateTime.Now;

                objProjecttaskDetail.Completed = projectTaskDetail.Completed;

                objProjecttaskDetail.Original_Estimate = projectTaskDetail.Original_Estimate;

                objProjecttaskDetail.Remaining = projectTaskDetail.Remaining;

                objProjecttaskDetail.Task_Activity = projectTaskDetail.Activity_Id;

                objProjecttaskDetail.Task_Priority = projectTaskDetail.Priority_Id;

                objProjecttaskDetail.Task_Risk = projectTaskDetail.Risk_Id;

                objProjecttaskDetail.Task_Status = projectTaskDetail.Status_Id;

                objProjecttaskDetail.Task_AssignTo = projectTaskDetail.Task_AssignTo;
                objProjecttaskDetail.Target_Date = projectTaskDetail.Target_Date;



                db.SaveChanges();
            }

            return objProjecttaskDetail.ProjectTaskID;

        }


        //Method to get Status of Task
        public IEnumerable<TaskDetail> GetTaskStatus()
        {
            var statusObj = (from status in db.LegaSys_TaskStatus
                             select new { status }).AsEnumerable()
                   .Select(x => new TaskDetail
                   {
                       Status_Id = x.status.Status_Id,
                       Status_Type = x.status.Status_Type,
                       //Status_Icon=x.status.Status_Icon
                   });
            return statusObj;

        }


        //Method to get Priority of Task
        public IEnumerable<TaskDetail> GetTaskPriority()
        {
            var priorityObj = (from priority in db.LegaSys_Priority
                               select new { priority }).AsEnumerable()
                   .Select(x => new TaskDetail
                   {
                       Priority_Id = x.priority.Priority_Id,
                       Priority_Type = x.priority.Priority_Type,

                   });
            return priorityObj;

        }


        //Method to get Risk of Task
        public IEnumerable<TaskDetail> GetTaskRisk()
        {
            var riskObj = (from risk in db.LegaSys_Risk
                           select new { risk }).AsEnumerable()
                   .Select(x => new TaskDetail
                   {
                       Risk_Id = x.risk.Risk_Id,
                       Risk_Type = x.risk.Risk_Type,

                   });
            return riskObj;

        }




        //Method to get Activity of Task
        public IEnumerable<TaskDetail> GetTaskActivity()
        {
            var activityObj = (from activity in db.LegaSys_Activity
                               select new { activity }).AsEnumerable()
                   .Select(x => new TaskDetail
                   {
                       Activity_Id = x.activity.Activity_Id,
                       Task_Activity = x.activity.Activity_Name,

                   });
            return activityObj;

        }




        //Method For Delet Project******SADHANA********
        public bool DeleteProjectTask(int id)
        {


            // Query to delete all subtask against task id to be deleted.

            var subtasks = db.LegaSys_ProjectSubTasks.Where(x => x.Project_Task_ID == id).ToList();
            foreach (var subtask in subtasks)
                db.LegaSys_ProjectSubTasks.Remove(subtask);

            //Query to delete task of given id.

            var task = db.LegaSys_ProjectTasks.Where(x => x.ProjectTaskID == id).FirstOrDefault();
          
                db.LegaSys_ProjectTasks.Remove(task);

                db.SaveChanges();

           

            return true;

        }


        //Method For Delet Project******MOHIT********
        public List<TaskDetail> GetAllTaskOfProject(int id)
        {

            try
            {
                using (LegaSysEntities db = new LegaSysEntities())
                {
                    var projectIdParameter = new SqlParameter("@projectId", id);

                    var result = db.Database
                        .SqlQuery<TaskDetail>("sp_GetAllTaskbyProjectId @projectId", projectIdParameter)
                        .ToList();
                    return result;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        //Created By Sadhana...********* 5 feb 2019
         public bool  CheckIsTaskExsists(string taskTittle)
        {

            var Task = (from tasks in db.LegaSys_ProjectTasks
                        where (tasks.Title == taskTittle)
                        select tasks).FirstOrDefault();

            if (Task == null)
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
