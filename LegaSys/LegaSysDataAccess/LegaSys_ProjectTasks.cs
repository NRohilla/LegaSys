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
    
    public partial class LegaSys_ProjectTasks
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LegaSys_ProjectTasks()
        {
            this.LegaSys_ProjectSubTasks = new HashSet<LegaSys_ProjectSubTasks>();
        }
    
        public int ProjectTaskID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Nullable<int> Attachment_ID { get; set; }
        public Nullable<int> Project_ID { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
    
        public virtual LegaSys_Attachments LegaSys_Attachments { get; set; }
        public virtual LegaSys_Projects LegaSys_Projects { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_ProjectSubTasks> LegaSys_ProjectSubTasks { get; set; }
        public virtual LegaSys_UserDetails LegaSys_UserDetails { get; set; }
        public virtual LegaSys_UserDetails LegaSys_UserDetails1 { get; set; }
    }
}
