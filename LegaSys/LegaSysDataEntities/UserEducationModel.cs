using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
  public class UserEducationModel
    {
        public string PrimarySkillSet { get; set; }
        public string SecondarySkillSet { get; set; }
        public string HQualification { get; set; }

        public int UserDetailID { get; set; }
        public int QualificationID { get; set; }     
        public string Qualification { get; set; }
        public string QStream { get; set; }
        public int QYear { get; set; }
        public string BoardUniversity { get; set; }
        public decimal QMarks { get; set; }

        public int CertificationID { get; set; }      
        public string Type { get; set; }
        public string CertificateNumber { get; set; }
        public string CStream { get; set; }
        public int CYear { get; set; }
        public string Institution { get; set; }
        public decimal? CMarks { get; set; }

    }
}
