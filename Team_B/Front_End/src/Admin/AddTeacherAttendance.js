import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const AddAttendanceTeacher = () => {
//   const [standards] = useState(' ');
//   const [sections] = useState(['A', 'B', 'C', 'D']); // Array of sections A to D
//   const [selectedStandard, setSelectedStandard] = useState('');
   const [selectedTeacherId, setSelectedTeacher] = useState('');
   const [teachers, setTeacher] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [message, setMessage] = useState('');
 
  useEffect(() => {
    if (selectedTeacherId ) {
      fetchTeacher();
    }
  }, [selectedTeacherId]);
 
  const fetchTeacher = async () => {
    try {
      const response = await axios.get(`http://localhost:5066/api/Teacher/GetTeacherById${selectedTeacherId}`);
      setTeacher(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };
 
  const handleStandardChange = (event) => {
    setSelectedTeacher(event.target.value);
  };

  const handleCheckboxChange = (event, teacherId, isTeacherPresent) => {
    setAttendance(prevAttendance => {
      // Check if the student's attendance record already exists
      const existingAttendanceIndex = prevAttendance.findIndex(item => item.teacherId === teacherId);
      // If it exists, update it; otherwise, add a new one
      if (existingAttendanceIndex >=  0) {
        const updatedAttendance = [...prevAttendance];
        updatedAttendance[existingAttendanceIndex] = { teacherId, isTeacherPresent };
        return updatedAttendance;
      } else {
        return [...prevAttendance, { teacherId, isTeacherPresent }];
      }
    });
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
 
    try {
      for (const { teacherId, isTeacherPresent } of attendance) {
        await axios.post('http://localhost:5066/api/TeacherAttendance/AddTeachAttendence', { teacherId, isTeacherPresent }, {
          headers: { 'Content-Type': 'application/json' }
        });
      }
 
      setMessage('Attendance submitted successfully');
      setAttendance([]);
      // Clear message after  5 seconds
      setTimeout(() => {
        setMessage('');
      },  3000);
    } catch (error) {
      console.error('Error submitting attendance:', error);
      setMessage('An error occurred while submitting attendance');
      // Clear message after  5 seconds
      setTimeout(() => {
        setMessage('');
      },  3000);
    }
  };
 
  return (
<div className="container mt-5">
<h2>Add Teacher Attendance</h2>
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label htmlFor="standardSelect" className="form-label">Select Standard:</label>
<select className="form-select" id="standardSelect" onChange={handleStandardChange} value={selectedTeacherId}>
<option value="">Select TeacherId</option>
<option value="CL01">T001</option>
<option value="CL02">T002</option>
<option value="CL03">T003</option>
<option value="CL04">T004</option>
<option value="CL05">T005</option>
<option value="CL06">T006</option>
<option value="CL07">T007</option>
<option value="CL08">T008</option>
<option value="CL09">T009</option>
<option value="CL10">T0010</option>

</select>
</div>
{/* <div className="mb-3">
<label htmlFor="sectionSelect" className="form-label">Select Section:</label>
<select className="form-select" id="sectionSelect" onChange={handleSectionChange} value={selectedSection}>
<option value="">Select Section</option>
            {sections.map((section, index) => (
<option key={index} value={section}>{section}</option>
            ))}
</select>
</div> */}
<table className="table">
<thead>
<tr>
<th>Teacher ID</th>
<th>First Name</th>
<th>Last Name</th>
<th>Attendance</th>
</tr>
</thead>
<tbody>
            {teachers.map(teacher => (
<tr key={teacher.teacherId}>
<td>{teacher.teacherId}</td>
<td>{teacher.studentFirstName}</td>
<td>{teacher.studentLastName}</td>
<td>
<div className="form-check form-check-inline">
<input
                      type="checkbox"
                      className="form-check-input"
                      id={`teacher${teacher.teacherId}_P`}
                      name={`teacher${teacher.teacherId}_P`}
                      checked={attendance.some(item => item.teacherId === teacher.teacherId && item.isTeacherPresent === 'P')}
                      onChange={event => handleCheckboxChange(event, teacher.teacherId, 'P')}
                    />
<label className="form-check-label" htmlFor={`teacher${teacher.teacherId}_P`}>
                      Present
</label>
</div>
<div className="form-check form-check-inline">
<input
                      type="checkbox"
                      className="form-check-input"
                      id={`teacher${teacher.teacherId}_A`}
                      name={`teacher${teacher.teacherId}_A`}
                      checked={attendance.some(item => item.teacherId === teacher.teacherId && item.isTeacherPresent === 'A')}
                      onChange={event => handleCheckboxChange(event, teacher.teacherId, 'A')}
                    />
<label className="form-check-label" htmlFor={`teacher${teacher.teacherId}_A`}>
                      Absent
</label>
</div>
</td>
</tr>
            ))}
</tbody>
</table>
        {message && (
<div className="mt-3">
         {message && <div className="alert alert-info">{message}</div>}
</div>
        )}
<div className="mt-3">
<button type="submit" className="btn btn-primary">Submit Attendance</button>
</div>
</form>
</div>
  );
};
 
export default AddAttendanceTeacher;