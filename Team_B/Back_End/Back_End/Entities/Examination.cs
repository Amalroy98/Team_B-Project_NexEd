using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace NexEd_Project.Entities
{
    public class Examination
    {
       
        [Key]
            public string ExamId { get; set; }

            [Required] //set not null constraint
            [StringLength(50)]
            [Column("ExamName")]
            public string? ExamName { get; set; }
            [Required]
            public DateTime ExamDate { get; set; }
            [Required]
            [Column("ClassId")]
        [ForeignKey("ClassId")]
        public Class? Classes { get; set; }
        public string ClassId { get; set; }
            [Required]
            public string SubjectName { get; set; }
           
           
     }


 }

