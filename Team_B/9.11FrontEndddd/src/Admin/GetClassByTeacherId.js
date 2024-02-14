import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



export default function ClassByTeacherId() {
    
    const [teacherId, setTeacherId] = useState("")
    const[idclass,setCls]=useState([])
    // const navigate=useNavigate()

    function Getteacher(){
        axios
        .get("http://localhost:5066/api/Assign/GetAllClassByTeacherId/"+teacherId)
        .then((response)=>{
        setCls(response.data)
        console.log(response.data);

    })
    .catch((error)=>{
        console.log(error);
    });
       
   }
        
    

return (
<div>
    <h1>GetAllClassByTeacherId</h1>
<table>
    <tr>
    <td>
        <input type='text' placeholder='TeacherID' value={teacherId} onChange={(e)=>setTeacherId(e.target.value)}/>
    </td>
    </tr>
    <tr>
        <td>
            <button onClick={(e)=>Getteacher()}>Click</button>
        </td>
    </tr>
</table>
<table className='table table-stripped'>
              <tbody>
            <tr>
                <th>assignId</th>
                <th>classid</th>
                <th>teacherId</th>
            
            </tr>
   
 
           {
             idclass.map((item)=>{
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

