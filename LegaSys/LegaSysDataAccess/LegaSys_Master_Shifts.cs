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
    
    public partial class LegaSys_Master_Shifts
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LegaSys_Master_Shifts()
        {
            this.LegaSys_UserDetail = new HashSet<LegaSys_UserDetail>();
        }
    
        public int ShiftID { get; set; }
        public string WeekOff1 { get; set; }
        public string WeekOff2 { get; set; }
        public string WeekOff3 { get; set; }
        public string StartTimeIST { get; set; }
        public string EndTimeIST { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_UserDetail> LegaSys_UserDetail { get; set; }
    }
}
