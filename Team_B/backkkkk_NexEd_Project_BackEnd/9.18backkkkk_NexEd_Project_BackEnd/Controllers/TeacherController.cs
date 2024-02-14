using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NexEd_Project.Entities;
using NexEd_Project.Repositories;
using NexEd_Project.DTO;
using AutoMapper;
using System.Security.Claims;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Collections.Generic;


namespace NexEd_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        public readonly TeacherRepository teacherRepository;
        //private readonly IMapper mapper;

        public List<Teacher> Teachers { get; set; }
        public TeacherRepository TeacherRepository;
        public TeacherController(TeacherRepository teacherRepository)
        {
            this.teacherRepository = teacherRepository;
            //this.mapper = mapper;
        }
        [HttpPost, Route("AddTeacher")]
        //[Authorize(Roles = "Admin")]
        public IActionResult Add([FromBody] TeacherDTO data)
        {
            try
            {
                /* teacherRepository.Add(teacher);
                 return Ok(teacher);*/
               
                teacherRepository.Add(data);
                return Ok(data);
             
            }
            catch (Exception)
            {

                throw;

            }

        }
        [HttpGet, Route("GetTeacherById")]
      //  [Authorize(Roles = "Admin,Teacher")]
        public IActionResult GetTeacherbyId(string id)
        {
            /* return Ok(teacherRepository.Get(id));*/
            try
            {
                return Ok(teacherRepository.GetById(id));
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message);
            }
        }
        [HttpGet, Route("GetTeacherBySubject")]
      //  [Authorize(Roles = "Admin,Teacher")]
        public IActionResult GetTeacherBySubject(string Subjecct)
        {
            /*return Ok(teacherRepository.GetBySubject(Subjecct));*/

            try
            {
                return Ok(teacherRepository.GetBySubject(Subjecct));
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message);

            }
        }
        [HttpGet, Route("GetAll")]
       // [Authorize(Roles = "Admin,Teacher")]
        public IActionResult GetAll()
        {
            /* return Ok(teacherRepository.GetAll());*/
            try
            {
                return Ok(teacherRepository.GetAll());
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message);
            }

        }

        [HttpPut, Route("EditTeacher")]
        // [Authorize(Roles = "Teacher")]
        public IActionResult Modifiy(TeacherDTO teacherDTO)
        {
            /* teacherRepository.Update(entity);
             return Ok();*/

            try
            {
                teacherRepository.Update(teacherDTO);

                return Ok(teacherDTO);
                return new JsonResult("Something went wrong") { StatusCode = 500 };
            }

            catch (Exception ex)
            {

                return StatusCode(404, ex.Message);


            }
        }
        [HttpDelete, Route("DeleteTeacher/{id}")]
       // [Authorize(Roles = "Admin")]
        public IActionResult Delete(string id)
        {
            /* teacherRepository.Delete(id);
             return Ok("Tutor Deleted");*/

            try
            {
                teacherRepository.Delete(id);
                return Ok("Teacher Deleted");
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message);
            }
        }
    }
}
