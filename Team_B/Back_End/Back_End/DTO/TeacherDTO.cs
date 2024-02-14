using NexEd_Project.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace NexEd_Project.DTO
{
    public class TeacherDTO
    {
        
        public string TeacherId { get; set; }
       
        public string FirstName { get; set; }
        
        public string LastName { get; set; }

        public DateTime DateOfBirth { get; set; }
      
        public string Gender { get; set; }
        
        public string SubjectTaught { get; set; }

       
        }
}
