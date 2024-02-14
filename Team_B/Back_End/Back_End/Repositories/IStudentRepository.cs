using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public interface IStudentRepository<T> where T : class
    {
        Student GetById(string id);
        List<StudentDisplayDTO> GetStudentsByClassName(string className);
        List<StudentDisplayDTO> GetStudentBySection(string section, string classname);
        List<T> GetBySubject(string subjecct);
        List<StudentDisplayDTO> GetAll();
        void Add(T entity);
        void Update(T entity);
        void Delete(string id);


    }
}
