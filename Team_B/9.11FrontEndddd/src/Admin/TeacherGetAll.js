import { React, useState, useEffect } from "react";
import axios from "axios";
const GetTeachers = () => {
  const [teacher, GetAll] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5066/api/Teacher/GetAll")
      .then((response) => {
        console.log(response.data);
        GetAll(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>teacherId</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>dateOfBirth</th>
            <th>gender</th>
            <th>subjectTaught</th>
            <th>classId</th>
            <th>classes</th>
          </tr>
        </thead>
        <tbody>
     
          {teacher.map((teachers) => {
            return (
              <tr key={teachers.teacherId}>
                <td>{teachers.teacherId}</td>
                <td>{teachers.firstName}</td>
                <td>{teachers.lastName}</td>
                <td>{teachers.dateOfBirth}</td>
                <td>{teachers.gender}</td>
                <td>{teachers.subjectTaught}</td>
                <td>{teachers.classId}</td>
                <td>{teachers.classes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default GetTeachers;