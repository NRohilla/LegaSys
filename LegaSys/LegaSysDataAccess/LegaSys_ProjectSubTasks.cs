//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LegaSysDataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class LegaSys_ProjectSubTasks
    {
        public int ProjectSubTaskID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Nullable<int> Project_Task_ID { get; set; }
        public Nullable<int> Attachment_ID { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
    
        public virtual LegaSys_Attachments LegaSys_Attachments { get; set; }
        public virtual LegaSys_UserDetail LegaSys_UserDetail { get; set; }
        public virtual LegaSys_ProjectTasks LegaSys_ProjectTasks { get; set; }
        public virtual LegaSys_UserDetail LegaSys_UserDetail1 { get; set; }
    }
}
