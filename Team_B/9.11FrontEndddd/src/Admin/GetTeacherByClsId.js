import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const GetAssignById=()=> {
    
    const [classid, setClassid] = useState("C001")
    const[dis,setDis]=useState([])
    const navigate=useNavigate();

    const [classIdOptions, setClassIdOptions] = useState([
  
        { classid: "C001" },
        { classid: "C002" },
        
      ]);
    
    function GetById(){
      
    axios
    .get(`http://localhost:5066/api/Assign/GetAllTeachersByClassId/${classid}`)
    
    .then((response)=>{
        setDis(response.data)
  console.log(response.data);
       
    })
    .catch((error)=>{
        console.log( error);
          
    });
}
     return (
        <div >
             <h1>GetTeacherByClassId</h1>
              <table>
               
        <tr>


      
        <td>
            {/* <input type='text' placeholder='ClassId' value={classid} onChange={(e)=>setClassid(e.target.value)}/> */}
            <select value={classid}
                         onChange={(e)=>setClassid(e.target.value)}>
                    {classIdOptions.map((option)=>(
                      <option key={option.classid} value={option.classid}>
                        {option.classid}
                      </option>
                    ))}
                   </select>
        </td>
        </tr>
        <tr>
            <td>
                <button  onClick={()=>GetById()}>Click</button>
            </td>
        </tr>
        
    </table>
           <table className='table table-stripped'>
            <tbody>
                <tr>
                    <th>AssignId</th>
                    <th>ClassId</th>
                    <th>TeacherId</th>
                  </tr>
                 {
                    dis.map((item)=>{
                        return (
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
  export default GetAssignById;