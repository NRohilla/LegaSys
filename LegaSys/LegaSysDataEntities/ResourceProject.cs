using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
  public class ResourceProject
    {

        public int ProjectResourceID { get; set; }
        public int? Resource_ID { get; set; }
        public int? Project_ID { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }

        public int? Status { get; set; }
        public DateTime? Start_Date { get; set; }
        public DateTime? End_Date { get; set; }
    }
}
