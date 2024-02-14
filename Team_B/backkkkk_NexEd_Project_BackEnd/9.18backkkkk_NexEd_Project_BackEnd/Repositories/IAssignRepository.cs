using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public interface IAssignRepository
    {
       
        void AssignTeacherToClass(Assign assign);

        List<Assign> GetAllTeacherByClassId(string classid);
        List<Assign> GetAllClassesByTeacherId(string teacherid);
        List<Assign> GetAll();

    }
}
