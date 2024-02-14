using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NexEd_Project.Entities
{
    public class Result
    {
        [Key]
        public string Id { get; set; }
        [ForeignKey("ExamId")]
        public string ExamId { get; set; }
        public Examination? Examinations { get; set; }
      
      
        [ForeignKey("StudentId")]
        public string StudentId { get; set; }//id
        public float Marks { get; set; }
       
    }
}
