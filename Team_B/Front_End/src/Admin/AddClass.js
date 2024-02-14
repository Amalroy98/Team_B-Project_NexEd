import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function AddClass(){
  const[classId,setClassId]=useState("");
  const[className,setClassName]=useState("");
  const[section,setSection]=useState("");
  const navigate=useNavigate();

  function AddCls(){
    let cls={
      classId:classId,
      className:className,
      section:section,
    }
    axios
    .post("http://localhost:5066/api/Class/AddClass",cls)
    .then((response)=>{
      console.log(response.data);
      alert("Class Added")
    })
  };
  const Delete = () => {
    alert("Do you want to delete?");
    axios
      .delete(`http://localhost:5066/api/Class/DeleteClass?id=${classId}`)
      .then((response) => {
        console.log(response.data);
        alert("Class deleted");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container">
        <h1>Add Class</h1>
       <form onSubmit={AddCls}>
       <table  className='table table-stripped'>
       <tbody>
            <tr>
              <td>ClassId</td>
                <td>
                    <input type='text' placeholder='Class Id' value={classId} onChange={(e)=>setClassId(e.target.value)}/>
                </td>
                </tr>
                <tr>
                <td>Class Name</td>
                <td>
                    <input type='text' placeholder='Class Name' value={className} onChange={(e)=>setClassName(e.target.value)}/>
                </td>
                </tr>
                <tr>
                <td>Section</td>
                <td>
                    <input type='text' placeholder='Section' value={section} onChange={(e)=>setSection(e.target.value)}/>
                </td>
                </tr>
                <tr>
                  
                  <td colSpan={2}>
                    <button type="submit" className="btn btn-primary">Add Class</button>
                    <button type="button" className="btn btn-primary" onClick={Delete}>Delete Class</button>
                   </td>    
                </tr>
           </tbody>

         </table>
       </form>
         </div>
  )
};


export default AddClass;