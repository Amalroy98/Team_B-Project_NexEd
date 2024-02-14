
using Microsoft.EntityFrameworkCore;
using NexEd_Project.Entities;
using NexEd_Project.Profiles;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace NexEd_Project.Repositories
{
    public class ExamRepository : IExaminationRepository
    {
        private readonly MyContext _context;

        public ExamRepository(MyContext context)
        {
            _context = context;
        }
        public void Add(Examination examination)
        {
            try
            {
                _context.Examinations.Add(examination);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void DeleteExam(string examId)
        {
            try
            {
                Examination examination = _context.Examinations.Find(examId);
                _context.Examinations.Remove(examination);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Examination> GetAll()
        {
            try
            {
                return _context.Examinations.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Examination> GetExamByClassId(string ClassId)
        {
            try
            {
                var exam = _context.Examinations.Where(
                       x => x.ClassId.Equals(ClassId)).ToList();
                return exam;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public Examination GetExamByExamId(string examId)
        {
            try
            {
                return _context.Examinations.Find(examId);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void UpdateExam(Examination examination)
        {
            try
            {
                _context.Examinations.Update(examination);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
        public void RecordResult(Result mark)
        {
            try
            {
                _context.mark.Add(mark);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<Result> GetAllResult()
        {
            try
            {
                return _context.mark.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<Result> GetAllResultByStudId(string studId)
        {
            try
            {
                var exam = _context.mark.Where(
                    x => x.StudentId.Equals(studId)).ToList();
                return exam;
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<Result> GetAllResultByExamId(string examId)
        {
            try
            {
                var exam = _context.mark.Where(
                       x => x.ExamId.Equals(examId)).ToList();
                return exam;
            }
            catch (Exception)
            {

                throw;
            }
        }
        public void UpdateResult(Result mark)
        {
            try
            {
                _context.mark.Update(mark);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }
        public void DeleteResult(string markId)
        {
            try
            {
                Result mark = _context.mark.Find(markId);
                _context.mark.Remove(mark);
                _context.SaveChanges();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<Result> GetAllResultByRId(string id)
        {
            try
            {
                var exam = _context.mark.Where(
                       x => x.Id.Equals(id)).ToList();
                return exam;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
