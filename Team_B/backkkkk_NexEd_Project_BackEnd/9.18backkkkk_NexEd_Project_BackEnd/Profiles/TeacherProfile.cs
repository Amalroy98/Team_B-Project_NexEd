using AutoMapper;
using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Profiles
{
    public class TeacherProfile:Profile
    {
        public TeacherProfile()
        {
           
                CreateMap<Teacher, TeacherDTO>();
                CreateMap<TeacherDTO, Teacher>();

        }
    }
}
