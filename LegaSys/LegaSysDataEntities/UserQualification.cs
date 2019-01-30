using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
   public class UserQualification
    {
        public int QualificationID { get; set; }
        public int UserDetailID { get; set; }
        public string Qualification { get; set; }
        public string Stream { get; set; }
        public int Year { get; set; }
        public string BoardUniversity { get; set; }
        public decimal Marks { get; set; }
    }
}
