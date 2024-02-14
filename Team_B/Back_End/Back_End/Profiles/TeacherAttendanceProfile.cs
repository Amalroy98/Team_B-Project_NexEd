using NexEd_Project.DTO;
using NexEd_Project.Entities;
using AutoMapper;

namespace NexEd_Project.Profiles
{
    public class TeacherAttendanceProfile: Profile
    {
        public TeacherAttendanceProfile()
        {

            CreateMap<TeacherAttendance, TeacherAttendanceDTO>();
            CreateMap<TeacherAttendanceDTO, TeacherAttendance>();
        }
    }
}
