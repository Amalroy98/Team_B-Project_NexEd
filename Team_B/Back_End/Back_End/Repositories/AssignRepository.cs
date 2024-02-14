using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public class AssignRepository : IAssignRepository
    {
        private readonly MyContext _context;
        private readonly IMapper mapper;
        public AssignRepository(MyContext context, IMapper mapper)
        {
            _context = context;
            this.mapper = mapper;
        }

        public void AssignTeacherToClass(Assign assign)
        {
            _context.assigns.Add(assign);
            _context.SaveChanges();
        }

        public List<Assign> GetAll()
        {
            return _context.assigns.ToList();
        }

        public List<Assign> GetAllClassesByTeacherId(string teacherid)
        {
           List <Assign> cls = _context.assigns.Where(c=>c.TeacherId==teacherid).ToList();
           return cls;
        }

        public List<Assign> GetAllTeacherByClassId(string classid)

        {
            List<Assign> tchr = _context.assigns.Where(t=>t.Classid==classid).ToList();
            return tchr;
        }

    }
}