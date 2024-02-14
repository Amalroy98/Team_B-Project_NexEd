import React, { useState } from 'react';
import axios from 'axios';

const GetStudentById = () => {
  const [id, setId] = useState('');
  const [student, setStudent] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/api/student/GetStudentbyId/${id}`);
      setStudent(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <h2>Get Student by ID</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="Student ID" onChange={handleChange} />
        <button type="submit">Get Student</button>
      </form>
      {student && (
        <div>
          <h3>Student Information</h3>
          <p>Name: {student.Name}</p>
          <p>Age: {student.Age}</p>
          <p>Grade: {student.Grade}</p>
          {/* Display other student properties as needed */}
        </div>
      )}
    </div>
  );
};

const GetAllStudents = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/student/GetAll', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setStudents(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>All Students</h2>
      <button type="button" onClick={fetchStudents}>
        Get All Students
      </button>
      <ul>
        {students.map((student) => (
          <li key={student.Id}>
            {student.Name} ({student.Grade})
          </li>
        ))}
      </ul>
    </div>
  );
};

const ModifyStudent = () => {
  const [student, setStudent] = useState({ id: '', name: '', age: '', grade: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put('http://localhost:5000/api/student/EditStudent', student);
      console.log('Student modified successfully.');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  return (
    <div>
      <h2>Modify Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={student.id} onChange={handleChange} />
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} />
        <input type="text" name="grade" placeholder="Grade" onChange={handleChange} />
        <button type="submit">Modify Student</button>
      </form>
    </div>
  );
};

export { GetStudentById, GetAllStudents, ModifyStudent };