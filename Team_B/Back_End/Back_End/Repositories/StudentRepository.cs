using Microsoft.EntityFrameworkCore;
using NexEd_Project.DTO;
using NexEd_Project.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Http.HttpResults;

namespace NexEd_Project.Repositories
{
    public class StudentRepository:IStudentRepository<Student>
    {
        public readonly MyContext context;

        private readonly IMapper mapper;

        public StudentRepository(MyContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }


      

        public void Add(Student entity)
        {
            context.Students.Add(entity);
            context.SaveChanges();

        }

        public void Update(Student entity)
        {
            context.Update(entity);
            context.SaveChanges();
        }

       

        public List<StudentDisplayDTO> GetAll()
        {
            

            List<Student> sts = context.Students.ToList();

            List<StudentDisplayDTO> stsdisplay = mapper.Map<List<StudentDisplayDTO>>(sts);
            List<Class> cls = context.Classes.ToList();
            int i = 0;

            foreach (StudentDisplayDTO studentdisplay in stsdisplay)
            {
                studentdisplay.Section = (from c in cls
                                          where c.ClassId == sts[i].ClassId
                                          select c.Section).Single();
                studentdisplay.ClassName = (from c in cls
                                            where c.ClassId == sts[i].ClassId
                                            select c.ClassName).Single();
                i++;
            }
            return stsdisplay;
        }

        public void Delete(string id)
        {
            try
            {

                Student student = context.Students.SingleOrDefault(s=>s.Id==id);
                Console.WriteLine(student.FirstName);

                    context.Students.Remove(student);
                    context.SaveChanges();
                
              
            }
            catch (Exception ex)
            {


                throw ex;
            }
        }
      

     

        public Student GetById(string id)
        {
            return context.Students.Find(id);
        }
    

        public List<StudentDisplayDTO> GetStudentsByClassName(string className)
        {
            


            List<Student> sts = context.Students.ToList();

            List<StudentDisplayDTO> stsdisplay = mapper.Map<List<StudentDisplayDTO>>(sts);
            List<Class> cls= context.Classes.ToList();
            int i = 0;

            foreach(StudentDisplayDTO studentdisplay in stsdisplay)
            {
                studentdisplay.Section=(from c in  cls
                                        where c.ClassId == sts[i].ClassId
                                        select c.Section).Single();
                studentdisplay.ClassName = (from c in cls
                                          where c.ClassId == sts[i].ClassId
                                          select c.ClassName).Single();
                i ++;
            }

            List<StudentDisplayDTO> stsselected=stsdisplay.Where(s=>s.ClassName==className).ToList();

            return stsselected;

        }

       

        public List<Student> GetBySubject(string subjecct)
        {
            return context.Students.ToList();
        }

        public List<StudentDisplayDTO>GetStudentBySection(string section, string classname)
        {

            List<Student> sts = context.Students.ToList();

            List<StudentDisplayDTO> stsdisplay = mapper.Map<List<StudentDisplayDTO>>(sts);
            List<Class> cls = context.Classes.ToList();
            int i = 0;

            foreach (StudentDisplayDTO studentdisplay in stsdisplay)
            {
                studentdisplay.Section = (from c in cls
                                          where c.ClassId == sts[i].ClassId
                                          select c.Section).Single();
                studentdisplay.ClassName = (from c in cls
                                            where c.ClassId == sts[i].ClassId
                                            select c.ClassName).Single();
                i++;
            }

            List<StudentDisplayDTO> stsselected = stsdisplay.Where(s => s.ClassName == classname && s.Section==section).ToList();




            return stsselected;

        }
    }
}
