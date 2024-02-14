using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace NexEd_Project.Entities
{
    public class Announcement
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Column("Announcement ID")]
        public string notificationId { get; set; }

        [Column("Message")]
        public string? Message { get; set; }


        [Column("Notification Time")]
        public DateTime Date { get; set; }

        [Column("Role")]
        public string Role { get; set; }

    }
}
