using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NexEd_Project.Entities;
using NexEd_Project.Repositories;
using AutoMapper;
using NexEd_Project.DTO;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace NexEd_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        private readonly IClassRepository classRepository;

        public ClassController(IClassRepository classRepository)
        {
            this.classRepository = classRepository;
        }

        [HttpPost, Route("AddClass")]
        // [AllowAnonymous]
        public IActionResult Add(Class cls)
        {

            try
            {
                classRepository.Add(cls);
                return Ok(cls);

                return new JsonResult("Something went wrong");


            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpDelete, Route("DeleteClass")]
        // [AllowAnonymous]
        public IActionResult Delete(string id)
        {

            try
            {
               classRepository.Delete(id);

                return new JsonResult("Class deleted");

            }
            catch (Exception)
            {

                throw;
            }

        }
        [HttpGet, Route("GetAllClass")]
        // [AllowAnonymous]
        public IActionResult GetAll()
        {

            try
            {
               return Ok(classRepository.GetAll());

                //return new JsonResult("Something went wrong");

            }
            catch (Exception)
            {

                throw;
            }

        }

        [HttpPut,Route("EditClass")]
        public IActionResult EditClass(Class cls)
        {

            try
            {
                classRepository.Update(cls);
                return Ok(cls);

            }
            catch (Exception)
            {

                throw;
            }

        }



    }
}


