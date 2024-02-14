using Microsoft.AspNetCore.Mvc;
using NexEd_Project.Entities;
using AutoMapper;
using NexEd_Project.DTO;

namespace NexEd_Project.Repositories
{
    public class ClassRepository : IClassRepository
    {
        private readonly MyContext Context;

        public ClassRepository(MyContext context)
        {
            Context = context;
        }

        public void Add(Class cls)
        {
            try
            {
                Context.Classes.Add(cls);
                Context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Delete(string id)
        {
           Class cls= Context.Classes.Find(id);
           Context.Classes.Remove(cls);
           Context.SaveChanges();
            
        }

        public List<Class> GetAll()
        {
           return Context.Classes.ToList();
        }

        public void Update(Class cls)
        {
            Context.Classes.Update(cls);
            Context.SaveChanges();
        }
    }

}