using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public interface IClassRepository
    {
        List<Class> GetAll();
        void Add(Class cls);
        void Update(Class cls);
        void Delete(string id);
    }
}
