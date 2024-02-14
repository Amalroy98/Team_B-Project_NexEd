using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using NexEd_Project.DTO;
using NexEd_Project.Entities;
using NexEd_Project.Models;
using NexEd_Project.Repositories;
using AutoMapper;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace NexEd_Project.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        public class ExamController : ControllerBase
        {
        private readonly ExamRepository _examinationrepository;
        private readonly IMapper _mapper;
        public List<Examination> exam = new List<Examination>();
        public List<Result> mark = new List<Result>();
        private readonly MyContext _context;
        public ExamController(ExamRepository examinationrepository, IMapper mapper, MyContext context)
        {
            _examinationrepository = examinationrepository;
            _mapper = mapper;
            _context = context;
        }

        [HttpPost, Route("ScheduleExam")]
        public IActionResult Add(ExamDTO examination)
        {
            try
            {
                //  classRepository.Create(classes);
                //  return Ok(classes);
                var exam = _mapper.Map<Examination>(examination); //convert dto to entity

                if (ModelState.IsValid)
                {
                    _examinationrepository.Add(exam);

                    return Ok(exam);
                }

                return new JsonResult("Something went wrong") { StatusCode = 500 };
            }
            catch (Exception ex)
            {

                return StatusCode(404, ex.Message);

            }
        }
        [HttpGet, Route("GetAllExam")]
        public IActionResult GetAll()
        {
            try
            {
                List<Examination> examinations = _examinationrepository.GetAll();
                List<ExamDTO> examinationDTOs = _mapper.Map<List<ExamDTO>>(examinations);
                return Ok(examinationDTOs);
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message);
            }
        }
        [HttpGet, Route("GetExamByExamId/{examId}")]
        public IActionResult GetExamByExamId(string examId)
        {
            try
            {
                var item = _examinationrepository.GetExamByExamId(examId);

                if (item == null)
                    return NotFound();
               ExamDTO exam= _mapper.Map<ExamDTO>(item);
                return Ok(exam  );
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet, Route("GetExamByClassId/{ClassId}")]
        public IActionResult GetExamByClassId(string ClassId)
        {
            try
            {

                List<Examination> item = _examinationrepository.GetExamByClassId(ClassId);


                List<ExamDTO> examDTOs = _mapper.Map<List<ExamDTO>>(item);
                return Ok(examDTOs);
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message);

            }
        }
        [HttpPut, Route("EditExamination")]
        public IActionResult Update([FromBody] ExamDTO examination)
        {
            try
            {
                //classRepository.Update(class1);
                //return Ok(class1);
                var exam = _mapper.Map<Examination>(examination); //convert dto to entity


                if (ModelState.IsValid)
                {
                    _examinationrepository.UpdateExam(exam);

                    return Ok(exam);
                }

                return new JsonResult("Something went wrong") { StatusCode = 500 };
            }
            catch (Exception ex)
            {

                return StatusCode(404, ex.Message);

            }
        }
        [HttpDelete, Route("DeleteExam/{examId}")]
        public IActionResult Delete(string examId)
        {
            _examinationrepository.DeleteExam(examId);
            return Ok("Examination deleted");
        }
        [HttpPost, Route("RecordResult")]
        public IActionResult RecordResult([FromBody] ResultDTO mark)
        {
            try
            {
                //  classRepository.Create(classes);
                //  return Ok(classes);
                var exam = _mapper.Map<Result>(mark); //convert dto to entity

                if (ModelState.IsValid)
                {
                    _examinationrepository.RecordResult(exam);

                    return Ok(exam);
                }

                return new JsonResult("Something went wrong") { StatusCode = 500 };
            }
            catch (Exception ex)
            {

                return StatusCode(404, ex.Message);

            }
        }
        [HttpGet, Route("GetAllResult")]
        public IActionResult GetAllResult()
        {
            try
            {
                List<Result> mark = _examinationrepository.GetAllResult();
                List<ResultDTO> markDTOs = _mapper.Map<List<ResultDTO>>(mark);
                return Ok(markDTOs);
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message);
            }
        }
        [HttpGet, Route("GetAllResultByStudId/{studId}")]
        public IActionResult GetAllResultByStudId(string studId)
        {
            try
            {
                List<Result> item = _examinationrepository.GetAllResultByStudId(studId);


                List<ResultDTO> markDTOs = _mapper.Map<List<ResultDTO>>(item);
                return Ok(markDTOs);
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpGet, Route("GetAllResultByExamId/{examId}")]
        public IActionResult GetAllResultByExamId(string examId)
        {
            try
            {

                List<Result> item = _examinationrepository.GetAllResultByExamId(examId);


                List<ResultDTO> markDTOs = _mapper.Map<List<ResultDTO>>(item);
                return Ok(markDTOs);
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message);

            }
        }
        [HttpGet, Route("GetAllResultByRId/{id}")]
        public IActionResult GetAllResultByRId(string id)
        {
            try
            {

                List<Result> item = _examinationrepository.GetAllResultByRId(id);


                List<ResultDTO> markDTOs = _mapper.Map<List<ResultDTO>>(item);
                return Ok(markDTOs);
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message);

            }
        }
        [HttpPut, Route("UpdateResult")]
        public IActionResult UpdateResult([FromBody] Result mark)
        {
            try
            {
                //classRepository.Update(class1);
                //return Ok(class1);
                var mar = _mapper.Map<Result>(mark); //convert dto to entity


                if (ModelState.IsValid)
                {
                    _examinationrepository.UpdateResult(mar);

                    return Ok(exam);
                }

                return new JsonResult("Something went wrong") { StatusCode = 500 };
            }
            catch (Exception ex)
            {

                return StatusCode(404, ex.Message);

            }
        }
        [HttpDelete, Route("DeleteResult/{markId}")]
        public IActionResult DeleteResult(string markId)
        {
            _examinationrepository.DeleteResult(markId);
            return Ok("Examination deleted");
        }
        [HttpGet, Route("GetResultStudentby/{id}")]
        public IActionResult GetByStudentId(string id)
        {
            try
            {
                List<Result> r1 = _examinationrepository.GetAllResultByStudId(id);
                List<ResultDisplay> resultDTO = _mapper.Map<List<ResultDisplay>>(r1);


                int i = 0;
                foreach (var item in resultDTO)
                {
                    item.ExamName = (from e in _context.Examinations
                                     where e.ExamId == r1[i].ExamId
                    select e.ExamName).Single();


                    item.StudentName = (from e in _context.Students
                                        where e.Id == r1[i].StudentId
                                        select e.FirstName + " " + e.LastName).Single();


                    //item.StudentRoll = (from e in _context.Students
                    //                    where e.Id == r1[i].StudentId
                    //                    select e.roll).Single();


                    item.className = (from e in _context.Students
                                      where e.Id == r1[i].StudentId
                                      select e.Classes.ClassName).Single();


                    item.Section = (from e in _context.Students
                                    where e.Id == r1[i].StudentId
                                    select e.Classes.Section).Single();


                    item.Subject = (from e in _context.Examinations
                                    where e.ExamId == r1[i].ExamId
                                    select e.SubjectName).Single();
                    item.mark = (from e in _context.mark
                                 where e.Id == r1[i].Id
                                 select e.Marks).Single();
                    item.Result = item.mark >= 40 ? "Pass" : "Fail";

                    i++;
                }


                ResultReport resultReport = new ResultReport();

                // resultReport.stdResults = resultDTO;
                resultReport.stdDisplay = resultDTO;
                float totalmark = 0;


                foreach (var item in resultDTO)
                {
                    totalmark += item.mark;
                    //if (item.Mark >= 40)
                    //{
                    //    item.Result = "Pass";
                    //}
                    //else
                    //{
                    //    item
                    //}
                }
                resultReport.totalMarks = totalmark.ToString();
                resultReport.Percentage = ((totalmark / (float)resultDTO.Count())).ToString();
                return Ok(resultReport);
            }
            catch (Exception ex)
            {
                return StatusCode(404, ex.Message);

            }
        }
    }
}
    

