using Microsoft.AspNetCore.Http.Timeouts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace NexEd_Project.Entities
{
    public class Teacher
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        
        public string TeacherId { get; set; }
        [Required]
        [Column(TypeName = "varchar")]
        [StringLength(50)]
        public string FirstName { get; set;}
        [Required]
        [Column(TypeName = "varchar")]
        [StringLength(50)]
        public string LastName { get; set;}
       
        public DateTime DateOfBirth { get; set; }
        [Required]
        [Column(TypeName = "varchar")]
        [StringLength(10)]
        public string Gender { get; set; }
        [Required]
        [Column(TypeName = "varchar")]
        [StringLength(10)]
        public string SubjectTaught { get; set; }


    }
}
