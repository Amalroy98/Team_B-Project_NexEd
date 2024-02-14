import { React, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { FooterContainer } from "../pages/home-style";
import Footer from "../Footer/Footer";


function AddTeacher() {

    let [teacherId,setID]=useState("")
    let [firstName,setFName]=useState("")
    let [lastName,setLName]=useState("")
    let [dateOfBirth,setDob]=useState("")
    let [gender,setGender]=useState("")
   
    let [subjectTaught,setsubject]=useState("")
    let [classId, setClassId] = useState(""); 
    let [className, setClasses] = useState("");
    

   


    function Save()
    {
        let teacher=
        {
            teacherId:teacherId,
            firstName:firstName,
            lastName:lastName,
            dateOfBirth:dateOfBirth,
            gender:gender,
            subjectTaught:subjectTaught,
            classId:classId,
            className: className,
        }

        axios
        .post("http://localhost:5066/api/Teacher/AddTeacher/",teacher)
        .then((response)=>{
          console.log(response.data);
        })
         .catch((error)=>console.log(error)); 
    };
    
    const Search = () => {
      
      axios
        .get(`http://localhost:5066/api/Teacher/GetTeacherById?id=${teacherId}`)
        .then((response) => {
          console.log(response.data);
          setFName(response.data.firstName);
          setLName(response.data.lastName);
          setDob(response.data.dateOfBirth);
          setGender(response.data.gender);
          setsubject(response.data.subjectTaught);
       
        })
        .catch((error) => console.log(error)); 
    };

   
    const Edit = () => {
        let teacher=
        {
            teacherId:teacherId,
            firstName:firstName,
            lastName:lastName,
            dateOfBirth:dateOfBirth,
            gender:gender,
            subjectTaught:subjectTaught,
            classId:classId,
            className: className,
        }
        axios
          .put("http://localhost:5066/api/Teacher/EditTeacher/", teacher)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error));
      }
      const Delete = () => {
        alert("Do you want to delete?")
        axios
          .delete("http://localhost:5066/api/Teacher/DeleteTeacher/" + teacherId)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => console.log(error));
      };

    return(
      <>
      <Header/>
        <div className="container">
        <form onSubmit={Save}>
          <table className="table">
   
        <tbody>
            
            <tr>
                        <td>teacherId</td>
                        <td><input type="text" value={teacherId} onChange={(e)=>setID(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>firstName</td>
                        <td><input type="text" value={firstName} onChange={(e)=>setFName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>lastName</td>
                        <td><input type="text" value={lastName}  onChange={(e)=>setLName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>dateOfBirt</td>
                        <td><input type="text" value={dateOfBirth} onChange={(e)=>setDob(e.target.value)} /></td>
                    </tr>
                    <tr >
                        <td>gender</td>
                        <td><input type="text" value={gender} onChange={(e)=>setGender(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>subjectTaught</td>
                        <td><input type="text" value={subjectTaught} onChange={(e)=>setsubject(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>classId</td>
                        <td><input type="text" value={classId} onChange={(e)=>setClassId(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>className</td>
                        <td><input type="text" value={className} onChange={(e)=>setClasses(e.target.value)} /></td>
                    </tr>
                    <tr>
                    <td colSpan={2}>
                    <button type="submit" className="btn btn-primary">AddTeacher</button>
                       
                    <button type="button" className="btn btn-danger" onClick={Search}>
                  Search
                </button>
                    <button type="button" className="btn btn-danger" onClick={Edit}>
                  Edit
                </button>
            <button type="button" className="btn btn-danger" onClick={Delete}>
                  Delete
                </button>
           </td>
           </tr>
        </tbody>
        
    </table>
    </form>
   
</div>
    <FooterContainer>
        <Footer />
      </FooterContainer>
      </>


       
    );
}
export default AddTeacher;