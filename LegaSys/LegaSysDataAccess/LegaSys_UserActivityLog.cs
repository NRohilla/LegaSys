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
    
    public partial class LegaSys_UserActivityLog
    {
        public int LogID { get; set; }
        public Nullable<int> Userdetail_ID { get; set; }
        public Nullable<System.DateTime> LoginDateTime { get; set; }
        public Nullable<System.DateTime> LogoutDateTime { get; set; }
        public string SessionDuration { get; set; }
        public string IP_Address { get; set; }
    }
}
