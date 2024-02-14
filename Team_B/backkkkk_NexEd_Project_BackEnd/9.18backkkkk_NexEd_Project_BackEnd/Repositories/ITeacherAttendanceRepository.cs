using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public interface ITeacherAttendanceRepository
    {
      void AddTeacherAttendance (TeacherAttendanceDTO data);
        Report GetteacherAttendenceById(string Teachid);

        List<TeacherAttendance> GetAll();

        Report GetTeacherAttendencebyMonth(DateTime month);

    }
}
