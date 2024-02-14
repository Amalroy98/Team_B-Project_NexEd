import React, { useState } from "react";
import "./login_style.css";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import Header from "../Header/Header";
import axios from "axios";
import Dashboard from "../../User/Dashboard";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [showoader, setShowLoader] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  let [isButtonClicked, setButtonClick] = useState("");
  let [loginResonse, setResponse] = useState("");
  
  // User Login info
  const database = [
    {
      username: "admin",
      password: "admin"
    }
  ];

  let navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    if (!email) {
      setError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      isValid = false;
    }
    if (!password || password.length <  8) {
      setError('Password must be at least  8 characters long');
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:5066/api/User/Login", {
          Email: email,
          Password: password
        });
        setButtonClick(true)
        // Handle successful login here (e.g., save token, navigate to home)
         navigate('/dashboard', { state: { myProp: response.data } });
        
        // if(response.data.role=="Admin"){
          //   navigate("/GetAssignById")
          // }
          // else if(response.data.role=="Student"){
            //   navigate("/Register")
            // }
            setResponse(response)
            console.log(loginResonse);
          
       

      } catch (err) {
        setError('Login failed');
      }
    

    
    
    }
  };

  // const handleSubmit = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();
  //   setShowLoader(true);

  //   var { uname, pass } = document.forms[0];

  //   // Find user login info
  //   const userData = database.find((user) => user.username === uname.value);

  //   // Compare user info
  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages({ name: "pass", message: errors.pass });
  //       setShowLoader(false);
  //     } else {
  //       setTimeout(() => {
  //         onLoggedin(userData.id);
  //       }, 2000);
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "uname", message: errors.uname });
  //     setShowLoader(false);
  //   }
  // };

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  // const renderErrorMessage = (name) => name === error.name && <div className="error">{error.message}</div>;

  const renderForm = (
    <>
      {
       isButtonClicked?<Dashboard response={loginResonse}/>:
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>email </label>
          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
         {error && <p>{error}</p>}
        </div>
        <div className="input-container">
          <label>Password </label>
           <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
            {error && <p>{error}</p>}
        </div>
        {!showoader ? (
          <div className="button-container">
            <button type="submit">Login</button>
          </div>
        ) : null}
          <div className="button-container">
          <a href="">forgot password</a>
          </div>
          <button type="submit" onClick={()=>{navigate("/register")}}>Sign Up</button>
      </form>
      
    </div>
}
    </>
  );

  return (
    <div>
      <Header />
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {renderForm}
          {showoader ? <InfinitySpin width="200" color="#4fa94d" /> : null}
        </div>
      </div>
    </div>
  );
}

export default Login;
