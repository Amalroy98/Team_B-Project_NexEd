using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public class NotificationRepository
    {
        private readonly MyContext context;
        
        public NotificationRepository(MyContext context)
        {
            this.context = context;
        }

        public List<Notification> GetAllNotifications()
        {
            return context.Notifications.ToList();
        }

        public void AddNotification(Notification Notifications)
        {
            context.Notifications.Add(Notifications);
            context.SaveChanges();
        }
    }
}
