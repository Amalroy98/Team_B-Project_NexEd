import {React,useState,useEffect} from "react";
import axios from "axios";
 
const GetExam=()=>{
    const[exams,getExams]= useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:5066/api/Exam/GetAllExam")
        .then((response)=>{
            console.log(response.data);//response.data return json data send by API
            getExams(response.data);//add response data to students state.
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);
    return(
        <div className="container">
              <h1>Admin Page</h1>
              <br></br>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ExamId</th>
                     
                        <th>Exam Name</th>
                        <th>Exam Date</th>
                        <th>ClassId</th>
                       
                    
                    </tr>
                </thead>
                <tbody>
                    {exams.map((exams)=>{
                        return(
                            <tr key={exams.examId}>
                                <td>{exams.examId}</td>
                                <td>{exams.subjectName}</td>
                                <td>{exams.examDate}</td>
                                <td>{exams.classId}</td>
                              
                           
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
 
export default GetExam;