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
    
    public partial class LegaSys_Client_Projects
    {
        public int ClientProjectID { get; set; }
        public Nullable<int> ProjectID { get; set; }
        public Nullable<int> ClientID { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
    
        public virtual LegaSys_ClientDetails LegaSys_ClientDetails { get; set; }
        public virtual LegaSys_Projects LegaSys_Projects { get; set; }
    }
}
