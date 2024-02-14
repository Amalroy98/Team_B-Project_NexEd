using AutoMapper;
using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Profiles
{
    public class StudentProfile:Profile
    {
        public StudentProfile() 
        {
            CreateMap<Student, StudentDisplayDTO>();
            CreateMap<StudentDTO, Student>();
        }
    }
}
