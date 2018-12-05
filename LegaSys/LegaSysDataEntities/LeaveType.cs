using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LegaSysDataEntities
{
    public class LeaveType
    {
        public int LeaveTypeID { get; set; }
        public string TypeName { get; set; }
        public bool IsActive { get; set; }
    }
}
