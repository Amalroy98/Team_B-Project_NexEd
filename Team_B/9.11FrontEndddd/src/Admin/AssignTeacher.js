import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function AssignTeacher(){
  const[assignId,setassignId]=useState("");
  const[classId,setClassId]=useState("");
  const[className,setClassName]=useState("");
  const[section,setSection]=useState("");
  const[teacherId,setTeacherId]=useState("");

  const [classIdOptions, setClassIdOptions] = useState([
  
    { classId: "C001" },
    { classId: "C002" },
    
  ]);
  const [classNameOptions, setClassNameOptions] = useState([
  
    { className: "1" },
    { className: "2" },
    
  ]);
  const [classSectionOptions, setClassSectionOptions] = useState([
  
    { section: "A" },
    { section: "B" },
    
  ]);
  const navigate=useNavigate();

  function Addtcr(){
    let tcr={
      assignId:assignId,
      classId:classId,
      className:className,
      section:section,
      teacherId:teacherId
    }
    axios
    .post("http://localhost:5066/api/Assign/AssignTeacher",tcr)
    .then((response)=>{
      console.log(response.data);
      alert("Class Added")
    })
  }

  return (
    <div className="container">
        <h1>Add Class</h1>
       <form onSubmit={Addtcr}>
       <table  className='table table-stripped'>
       <tbody>
            <tr>
              <td>AssignId</td>
                <td>
                    <input type='text' placeholder='AssignId' value={assignId} onChange={(e)=>setassignId(e.target.value)}/>
                </td>
                </tr>
                <tr>
                <td>ClassId</td>
                <td>
                   <select value={classId}
                         onChange={(e)=>setClassId(e.target.value)}>
                    {classIdOptions.map((option)=>(
                      <option key={option.classId} value={option.classId}>
                        {option.classId}
                      </option>
                    ))}
                   </select>
                </td>
                </tr>
                <tr>
                <td>Class Name</td>
                <td>
                   <select value={className}
                  onChange={(e)=>setClassName(e.target.value)}>
                    {classNameOptions.map((option)=>(
                      <option key={option.className} value={option.className}>
                        {option.className}
                      </option>
                    ))}
                   </select>
                </td>
                </tr>
                <tr>
                <td>Section</td>
                <td>
                   <select value={section}
                   onChange={(e)=>setSection(e.target.value)}>
                    {classSectionOptions.map((option)=>(
                      <option key={option.section} value={option.section}>
                        {option.section}
                      </option>
                    ))}
                   </select>
                </td>
                </tr>
                <tr>
                <td>TeacherId</td>
                <td>
                    <input type='text' placeholder='teacherId' value={teacherId} onChange={(e)=>setTeacherId(e.target.value)}/>
                </td>
                </tr>
                <tr>
                  
                  <td colSpan={2}>
                    <button type="submit" className="btn btn-primary">Assign Teacher</button>
                   </td>    
                </tr>
           </tbody>

         </table>
       </form>
         </div>
  )
};


export default AssignTeacher;