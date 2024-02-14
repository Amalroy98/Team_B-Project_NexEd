using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NexEd_Project.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using NexEd_Project.DTO;
using NexEd_Project.Entities;
using AutoMapper;
using static System.Runtime.InteropServices.JavaScript.JSType;


namespace NexEd_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssignController : ControllerBase
    {
        //  public readonly AssignRepository assignRepository;

        private readonly AssignRepository _assignRepository;
        private readonly IMapper mapper;

        public List<Assign> assigns { get; set; }
        public AssignRepository AssignRepository;
        public AssignController(AssignRepository assignRepository, IMapper mapper)
        {
            _assignRepository = assignRepository;
            this.mapper = mapper;
          }


        [HttpPost, Route("AssignTeacher")]
        // [AllowAnonymous]
        public IActionResult AssignTeacherToClass(AssignDTO data)
        {

            try
            {
                /* studentRepository.Add(student);
                 return Ok(student);*/

                Assign assign1 = mapper.Map<Assign>(data);
                if (ModelState.IsValid)
                {
                    _assignRepository.AssignTeacherToClass(assign1);
                    return Ok(assign1);
                   
                }
                return new JsonResult("Something went wrong")
                {
                    StatusCode = 500
                };

            }
            catch (Exception ex)
            {

                return StatusCode(404, ex.Message);
            }
        }
        [HttpGet, Route("GetAllAssigns")]
        public IActionResult GetAll()
        {
            return Ok(_assignRepository.GetAll());
        }
        [HttpGet,Route("GetAllTeachersByClassId/{classid}")]
        public  IActionResult GetAllTeacherByClassId(string classid) 
        {
            List<Assign> tchr = _assignRepository.GetAllTeacherByClassId(classid);
            return Ok(tchr);
        }


        [HttpGet, Route("GetAllClassByTeacherId/{teacherid}")]
        public IActionResult GetAllClassesByTeacherId(string teacherid)
        {
            List<Assign> cls = _assignRepository.GetAllClassesByTeacherId(teacherid);
            return Ok(cls);
        }




    }
}
