using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
  public class UserBackground
    {
        public int BackgroundID { get; set; }
        public int UserDetailID { get; set; }
        public string CompanyName { get; set; }
        public string Designation { get; set; }
        public DateTime JoiningDate { get; set; }
        public DateTime LeavingDate { get;set; }

        public int Created_By { get; set; }
        public int Updated_By { get; set; }

       // public bool IsExperienced { get; set; }

    }
}
