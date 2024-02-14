using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace NexEd_Project.Entities
{
    public class Student
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
    
        public string Id { get; set; }
        [Required]
        [Column(TypeName ="varchar")]
        [StringLength(50)]
        public string FirstName { get; set; }
         [Column(TypeName = "varchar")]
        [Required]
        [StringLength(50)]
        public string LastName { get; set; }


        public string DateOfBirth { get; set; }

        [Required]
        [Column (TypeName = "varchar")]
        [StringLength(10)]
        public string Gender { get; set; }

  
        public string ClassId { get; set; }

        // Navigation property

        [ForeignKey("ClassId")]
        public Class? Classes { get; set; }




    }
}
