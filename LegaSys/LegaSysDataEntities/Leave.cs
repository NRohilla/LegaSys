using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
    public class Leave
    {
        public int LeaveStatusID { get; set; }
        public string StatusName { get; set; }
        public bool IsActive { get; set; }
    }
}
