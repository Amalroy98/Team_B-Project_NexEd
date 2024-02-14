using Microsoft.EntityFrameworkCore;
using NexEd_Project.Entities;
using NexEd_Project.Models;

namespace NexEd_Project.Repositories
{
    public class UserRepository:IUserRepository<User>
    {
        public readonly MyContext context;

        public UserRepository(MyContext context)
        {
            this.context = context;
        }

        public void Add(User entity)
        {
            context.Users.Add(entity);
            context.SaveChanges();
        }

        public void Delete(string id)
        {
            User user = context.Users.Find(id);
            context.Users.Remove(user);
            context.SaveChanges();
        }

        public User Get(string id)
        {
            return context.Users.Find(id);
        }

       public User GetByMail(string email)
        {
            return context.Users.FirstOrDefault(u => u.Email == email);
        }

        public List<User> GetAll()
        {
            return context.Users.ToList();
        }

        public void Update(User entity)
        {
            context.Update(entity);
            context.SaveChanges();
        }
        public User Validate(LoginUser loginUser)
        {
            return context.Users.SingleOrDefault(u => u.Email == loginUser.Email && u.Password == loginUser.Password);
        }

        public User Verify(Recover recover)
        {
            return context.Users.FirstOrDefault(u => u.Email == recover.Email && u.Mobile == recover.Phone);
        }
    }
}
