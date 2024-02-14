using Microsoft.VisualBasic;
using NexEd_Project.Entities;
using NexEd_Project.Repositories;
using System;
using System.Security.Cryptography;

using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public class AnnouncementRepository
    {
        private readonly MyContext context;

        public AnnouncementRepository(MyContext context)
        {
            this.context = context;
        }
        public void Add(Announcement entity)
        {
            /*            entity.GeneraterandomMessage();
                        entity.notificationId=Guid.NewGuid().ToString();*/
            try
            {
                entity.notificationId = new Random().Next(1000, 10000).ToString();
                context.Announcements.Add(entity);
                context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }

        }

        public void Delete(string id)
        {
            try
            {
                Announcement notification = context.Announcements.Find(id);
                context.Announcements.Remove(notification);
                context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Announcement Get(string id)
        {
            try
            {
                return context.Announcements.Find(id);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Announcement> GetAll()
        {
            try
            {
                return context.Announcements.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Update(Announcement entity)
        {
            try
            {
                context.Update(entity);
                context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
