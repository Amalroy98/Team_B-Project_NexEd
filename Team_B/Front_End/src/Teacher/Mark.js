import { React, useState } from "react";
import axios from "axios";
function Result()  {

  let [examId, setId] = useState("");
  let [id, setRId] = useState("");
  let [studentId, setStudentId] = useState("");
  let [marks, setMarks] = useState("");
 
  
  
  function Save() 
  {
    let result = 
    {
       examId:examId,
       id:id,
    studentId:studentId,
    marks:marks
    }
   
    axios
      .post("http://localhost:5066/api/Exam/RecordResult/",result)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  const SearchByStudId = () => {
    axios
      .get(`http://localhost:5066/api/Exam/GetAllResultByStudId/${studentId}`)
      .then((response) => {
        console.log(response.data);
        setId(response.data.examId);
        setRId(response.data.id);
        setStudentId(response.data.studentId);
        setMarks(response.data.marks);
       
      })
      .catch((error) => console.log(error)); 
  };
  const SearchByExamId = () => {
    axios
      .get(`http://localhost:5066/api/Exam/GetAllResultByExamId/${examId}`)
      .then((response) => {
        console.log(response.data);
        setId(response.data.examId);
        setRId(response.data.id);
        setStudentId(response.data.studentId);
        setMarks(response.data.marks);
       
      })
      .catch((error) => console.log(error)); 
  };
  const Edit = () => {
    let result = {
        examId:examId,
        id:id,
     studentId:studentId,
     marks:marks
    }
    axios
      .put("", result)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  const Delete = () => {
    alert("Do you want to delete?")
    axios
      .delete(`http://localhost:5066/api/Exam/DeleteResult/${id}`)
  
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
              <td>ResultId</td>
              <td>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Student Id</td>
              <td>
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Marks</td>
              <td>
                <input
                  type="text"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                />
              </td>
            </tr>
           
            <tr>
              <td colSpan={2}>
                <button type="submit" >Add</button> 
                <button type="button" onClick={SearchByStudId}>
                SearchByStudId
                </button>
                <button type="button" onClick={SearchByExamId}>
                SearchByExamId
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
export default Result;
