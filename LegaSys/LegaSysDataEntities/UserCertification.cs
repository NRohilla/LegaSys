using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
  public class UserCertification
    {

        public int CertificationID { get; set; }
        public int UserDetailID { get; set; }
        public string Type { get; set; }
        public string CertificateNumber { get; set; }
        public string Stream { get; set; }
        public int Year { get; set; }
        public string Institution { get; set; }
        public decimal? Marks { get; set; }
    }
}
