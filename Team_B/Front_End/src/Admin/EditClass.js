
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UpdateClass() {
    const [classId, setCid] = useState("")
    const [className, setName] = useState("")
    const [section, setSection] = useState("")
    const navigate=useNavigate();

    function Update(){
       
            let values={
                classId: classId,
                className: className,
                section: section
            }
            axios
            .put("http://localhost:5066/api/Class/EditClass",values)
            .then((response)=>{
                console.log(response.data);
                alert("Updated Successfully")

            })
        };
       
        return (
            <div className="container">
        
                <h1>Update Class</h1>
                <table>
                    <tr>
                    <td>ClassId</td>
                        <td>
                            <input type='text' placeholder='Class Id' value={classId} onChange={(e)=>setCid(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Class Name</td>
                        <td>
                            <input type='text' placeholder='Class Name' value={className} onChange={(e)=>setName(e.target.value)}/>
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
                            <button type="submit" onClick={Update} className="btn btn-primary">Update class</button>
                        </td>
                    </tr>
                </table>
            </div>
          )
        

};

export default UpdateClass;
