using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace NexEd_Project.DTO
{
    public class TeacherAttendanceAddDto
    {
        public int AttendanceId { get; set; }

        public string TeacherId { get; set; }



        public DateTime Date { get; set; }


        public string Status { get; set; }
    }
}
