using AutoMapper;
using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Profiles
{
    public class ExamProfile:Profile
    {
       public ExamProfile() 
        {
            CreateMap<Examination, ExamDTO>();
            CreateMap<ExamDTO, Examination>();
        }
    }
}
