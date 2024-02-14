using NexEd_Project.Entities;

namespace NexEd_Project.Repositories
{
    public interface IExaminationRepository
    {
        void Add(Examination examination);
        List<Examination> GetAll();
        Examination GetExamByExamId(string examId);
        List<Examination> GetExamByClassId(string ClassId);
        void UpdateExam(Examination examination);
        void DeleteExam(string examId);

        void RecordResult(Result mark);
        List<Result> GetAllResult();
        List<Result> GetAllResultByStudId(string studId);
        List<Result> GetAllResultByExamId(string examId);
        List<Result> GetAllResultByRId(string id);
        void UpdateResult(Result mark);
        void DeleteResult(string markId);

    }
}
