using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
    public class SubTaskDetail
    {
       
            public int ProjectSubTaskID { get; set; }
            public string SubTask_Title { get; set; }
            public string SubTask_Description { get; set; }
            public int? Attachment_ID { get; set; }
            public int? Project_Task_ID { get; set; }
            public Nullable<int> SubTask_Created_By { get; set; }
            public Nullable<int> SubTask_Updated_By { get; set; }
            public Nullable<System.DateTime> SubTask_Created_Date { get; set; }
            public Nullable<System.DateTime> SubTask_Updated_Date { get; set; }
            public string TaskTitle { get; set; }
            public string Description { get; set; }
            public Nullable<int> ProjectTask_Created_By { get; set; }
            public Nullable<int> ProjectTask_Updated_By { get; set; }
            public Nullable<System.DateTime> ProjectTask_Created_Date { get; set; }
            public Nullable<System.DateTime> projectTask_Updated_Date { get; set; }
            public string AttachmentPath { get; set; }
            public string AttachmentType { get; set; }
            public int Project_ID { get; set; }
           public string Project_Title { get; set; }
            public int? AttachmentTypeID { get; set; }
            public string AttachmentName { get; set; }  




    }
}
