using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
   public  class TaskDetail
    {
      
        public int ProjectTaskID { get; set; }
        public string TaskTitle { get; set; }
        public string Description { get; set; }
        public int? Attachment_ID { get; set; }
        public int? Project_ID { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
        public string Project_Title { get; set; }
        public string Project_Description { get; set; }
        public int? Client_ID { get; set; }

        public string Client_Name { get; set; }

        public int? Project_Domain_ID { get; set; }
        public Nullable<int> ProjectCreated_By { get; set; }
        public Nullable<int> ProjectUpdated_By { get; set; }
        public Nullable<System.DateTime> ProjectCreated_Date { get; set; }
        public Nullable<System.DateTime> projectUpdated_Date { get; set; }
        public int? Project_Status { get; set; }

        public string AttachmentPath { get; set; }

        public string AttachmentType { get; set; }

        //added on 21/01/2018
        public string Status { get; set; }
        public string Task_AssignTo { get; set; }

    }
}
