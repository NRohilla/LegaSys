using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
    public class ClientDetail
    {
        public int ClientDetailID { get; set; }
        public string ClientName { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }
        public string CoClient { get; set; }
        public string CoClient2 { get; set; }
        public string EmailID { get; set; }
        public string EmailID2 { get; set; }
        public string EmailID3 { get; set; }
        public Nullable <int> Created_By { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<System.DateTime> Updated_Date { get; set; }
        public string CoClient3 { get; set; }
        public string CoClient4 { get; set; }
        public string EmailID4 { get; set; }
        public bool IsActive { get; set; }


    }
}
