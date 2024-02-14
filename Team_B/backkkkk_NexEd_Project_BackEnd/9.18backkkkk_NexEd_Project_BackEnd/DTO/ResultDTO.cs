using NexEd_Project.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace NexEd_Project.DTO
{
    public class ResultDTO
    {

        public string ExamId { get; set; }
        public string Id { get; set; }
      
        public string StudentId { get; set; }
        public float Marks { get; set; }




       
    }
}
