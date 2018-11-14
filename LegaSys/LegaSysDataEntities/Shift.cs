namespace LegaSysDataEntities
{
    public class Shift
    {
        public int ShiftID { get; set; }
        public string WeekOff1 { get; set; }
        public string WeekOff2 { get; set; }
        public string WeekOff3 { get; set; }
        public string StartTimeIST { get; set; }
        public string EndTimeIST { get; set; }
        public bool IsActive { get; set; }
    }
}
