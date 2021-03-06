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
    
    public partial class LegaSys_UserDetails
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LegaSys_UserDetails()
        {
            this.LegaSys_LeavesApplication = new HashSet<LegaSys_LeavesApplication>();
            this.LegaSys_LeavesApplication1 = new HashSet<LegaSys_LeavesApplication>();
            this.LegaSys_LeavesApplication2 = new HashSet<LegaSys_LeavesApplication>();
            this.LegaSys_Log_Clients = new HashSet<LegaSys_Log_Clients>();
            this.LegaSys_Log_Projects = new HashSet<LegaSys_Log_Projects>();
            this.LegaSys_Log_Resources = new HashSet<LegaSys_Log_Resources>();
        }
    
        public int UserDetailID { get; set; }
        public string Firstname { get; set; }
        public string Middlename { get; set; }
        public string Lastname { get; set; }
        public Nullable<decimal> TotalExp { get; set; }
        public string EmailId { get; set; }
        public string MobileNumber { get; set; }
        public bool IsActive { get; set; }
        public string Remarks { get; set; }
        public int Master_Shift_ID { get; set; }
        public int Master_Location_ID { get; set; }
        public Nullable<int> ReportingHead_ID { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
        public int Master_Role_ID { get; set; }
        public string FatherName { get; set; }
        public string MotherName { get; set; }
        public string WorkPhone { get; set; }
        public string WorkEmail { get; set; }
        public string AadharNumber { get; set; }
        public string BloodGroup { get; set; }
        public string PermanentAddress { get; set; }
        public string CurrentAddress { get; set; }
        public string Nationality { get; set; }
        public string PassportNumber { get; set; }
        public string EmergencyContact { get; set; }
        public string PanNumber { get; set; }
        public string Gender { get; set; }
        public string MaritalStatus { get; set; }
        public string SpouseName { get; set; }
        public Nullable<System.DateTime> DateOfBirth { get; set; }
        public Nullable<bool> IsExperienced { get; set; }
        public string PrimarySkillSet { get; set; }
        public string SecondarySkillSet { get; set; }
        public string Qualification { get; set; }
        public Nullable<System.DateTime> DateOfJoining { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_LeavesApplication> LegaSys_LeavesApplication { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_LeavesApplication> LegaSys_LeavesApplication1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_LeavesApplication> LegaSys_LeavesApplication2 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_Log_Clients> LegaSys_Log_Clients { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_Log_Projects> LegaSys_Log_Projects { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_Log_Resources> LegaSys_Log_Resources { get; set; }
        public virtual LegaSys_Master_Locations LegaSys_Master_Locations { get; set; }
        public virtual LegaSys_Master_Roles LegaSys_Master_Roles { get; set; }
        public virtual LegaSys_Master_Shifts LegaSys_Master_Shifts { get; set; }
    }
}
