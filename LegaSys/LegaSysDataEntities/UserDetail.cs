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
        public Nullable<decimal> TotalExp { get; set; }
        public string EmailId { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public string Remarks { get; set; }
        public Nullable<int> Master_Shift_ID { get; set; }
        public Nullable<int> Master_Location_ID { get; set; }
        public Nullable<int> ReportingHead_ID { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
        public Nullable<int> Master_UserRoles_ID { get; set; }
    }
}
