using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NexEd_Project.Entities
{
    public class Class
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string ClassId { get; set; }
        [Required]
        public string ClassName { get; set; }
        [Required]
        public string Section { get; set; }

    }
}
