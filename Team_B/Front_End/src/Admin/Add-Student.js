import { React, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { FooterContainer } from "../pages/home-style";
import Footer from "../Footer/Footer";
function AddStudent()  {

  let [id, setId] = useState("");
  let [firstName, setFName] = useState("");
  let [lastName, setLName] = useState("");
  let [dateOfBirth, setDob] = useState("");
  let [gender, setGender] = useState("");
  let [classId, setClassId] = useState(""); 
  let [classes, setClasses] = useState("");
  let [className, setclassName] = useState("");

  
  function Save() 
  {
    let student = 
    {
      id: id,
      firstName:firstName,
      lastName:lastName,
      dateOfBirth: dateOfBirth,
      gender: gender,
     classId: classId,
        className: className,
      
    }
   
    axios
      .post("http://localhost:5066/api/Student/Add/",student)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  const Search = () => {
    axios
      .get(`http://localhost:5066/api/Student/GetStudentId/${id}`)
      .then((response) => {
        console.log(response.data);
        setFName(response.data.firstName);
        setLName(response.data.lastName);
        setDob(response.data.dateOfBirth);
        setGender(response.data.gender);
        setClassId(response.data.classId);
        setClasses(response.data.classes);
        setclassName(response.data.className);
      })
      .catch((error) => console.log(error)); 
  };
  const Edit = () => {
    let student = {
      id: id,
      firstName:firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      gender:gender,
      classId: classId,
      classes:classes,
      className,className
    }
    axios
      .put("http://localhost:5066/api/Student/EditStudent/", student)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  const Delete = () => {
    alert("Do you want to delete?")
    axios
      .delete("http://localhost:5066/api/Student/DeleteStudent/" + id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Header />
    <div className="container">
      <form onSubmit={Save}>
        <table className="table">
          <tbody>
            <tr>
              <td>Id</td>
              <td>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>FirstName</td>
              <td>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>LastName</td>
              <td>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>DateOfBirth</td>
              <td>
                <input
                  type="text"
                  value={dateOfBirth}
                  onChange={(e) => setDob(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>ClassId</td>
              <td>
                <input
                  type="text"
                  value={classId}
                  onChange={(e) => setClassId(e.target.value)}
                />
              </td>
            </tr>
           
            <tr>
              <td colSpan={2}>
                <button type="submit" >Add</button>
                <button type="button" onClick={Search}>
                  Search
                </button>
                <button type="button" onClick={Edit}>
                  Edit
                </button>
                <button type="button" onClick={Delete}>
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
};
export default AddStudent;
