using AutoMapper;
using Microsoft.EntityFrameworkCore;
using NexEd_Project.Entities;
using NexEd_Project.Models;
using NexEd_Project.DTO;
using NexEd_Project.DTO; 

using System.Diagnostics;

namespace NexEd_Project.Repositories
{
    public class StudentAttendanceRepository:IStudentAttendanceRepository
    {
        private readonly MyContext _myContext;
        private readonly IMapper _mapper;
    

        public StudentAttendanceRepository(MyContext myContext, IMapper mapper)
        {
            _myContext = myContext;
            this._mapper = mapper;
        }

        public void AddStudentAttendence(StudentAttendanceDTO data)
        {
            try
            {
                var item = _mapper.Map<StudentAttendance>(data);
                item.Date = DateTime.Now;
                _myContext.attendances.Add(item);
                _myContext.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<StudentAttendance> GetAll()
        {
            try
            {
                return _myContext.attendances.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Report GetStudAttendenceById(string StudId)
        {
            try
            {
                Report report = new Report();
                var getids = _myContext.attendances.Where(x => x.StudentId == StudId);
                List<StudentAttendance> ta = _myContext.attendances.Where(t => t.StudentId == StudId).ToList();
                var dates = getids.ToList();
                report.TotalWorkDays = ta.Count();
                report.Present = ta.Where(t => t.isStudentPresent == "P").Count();
                report.Absent = ta.Where(t => t.isStudentPresent == "A").Count();
                report.AttendancePercentage = (report.Present / report.TotalWorkDays) * 100;
                //report.Present = Present;
                //report.Absent = Absent;
                //report.AttendancePercentage = AttendancePercentage;
                return report;

            }
            catch (Exception)
            {

                throw;
            }
        }

        public Report GetStudentAttendencebyMonth(DateTime month)
        {
            try
            {
                Report sar = new Report();

                List<StudentAttendance> ta = _myContext.attendances.Where(t => t.Date.Month == month.Month).ToList();
                sar.TotalWorkDays = ta.Count();
                sar.Absent = ta.Where(t => t.isStudentPresent != "P").Count();
                sar.Present = sar.TotalWorkDays - sar.Absent;
                sar.AttendancePercentage = (sar.Present / sar.TotalWorkDays) * 100;




                return sar;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}

 