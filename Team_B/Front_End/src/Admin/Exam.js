import { React, useState } from "react";
import axios from "axios";
function Examination()  {

  let [examId, setId] = useState("");
  let [examName, setName] = useState("");
  let [examDate, setDate] = useState("");
  let [classId, setClsId] = useState("");
  let [subjectName, setSubject] = useState("");
  
  
  function Save() 
  {
    let exam = 
    {
        examId: examId,
        examName:examName,
        examDate:examDate,
        classId: classId,
        subjectName: subjectName,
   
      
    }
   
    axios
      .post("http://localhost:5066/api/Exam/ScheduleExam/",exam)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  const SearchByExamId = () => {
    axios
      .get(`http://localhost:5066/api/Exam/GetExamByExamId/${examId}`)
      .then((response) => {
        console.log(response.data);
        setDate(response.data.examDate);
        setClsId(response.data.classId);
        setSubject(response.data.subjectName);
       
      })
      .catch((error) => console.log(error)); 
  };
  const SearchByClassId = () => {
    axios
      .get(`http://localhost:5066/api/Exam/GetExamByClassId/${classId}`)
      .then((response) => {
        console.log(response.data);
        setId(response.data.examId);
        setDate(response.data.examDate);
         setSubject(response.data.subjectName);
       
      })
      .catch((error) => console.log(error)); 
  };
  const Edit = () => {
    let exam = {
        examId: examId,
        examDate:examDate,
        classId: classId,
        subjectName: subjectName,
    }
    axios
      .put("http://localhost:5066/api/Exam/EditExamination/", exam)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  const Delete = () => {
    alert("Do you want to delete?")
    axios
      .delete(`http://localhost:5066/api/Exam/DeleteExam/${examId}`)
  
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
      <form onSubmit={Save}>
        <table className="table">
          <tbody>
            <tr>
              <td>ExamId</td>
              <td>
                <input
                  type="text"
                  value={examId}
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
           
            <tr>
              <td>ExamDate</td>
              <td>
                <input
                  type="text"
                  value={examDate}
                  onChange={(e) => setDate(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>ClassId</td>
              <td>
                <input
                  type="text"
                  value={classId}
                  onChange={(e) => setClsId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>SubjectName</td>
              <td>
                <input
                  type="text"
                  value={subjectName}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </td>
            </tr>
           
            <tr>
              <td colSpan={2}>
                <button type="submit" >Add</button> 
                <button type="button" onClick={SearchByExamId}>
                  SearchByExamId
                </button>
                <button type="button" onClick={SearchByClassId}>
                  SearchByClassId
                </button>
                <button type="button" onClick={Edit}>
                  Edit
                </button>
                <button type="button" onClick={Delete}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
export default Examination;
