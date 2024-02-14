using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NexEd_Project.Entities;
using NexEd_Project.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using NexEd_Project.DTO;
using AutoMapper;
using System.Security.Claims;

namespace NexEd_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase

    {
        private readonly StudentRepository studentRepository;
        private readonly IMapper mapper;

        public List<Student> Students { get; set; }
        public StudentRepository StudentRepository;
        public StudentController(StudentRepository studentRepository, IMapper mapper)
        {
            this.studentRepository = studentRepository;
            this.mapper = mapper;
           
        }

        [HttpPost, Route("Add")]
        // [AllowAnonymous]
        public IActionResult Add(StudentDTO data)
        {
            try
            {
               /* studentRepository.Add(student);
                return Ok(student);*/

                Student student = mapper.Map<Student>(data);
                if(ModelState.IsValid)
                {
                    studentRepository.Add(student);
                    return Ok(student);
                }
                return new JsonResult("Something went wrong")
                {
                    StatusCode = 500
                };

            }
            catch (Exception ex)
            {

              return StatusCode(404,ex.Message);
            }
        }


        [HttpGet, Route("GetStudentId/{id}")]
     
        public IActionResult GetStudentbyId(string id)
        {
           try
            {
                var item = studentRepository.GetById(id);
                if(item == null)
                {
                    return NotFound();
                }
                var studentDto = new StudentDTO
                {
                    Id = item.Id,
                    FirstName = item.FirstName,
                    LastName= item.LastName,
                    DateOfBirth = item.DateOfBirth,
                    Gender = item.Gender,
                    ClassId = item.ClassId,

                };
                return Ok(studentDto);
            }
            catch(Exception ex)
            {
                return StatusCode(500, "Internal error");
            }
        }

        [HttpGet("GetStudentsByClassName/{className}")]
        public IActionResult GetStudentsByClassName(string className)
        {
           

            List<StudentDisplayDTO> students = studentRepository.GetStudentsByClassName(className);

            return Ok(students);
          
        }

        [HttpGet("GetStudentBySection/{section}/{className}")]
        public IActionResult GetStudentBySection(string className, string section)
        {
            
            List<StudentDisplayDTO> students = studentRepository.GetStudentBySection(section,className);

            return Ok(students);
        }

        [HttpGet, Route("GetAll")]
       // [Authorize(Roles = "Admin,Teacher")]
        public IActionResult GetAll()
        {
            try
            {
                return Ok(studentRepository.GetAll());
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message);
            }
        }

        [HttpPut, Route("EditStudent")]
       // [AllowAnonymous]
        public IActionResult Modifiy(StudentDTO studentDTO)
        {
            
            try
            {
                
                var student = mapper.Map<Student>(studentDTO); //convert dto to entity


                if (ModelState.IsValid)
                {
                    studentRepository.Update(student);

                    return Ok(student);
                }

                return new JsonResult("Something went wrong") { StatusCode = 500 };
            }
            catch (Exception ex)
            {

                return StatusCode(404, ex.Message);

            }
        }

        [HttpDelete, Route("DeleteStudent/{id}")]
        //[Authorize(Roles = "Admin")]
        public IActionResult DeleteStudent(string id)
        {

            try
            {
                studentRepository.Delete(id);
                return Ok("Student Deleted");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
   
}
