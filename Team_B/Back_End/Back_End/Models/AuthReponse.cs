using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace NexEd_Project.Models
{
    public class AuthReponse
    {
        [Key]
        public string UserId { get; set; }
        public string Role { get; set; }
        public string Token { get; set; }

    }
}
