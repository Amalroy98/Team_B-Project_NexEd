import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  let [isButtonClicked, setButtonClick] = useState("");
  let [loginResonse, setResponse] = useState("");
  let navigate=useNavigate();
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
        // navigate('/dashboard', { state: { myProp: 'value' } });
        
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

  return (
    <>
    {
       isButtonClicked?<Dashboard response={loginResonse} path="/dashboard"/>:
    
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p>{error}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}

        <button type="submit">Login</button>
        <div className="button-container">

          </div>
      </form>
    </div>
}
    </>
  );
};

export default Login;
