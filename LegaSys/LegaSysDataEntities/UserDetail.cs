using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
    public class UserDetail
    {
        public int UserDetailID { get; set; }
        public string Firstname { get; set; }
        public string Middlename { get; set; }
        public string Lastname { get; set; }
        public string Fullname { get; set; }
        public decimal? TotalExp { get; set; }
        public string EmailId { get; set; }
        public bool? IsActive { get; set; }
        public string Remarks { get; set; }
        public int Master_Shift_ID { get; set; }
        public string Shift { get; set; }
        public int Master_Location_ID { get; set; }
        public string LocationAddress { get; set; }
        public int? ReportingHead_ID { get; set; }
        public string ReportingHead { get; set; }
        public int Master_Role_ID { get; set; }
        public string RoleName { get; set; }
        public int Created_By { get; set; }
        public int Updated_By { get; set; }
        public string MobileNumber { get; set; }
        public DateTime? DateOfJoining { get; set; }
        public bool? IsExperienced { get; set; }
    }
}
