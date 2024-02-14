using AutoMapper;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using NexEd_Project.DTO;
using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public class TeacherRepository:ITeacherRepository
    {
        public readonly MyContext context;
          private readonly  IMapper mapper;


        public TeacherRepository(MyContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;   
        }

        public void Add(TeacherDTO teacherdto)
        {
            Teacher teacher = mapper.Map<Teacher>(teacherdto);
            context.Teachers.Add(teacher);
            context.SaveChanges();
        }

        public void Delete(string id)
        {
            Teacher teacher = context.Teachers.Find(id);
            context.Teachers.Remove(teacher);
            context.SaveChanges();
        }

        public List<TeacherDTO> GetAll()
        {

            List<Teacher> sts = context.Teachers.ToList();

            List<TeacherDTO> stsdisplay = mapper.Map<List<TeacherDTO>>(sts);
            return stsdisplay;
        }

        public TeacherDTO GetById(string id)
        {
            Teacher teacher = context.Teachers.Find(id);
            TeacherDTO teacherDTO = mapper.Map<TeacherDTO>(teacher);
            return teacherDTO;
        }

        public List<TeacherDTO> GetBySubject(string subjecct)
        {
            List<Teacher> teacher = context.Teachers.Where(t=>t.SubjectTaught==subjecct).ToList();
            List<TeacherDTO> teacherDTO = mapper.Map<List<TeacherDTO>>(teacher);
            return teacherDTO; 
        }

        public void Update(TeacherDTO teacherDto)
        {
         Teacher teacher = mapper.Map<Teacher>(teacherDto);
            context.Teachers.Update(teacher);
            context.SaveChanges();
        }
    }

   
}
