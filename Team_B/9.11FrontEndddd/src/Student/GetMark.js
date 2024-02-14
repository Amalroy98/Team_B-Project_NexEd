import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const GetMark=()=> {
    
    const [mark, getmark] = useState([])
    const navigate=useNavigate();
    
    axios
    .get("http://localhost:5066/api/Exam/GetAllResult")
    .then((response)=>{
        console.log(response.data);
        getmark(response.data);
    })
    .catch((error)=>{
        console.log(error);
    });
     return (
        <div className="container">
           <table className='table table-stripped'>
            <thead>
                <tr>
                    <th>ExamId</th>
                    <th>ResultId</th>
                    <th>StudentId</th>
                    <th>Marks</th>

                </tr>
            </thead>
            <tbody>
               
                  {
                    mark.map((item)=>{
                        return(
                            <tr key={item.examId}>
                                 <td>{item.examId}</td>
                                <td>{item.id}</td>
                                <td>{item.studentId}</td>
                                <td>{item.marks}</td>
                               
                            </tr>
                        )
                    })
                  }
            </tbody>
        </table>
    </div>
  )
};
  export default GetMark;