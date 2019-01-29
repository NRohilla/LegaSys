using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
    public class ClientProjects
    {
        public int ProjectID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Nullable<int> Client_ID { get; set; }
        public Nullable<int> ProjectDomain_ID { get; set; }
        public Nullable<short> Status { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
        public Nullable<int> No_of_resource { get; set; }
        public Nullable<System.DateTime> Start_Date { get; set; }
        public Nullable<System.DateTime> End_Date { get; set; }
    }
}
