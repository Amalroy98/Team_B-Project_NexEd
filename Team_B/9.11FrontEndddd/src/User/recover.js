
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
function Verify(){

    //const intialValues = {  email: "", phone: "" };
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({  email: "", phone: "" });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    
    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
      };

      const verifyUser = async (event) => {
        event.preventDefault();
        try {
          console.log(formValues);
          const response = await axios.post(
            "http://localhost:5066/api/User/Recover/",formValues
          );
     
          if (response.status !== 200) {
            toast.error("Email or phone number not verified");
          }
          else{
            navigate("/updatePass");
          }
     
          setIsEmailValid(true);
        } catch (error) {
          console.error("Error:", error);
          toast.error("Email or phone number not verified");
        }
      };
     
      
     
    //    useEffect(() => {
    //      console.log(formErrors);
    //      if (Object.keys(formErrors).length === 0 && isSubmit) {
    //       console.log(formErrors);
    //     }

    //  }, []);
    
      
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormErrors(validate(formValues));
    //     setIsSubmit(true);
    //  }
    
      
    //   const validate = (values) => {
    //         const errors = {} ;
            
          
    //           if (!values.email) {
    //             errors.email = "Email is required!";
                
    //           } 

    //          if (!values.phone) {
    //             errors.phone = "Phone no is required!";
    //           }

             

    //           return errors;
      
    //   };
      
              
  
  return (
    <>
      <div className="container">
        <ToastContainer />
        <form onSubmit={verifyUser}>
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
              navigate("/updatePass")
            ) : (
              <p></p>
            )}   */}
          <h1>User Verification</h1>
          <div className="ui-divider"></div>
          <div className="ui-form">
            <div className="field">
              <label>Email  </label>
              <input
                type="text" 
                name="email"
                placeholder="email"
                 value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <label>Phone </label>
              <input
                type="text"
                name="phone"
                placeholder="Phone  "
                value={formValues.phone}
                onChange={handleChange}
              />

            </div>
            <p>{formErrors.phone}</p>
            
            <button onClick={verifyUser} className="fbtn">
              
              Verify
              
            </button>
            
          </div>
        </form>
      </div>
      
    </>
  );
}

export default Verify;