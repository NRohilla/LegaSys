using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
    public class Technology
    {
        public int TechnologyID { get; set; }
        public string Name { get; set; }
        public int Master_DomainID { get; set; }
        public string Master_DomainName { get; set; }
        public bool IsActive { get; set; }
    }
}
