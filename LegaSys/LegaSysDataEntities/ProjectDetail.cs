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
        public int Client_ID { get; set; }
        public int ProjectDomain_ID { get; set; }
        public short? Status { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
        public string ClientName { get; set; }
        public string DomainName { get; set; }
        public string EmailID { get; set; }
        public string EmailID2 { get; set; }
        public string  CoClient { get; set; }
        public string  EmailID3 { get; set; }
        public string Country { get; set; }
    }
}
