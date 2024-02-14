import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const GetAllAssign=()=> {
    
    const [Assign, getAssign] = useState([])
    const navigate=useNavigate();
    
    axios
    .get("http://localhost:5066/api/Assign/GetAllAssigns")
    .then((response)=>{
        console.log(response.data);
        getAssign(response.data);
    })
    .catch((error)=>{
        console.log(error);
    });
     return (
        <div className="container">
           <table className='table table-stripped'>
            <thead>
                <tr>
                    <th>AssignId</th>
                    <th>ClassId</th>
                    <th>TeacherId</th>
                  </tr>
            </thead>
            <tbody>
               
                  {
                    Assign.map((item)=>{
                        return(
                            <tr key={item.assignId}>
                                <td>{item.assignId}</td>
                                <td>{item.classid}</td>
                                <td>{item.teacherId}</td>
                               
                            </tr>
                        )
                    })
                  }
            </tbody>
        </table>
    </div>
  )
};
  export default GetAllAssign;