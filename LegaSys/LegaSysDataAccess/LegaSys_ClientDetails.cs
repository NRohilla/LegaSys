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
    
    public partial class LegaSys_ClientDetails
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LegaSys_ClientDetails()
        {
            this.LegaSys_Client_Projects = new HashSet<LegaSys_Client_Projects>();
            this.LegaSys_Projects = new HashSet<LegaSys_Projects>();
            this.LegaSys_CoClientDetails = new HashSet<LegaSys_CoClientDetails>();
        }
    
        public int ClientDetailID { get; set; }
        public string ClientName { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }
        public string CoClient { get; set; }
        public string CoClient2 { get; set; }
        public string EmailID { get; set; }
        public string EmailID2 { get; set; }
        public string EmailID3 { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
        public string CoClient3 { get; set; }
        public string CoClient4 { get; set; }
        public string EmailID4 { get; set; }
        public bool IsActive { get; set; }
        public string CompanyName { get; set; }
        public string CompanyAddress { get; set; }
        public string ClientCountry { get; set; }
        public string ClientCountryZip { get; set; }
        public string CompanyPhone { get; set; }
        public string ClientCompanyFax { get; set; }
        public string ClientPhone { get; set; }
        public string countrytTelephoneCodeClient { get; set; }
        public string countrytTelephoneCodeClientOffice { get; set; }
        public string ClientPhone2 { get; set; }
        public string ClientExtension { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_Client_Projects> LegaSys_Client_Projects { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_Projects> LegaSys_Projects { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LegaSys_CoClientDetails> LegaSys_CoClientDetails { get; set; }
    }
}
