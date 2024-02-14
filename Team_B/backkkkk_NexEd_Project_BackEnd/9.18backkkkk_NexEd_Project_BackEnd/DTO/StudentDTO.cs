using AutoMapper;
using NexEd_Project.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace NexEd_Project.DTO
{
    public class StudentDTO
    {
        public string Id { get; set; }
      
        public string FirstName { get; set; }
      
        public string LastName { get; set; }


        public string DateOfBirth { get; set; }

   
        public string Gender { get; set; }


      
        public string ClassId { get; set; }

   


    }
}
