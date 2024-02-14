using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public interface ITeacherRepository
    {

            TeacherDTO GetById(string id);
            List<TeacherDTO> GetBySubject(string subjecct);
            List<TeacherDTO> GetAll();
            void Add(TeacherDTO teacherDto);
            void Update(TeacherDTO teacherDto);
            void Delete(string id);
        }
}
