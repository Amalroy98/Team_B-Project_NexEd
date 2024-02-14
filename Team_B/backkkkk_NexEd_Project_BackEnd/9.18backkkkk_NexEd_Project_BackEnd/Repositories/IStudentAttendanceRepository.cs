using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public interface IStudentAttendanceRepository
    {
        void AddStudentAttendence(StudentAttendanceDTO data);
        List<StudentAttendance> GetAll();

        Report GetStudAttendenceById(string StudId);

        Report GetStudentAttendencebyMonth(DateTime month);



    }
}
