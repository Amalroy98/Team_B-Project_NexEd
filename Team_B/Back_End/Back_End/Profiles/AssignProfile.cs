using AutoMapper;
using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Profiles
{
    public class AssignProfile:Profile
    {
        public AssignProfile()
        {
            CreateMap<Assign, AssignDTO>();
            CreateMap<AssignDTO, Assign>();
        }
    }
}
