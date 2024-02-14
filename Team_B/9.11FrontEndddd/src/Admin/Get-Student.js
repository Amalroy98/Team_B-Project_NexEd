import {React,useState,useEffect} from "react";
import axios from "axios";
 
const GetAllStudent=()=>{
    const[students,getStudents]= useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:5066/api/Student/GetAll")
        .then((response)=>{
            console.log(response.data);//response.data return json data send by API
            getStudents(response.data);//add response data to students state.
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
                        <th>Id</th>
                     
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>DateOfBirth</th>
                        <th>Gender</th>
                        <th>classId</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {students.map((students)=>{
                        return(
                            <tr key={students.id}>
                                <td>{students.id}</td>
                                <td>{students.firstName}</td>
                                <td>{students.lastName}</td>
                                <td>{students.dateOfBirth}</td>
                                <td>{students.gender}</td>
                                <td>{students.classId}</td>
                           
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
 
export default GetAllStudent;