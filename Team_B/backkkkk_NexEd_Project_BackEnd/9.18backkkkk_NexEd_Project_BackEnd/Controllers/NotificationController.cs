using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NexEd_Project.Entities;
using NexEd_Project.Repositories;

namespace NexEd_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationController : ControllerBase
    {
        public readonly NotificationRepository notificationRepository;

       
        [HttpGet,Route("GetNotification")]
       // [AllowAnonymous]

        public IActionResult GetAllNotifications()
        {
            return Ok(notificationRepository.GetAllNotifications());
        }

        [HttpPost,Route("AddNotification")]
     //   [Authorize(Roles = "Admin")]
        public IActionResult AddNotification([FromBody] Notification Notifications)
        {
            notificationRepository.AddNotification(Notifications);
            return Ok(Notifications);
        }
    }
}
