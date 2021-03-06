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
    
    public partial class LegaSys_LeavesApplication
    {
        public int LeaveID { get; set; }
        public Nullable<int> UserDetail_ID { get; set; }
        public Nullable<int> Master_LeaveTypeID { get; set; }
        public string Summary { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> AppliedOn { get; set; }
        public Nullable<System.DateTime> LeaveFromDate { get; set; }
        public Nullable<System.DateTime> LeaveToDate { get; set; }
        public Nullable<decimal> DaysCount { get; set; }
        public Nullable<int> ActionBy { get; set; }
        public Nullable<System.DateTime> ActionOn { get; set; }
        public Nullable<int> Master_LeaveStatusID { get; set; }
    
        public virtual LegaSys_UserDetails LegaSys_UserDetails { get; set; }
        public virtual LegaSys_UserDetails LegaSys_UserDetails1 { get; set; }
        public virtual LegaSys_UserDetails LegaSys_UserDetails2 { get; set; }
        public virtual LegaSys_Master_LeaveTypes LegaSys_Master_LeaveTypes { get; set; }
        public virtual LegaSys_Master_LeaveStatus LegaSys_Master_LeaveStatus { get; set; }
    }
}
