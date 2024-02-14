using AutoMapper;
using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Profiles
{
    public class ResultProfile:Profile
    {
        public ResultProfile() 
        {
            CreateMap<Result, ResultDTO>();
            CreateMap<ResultDTO, Result>();
            CreateMap<Result, ResultDisplay>();
        }
    }
}
