import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const GetClass=()=> {
    
    const [classs, getcls] = useState([])
    const navigate=useNavigate();
    
    axios
    .get("http://localhost:5066/api/Class/GetAllClass")
    .then((response)=>{
        console.log(response.data);
        getcls(response.data);
    })
    .catch((error)=>{
        console.log(error);
    });
     return (
        <div className="container">
           <table className='table table-stripped'>
            <thead>
                <tr>
                    <th>ClassId</th>
                    <th>ClassName</th>
                    <th>Section</th>
                  

                </tr>
            </thead>
            <tbody>
               
                  {
                    classs.map((item)=>{
                        return(
                            <tr key={item.classId}>
                                <td>{item.classId}</td>
                                <td>{item.className}</td>
                                <td>{item.section}</td>
                               
                            </tr>
                        )
                    })
                  }
            </tbody>
        </table>
    </div>
  )
};
  export default GetClass;