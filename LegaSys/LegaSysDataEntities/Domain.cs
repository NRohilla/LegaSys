using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
    public class Domain
    {
        public int TechDomainID { get; set; }
        public string DomainName { get; set; }
        public bool IsActive { get; set; }
    }
}
