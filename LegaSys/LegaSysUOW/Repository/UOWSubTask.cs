using LegaSysDataAccess;
using LegaSysUOW.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using LegaSysDataEntities;
using System.Text;
using System.Threading.Tasks;



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
        IEnumerable<SubTaskDetail>IUOWSubTask.GetAllProjectsSubTask()
        {

           var subtaskdetail=(from subtasks in db.LegaSys_ProjectSubTasks
                                 join tasks in db.LegaSys_ProjectTasks on subtasks.Project_Task_ID equals tasks.ProjectTaskID join projects in db.LegaSys_Projects on tasks.Project_ID equals projects.ProjectID
                                 select new { subtasks, tasks,projects }).AsEnumerable()
                  .Select(x => new SubTaskDetail
                  {
                      ProjectSubTaskID = x.subtasks.ProjectSubTaskID,
                      SubTask_Title = x.subtasks.Title,
                      SubTask_Description = x.subtasks.Description,
                      Attachment_ID = x.tasks.Attachment_ID,
                      Project_Task_ID = x.tasks.ProjectTaskID,
                      TaskTitle = x.tasks.Title,
                      Description = x.tasks.Description,
                      Project_Title=x.projects.Title,
                   
                  });

            Console.WriteLine(subtaskdetail);
            return subtaskdetail;
        }


        //Method To get Subtask By Id ******SADHANA********
        public SubTaskDetail GetProjectSubTaskbyId(int id)
        {
            return (from subtasks in db.LegaSys_ProjectSubTasks
                    join tasks in db.LegaSys_ProjectTasks on subtasks.Project_Task_ID equals tasks.ProjectTaskID
                    where subtasks.ProjectSubTaskID == id
                    select new SubTaskDetail
                    {
                        ProjectSubTaskID = subtasks.ProjectSubTaskID,
                        SubTask_Title = subtasks.Title,
                        SubTask_Description = subtasks.Description,
                        Attachment_ID = subtasks.Attachment_ID,
                        Project_Task_ID = subtasks.Project_Task_ID,
                        TaskTitle = tasks.Title,
                    
                    }).FirstOrDefault();
        }


        //Method for creating new Subtask.******SADHANA********
        public bool CreateProjectSubTaskDetail(int id, List<SubTaskDetail> subtaskDetail)
        {
          
            var subtaskModel = subtaskDetail .Select(x => new LegaSys_ProjectSubTasks
            
            {
                Title = x.SubTask_Title,
                Description = x.SubTask_Description,
                Attachment_ID = x.Attachment_ID,
                Project_Task_ID = x.Project_Task_ID,
                Created_By = x.SubTask_Created_By,
                Created_Date = (x.SubTask_Created_Date != null) ? x.SubTask_Created_Date : DateTime.Now,
            
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
