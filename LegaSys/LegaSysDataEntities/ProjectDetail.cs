using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
    public class ProjectDetail
    {
        public int ProjectID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int? Client_ID { get; set; }
        public int? ProjectDomain_ID { get; set; }
        public short? Status { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
        public string ClientName { get; set; }
        public string DomainName { get; set; }
        public string EmailID { get; set; }
        public string EmailID2 { get; set; }
        public string CoClient { get; set; }
        public string EmailID3 { get; set; }
        public string Country { get; set; }



        public string CoClient2 { get; set; }
        public string CoClient3 { get; set; }
        public string CoClient4 { get; set; }


        public string ProjectDomainName { get; set; }
        public int? Resource_ID { get; set; }

        public int? ProjectTaskID { get; set; }
        public string TaskTitle { get; set; }

        public string TaskDescription { get; set; }
        public int? TaskAttachmentID { get; set; }
        public int? ProjectSubTaskID { get; set; }
        public string SubTaskTitle { get; set; }
        public string SubTaskDescription { get; set; }

        public int? SubTaskAttachmentID { get; set; }

        public string ResourceFirstname { get; set; }
        public string ResourceMiddlename { get; set; }
        public string ResourceLastname { get; set; }
        public Decimal? TotalExp { get; set; }
        public string ResourceEmailId { get; set; }
        public string ResourceMobileNumber { get; set; }
        public Boolean Resource_IsActive { get; set; }
        public string Remarks { get; set; }
        public int? Master_Shift_ID { get; set; }
        public int? Master_Location_ID { get; set; }
        public int? ReportingHead_ID { get; set; }
        public int? Master_Role_ID { get; set; }
    }
}
