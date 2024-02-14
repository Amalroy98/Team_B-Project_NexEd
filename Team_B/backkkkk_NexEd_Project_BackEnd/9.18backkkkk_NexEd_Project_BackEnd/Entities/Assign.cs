using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NexEd_Project.Entities
{
    public class Assign
    {
        [Key]
        public string AssignId {  get; set; }
        [ForeignKey("Classid")]
        public  Class? Classes { get; set; }
        [Required]
        public string Classid { get; set; }
        public DateTime Classtime { get; set; }
        

        [ForeignKey("TeacherId")]
        public  Teacher? Teachers { get; set; }
        public string TeacherId { get; set; }

        

    }
}
