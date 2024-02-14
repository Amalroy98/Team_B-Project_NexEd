using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NexEd_Project.Entities;
using NexEd_Project.Repositories;

namespace NexEd_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnnouncementController : ControllerBase
    {
        public readonly AnnouncementRepository announcementRepository;

        public AnnouncementController(AnnouncementRepository announcementRepository)
        {
            this.announcementRepository = announcementRepository;
        }

        [HttpPost, Route("AddNotification/")]
        public IActionResult Add([FromBody] Announcement announcement)
        {
            try
            {
                announcementRepository.Add(announcement);
                return Ok(announcement);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPut, Route("EditNotification/")]
        public IActionResult Update([FromBody] Announcement announcement)
        {
            try
            {
                announcementRepository.Update(announcement);
                return Ok(announcement);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet, Route("GetNotification/")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(announcementRepository.GetAll());
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpDelete, Route("DeleteNotification/")]
        public IActionResult Delete(string id)
        {
            try
            {
                announcementRepository.Delete(id);
                return Ok("Notification Deleted");
            }
            catch (Exception)
            {

                throw;
            }
        }


    }
}
