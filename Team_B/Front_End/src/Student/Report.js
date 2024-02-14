import React, { useState } from 'react';

import axios from 'axios';

 

const Result1 = () => {

  const [markDetails, setDetails] = useState({ stdResults: [], percentage: "", totalMarks: "" });

  const [exmName, setExm] = useState("");

  const [studID, setStudID] = useState("");

  const [formErrors, setFormErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

 

  const handleSubmit = (e) => {

    e.preventDefault();

    setFormErrors({}); // Clear any previous errors on submit

    setIsLoading(true);

 

    const validationErrors = {};

 

    if (!exmName) {

      validationErrors.exmName = "Exam Name is required";

    }

 

    if (!studID) {

      validationErrors.studID = "Student ID is required";

    } else if (!/^[0-9]+$/.test(studID)) {

      //validationErrors.studID = "Student ID must be a number";

    }

 

    setFormErrors(validationErrors);

 

    if (Object.keys(validationErrors).length === 0) {

      fetchResults();

    } else {

      setIsLoading(false);

    }

  };

 

  const fetchResults = async () => {

    try {

      console.log(studID,exmName)

      const response = await axios.get(`http://localhost:5297/api/Result/GetResultStudentbyidexam/${studID}/${exmName}`);

      console.log(response.data);

 

      setDetails(response.data);

     

     

    } catch (error) {

      console.error(error);

      alert("Error fetching results. Please try again.");

    } finally {

      setIsLoading(false);

    }

  };

 

  return (

    <form onSubmit={handleSubmit}>

      <br />

      <br />

      <label><b>Enter Exam Id:</b></label>

      <input

        type="text"

        placeholder="Exam Name"

        style={{ margin: 10 }}

        value={exmName}

        onChange={(e) => setExm(e.target.value)}

      />

      {formErrors.exmName && <p className="error" style={{color:"red"}}>{formErrors.exmName}</p>}

 

      <label><b>Enter Student Id:</b></label>

      <input

        type="text"

        placeholder="Student ID"

        value={studID}

        onChange={(e) => setStudID(e.target.value)}

      />

      {formErrors.studID &&  <p className="error" style={{color:"red"}} >{formErrors.studID}</p>}

 

      <button type="submit" className="btn btn-primary" disabled={isLoading}>

        {isLoading ? "Loading..." : "Get Result"}

      </button>

      <br />

      <br />

      <table className='table table-striped'>

            <thead>

              <tr>

                <th>Mark Id</th>

                <th>Exam Name</th>

                <th>Student Name</th>

                <th>Student Id</th>

                <th>Student Rollno</th>

                <th>Class Name</th>

                <th>SubJect Name</th>

                <th>Section</th>

                <th>Mark</th>

                <th>Result</th>

              </tr>

            </thead>

            <tbody>

                {

                    markDetails.stdResults.map((r)=>{

                        return(

       

                            <tr key={r.marksId}>

                            <td>{r.marksId}</td>

                            <td>{r.examName}</td>

                            <td>{r.studName}</td>

                            <td>{r.stuId}</td>

                            <td>{r.studRoll}</td>

                            <td>{r.className}</td>

                            <td>{r.subjectName}</td>

                            <td>{r.section}</td>

                            <td>{r.mark}</td>

                            <td style={{color:r.result=="Fail"?"red":"black"}}>{r.result}</td>

                          </tr>

                        )

                       

                    })

                }

              <tr>

                <td colSpan={8}></td>

                <td><label><b>Total:</b><label>{markDetails.totalMarks}</label></label></td>

                <td><label><b>Percentage:</b><label>{markDetails.percentage}</label></label></td>

              </tr>

            </tbody>

          </table>

    </form>

  );

};

 

export default Result1;