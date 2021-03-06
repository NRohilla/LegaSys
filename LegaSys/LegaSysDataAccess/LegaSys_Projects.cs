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
    
    public partial class LegaSys_Projects
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LegaSys_Projects()
        {
            this.LegaSys_Client_Projects = new HashSet<LegaSys_Client_Projects>();
            this.LegaSys_ProjectResources = new HashSet<LegaSys_ProjectResources>();
            this.LegaSys_ProjectTasks = new HashSet<LegaSys_ProjectTasks>();
            this.LegaSys_ProjectTechnology = new HashSet<LegaSys_ProjectTechnology>();
        }
    
        public int ProjectID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Nullable<int> Client_ID { get; set; }
        public Nullable<int> ProjectDomain_ID { get; set; }
        public Nullable<short> Status { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_Client_Projects> LegaSys_Client_Projects { get; set; }
        public virtual LegaSys_ClientDetails LegaSys_ClientDetails { get; set; }
        public virtual LegaSys_Master_TechDomains LegaSys_Master_TechDomains { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_ProjectResources> LegaSys_ProjectResources { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_ProjectTasks> LegaSys_ProjectTasks { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_ProjectTechnology> LegaSys_ProjectTechnology { get; set; }
    }
}
