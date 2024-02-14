using Microsoft.AspNetCore.Mvc;
using NexEd_Project.DTO;
using NexEd_Project.Repositories;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace NexEd_Project.Controllers
{
    public class StudentAttendanceController : Controller
    {
        private readonly StudentAttendanceRepository studentAttendanceRepository;


        public StudentAttendanceController(StudentAttendanceRepository studentAttendanceRepository)
        {
            this.studentAttendanceRepository = studentAttendanceRepository;

        }

        [HttpPost, Route("AddStudAttendence")]
        public IActionResult AddStudAttendence(StudentAttendanceDTO data)
        {
            try
            {
                studentAttendanceRepository.AddStudentAttendence(data);
                return Ok("Student Attendence Added Succesfully");
            }
            catch (Exception)
            {

                throw;
            }
        }



        [HttpGet, Route("GetAllAttendance")]
        public IActionResult GetAllStudAttendances()
        {
            try
            {
                return Ok(studentAttendanceRepository.GetAll());
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet, Route("GetStudentAttendenceById/{StudId}")]
        public IActionResult GetStudentAttendenceById(string StudId)
        {
            try
            {
                return Ok(studentAttendanceRepository.GetStudAttendenceById(StudId));
            }
            catch (Exception)
            {

                throw;
            }
        }


        [HttpGet, Route("GetStudentsAttendenceByMonth/{date}")]
        public IActionResult GetStudentsAttendencebyDate(DateTime date)
        {
            try
            {
                return Ok(studentAttendanceRepository.GetStudentAttendencebyMonth(date));

            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
