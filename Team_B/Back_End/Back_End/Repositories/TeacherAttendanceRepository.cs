using AutoMapper;
using Microsoft.EntityFrameworkCore;
using NexEd_Project.DTO;
using NexEd_Project.Entities;
using NexEd_Project.Models;
using NexEd_Project.Repositories;
using NexEd_Project.DTO;

namespace NexEd_Project.Repositories
{
    public class TeacherAttendanceRepository:ITeacherAttendanceRepository
    {
        private readonly MyContext mycontext;
        private readonly IMapper mapper;

        public TeacherAttendanceRepository(MyContext context, IMapper mapper)
        {
            mycontext = context;
            this.mapper = mapper;
        }

        public void AddTeacherAttendance(TeacherAttendanceDTO data)
        {

            try
            {
                var item = mapper.Map<TeacherAttendance>(data);
                item.Date = DateTime.Now;
                mycontext.Tattendances.Add(item);
                mycontext.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<TeacherAttendance> GetAll()
        {
            try
            {
                return mycontext.Tattendances.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Report GetteacherAttendenceById(string Teachid)
        {
            try
            {
                Report report = new Report();
                var getids = mycontext.Tattendances.Where(x => x.TeacherId == Teachid);
                List<TeacherAttendance> ta = mycontext.Tattendances.Where(t => t.TeacherId == Teachid).ToList();
                var dates = getids.ToList();
                report.TotalWorkDays = ta.Count();
                report.Present = ta.Where(t => t.isTeacherPresent == "P").Count();
                report.Absent = ta.Where(t => t.isTeacherPresent == "A").Count();
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

        public Report GetTeacherAttendencebyMonth(DateTime month)
        {
            try
            {

                Report tar = new Report();

                List<TeacherAttendance> ta = mycontext.Tattendances.Where(t => t.Date.Month == month.Month).ToList();
                tar.TotalWorkDays = ta.Count();
                tar.Absent = ta.Where(t => t.isTeacherPresent != "P").Count();
                tar.Present = tar.TotalWorkDays - tar.Absent;
                tar.AttendancePercentage = (tar.Present / tar.TotalWorkDays) * 100;




                return tar;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
