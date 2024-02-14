using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using NexEd_Project.DTO;
using NexEd_Project.Entities;
using NexEd_Project.Repositories;


namespace NexEd_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherAttendanceController : ControllerBase
    {
        private readonly TeacherAttendanceRepository teacherAttendanceRepository;

        public TeacherAttendanceController(TeacherAttendanceRepository teacherAttendanceRepository)
        {
            this.teacherAttendanceRepository = teacherAttendanceRepository;

        }
        [HttpPost, Route("AddTeachAttendence")]
        public IActionResult AddTeachAttendence(TeacherAttendanceDTO data)
        {
            try
            {
                teacherAttendanceRepository.AddTeacherAttendance(data);
                return Ok("Teacher Attendence added Succesfully");
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet, Route("GetAllAttendance")]
        public IActionResult GetAllTeacherAttendances()
        {
            try
            {
                return Ok(teacherAttendanceRepository.GetAll());
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet, Route("GetTeachAttendenceById/{id}")]
        public IActionResult GetTeachAttendenceById(string id)
        {
            try
            {
                return Ok(teacherAttendanceRepository.GetteacherAttendenceById(id));
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet, Route("GetTeachersAttendenceByMonth/{date}")]
        public IActionResult GetTeachersAttendencebyDate(DateTime date)
        {
            try
            {
                return Ok(teacherAttendanceRepository.GetTeacherAttendencebyMonth(date));

            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
