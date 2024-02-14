using AutoMapper;
using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Profiles
{
    public class StudentAttendanceProfile:Profile
    {
        public StudentAttendanceProfile()
        {
            CreateMap<StudentAttendance, StudentAttendanceDTO>();
            CreateMap<StudentAttendanceDTO, StudentAttendance>();
           
        }
    }
}
