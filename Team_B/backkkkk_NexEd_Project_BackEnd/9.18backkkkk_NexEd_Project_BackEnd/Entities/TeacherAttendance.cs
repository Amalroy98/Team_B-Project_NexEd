using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace NexEd_Project.Entities
{
    public class TeacherAttendance
    {
        [Key]
       
        public int TAttendanceId { get; set; }
        private Teacher Teachers { get; set; }
        [ForeignKey("TeacherId")]
        public string TeacherId { get; set; }

        [Required]
        [Column(TypeName = "Date")]
        public DateTime Date { get; set; }

        [Required]
        public string isTeacherPresent { get; set; }


        
      

       
    }
}
