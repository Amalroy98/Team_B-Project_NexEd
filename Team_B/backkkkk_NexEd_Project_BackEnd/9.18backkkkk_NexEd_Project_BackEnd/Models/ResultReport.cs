using NexEd_Project.DTO;

namespace NexEd_Project.Models
{
    public class ResultReport
    {
        public List<ResultDisplay> stdDisplay { get; set; }
        public string Percentage { get; set; }
        public string totalMarks { get; set; }
    }
}
