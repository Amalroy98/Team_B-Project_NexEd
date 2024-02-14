using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using NexEd_Project.Entities;

namespace NexEd_Project.Entities
{
    public class StudentAttendance
    {
        [Key]
        public int SAttendanceId { get; set; }

        private Student Students { get; set; }
        [ForeignKey("StudentId")]
        public string StudentId { get; set; }
      

        [Required]
        [Column(TypeName = "Date")]
        public DateTime Date { get; set; }
        [Required]
        public string isStudentPresent { get; set; }

       
       


    }
}
