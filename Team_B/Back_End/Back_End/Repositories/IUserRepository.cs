using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public interface IUserRepository<T> where T : class
    {
        List<T> GetAll();
        T Get(string id);
        void Update(T entity);
        void Delete(string id);
        void Add(T entity);
    }
}
