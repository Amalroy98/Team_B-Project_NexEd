import React, { useState } from 'react';
import axios from 'axios';

// const API_BASE_URL = "http://localhost:5066/swagger/index.html";

function Register() {
  const [registerForm, setRegisterForm] = useState({userId:'', username: '', email: '' , password: '',mobile:'',role:''});
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loggedInUser, setLoggedInUser] = useState();
  const [error, setError] = useState('');

  const handleRegister =(e) => {
    e.preventDefault();
    axios.post("http://localhost:5066/api/User/Register", registerForm)
    .then ((response)=>{
        console.log("Registration succeddful",response.data);
        setError('');
    })
    .catch((error)=>{
        console.error('Registration failed:',error.response.data);
        setError(error.response.data);
    });
  };


return (
    <>
      <div className="Container">
        <h1>User Registration</h1>
        <form onSubmit={handleRegister}>
          <table className="table">
            <tbody>
              <tr>
                <td>UserId</td>
                <td>
                  <input
                    type="text"
                    placeholder="userId"
                     required title="ID starts with alphabets"
                    value={registerForm.userId}
                    onChange={(e) => setRegisterForm({ ...registerForm, userId: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>Username</td>
                <td>
                  <input
                    type="text"
                    placeholder="Username"
                    // pattern="[A-Z][a-z]"
                     required title="Enter only Alphanumerics"
                    value={registerForm.username}
                    onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="email"
                    placeholder="Email"
                      required title="Please fill correct manner"
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input
                    type="password"
                    placeholder="Password"
                      pattern="[A-z][a-z][0-9][@_/]"required title="Invalid Password Format"
                    value={registerForm.password}
                    onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile</td>
                <td>
                  <input
                    type="text"
                    placeholder="Mobile"
                     pattern="[6789]{1}[0-9]{9}" required title="Invalid Mobile no"
                    value={registerForm.mobile}
                    onChange={(e) => setRegisterForm({ ...registerForm, mobile: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>Role</td>
                <td>
                  <input
                    type="text"
                    placeholder="Role"
                    value={registerForm.role}
                    onChange={(e) => setRegisterForm({ ...registerForm, role: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button type="submit">Register</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
  
        {loggedInUser && (
          <div>
            <h2>Welcome, {loggedInUser.email}!</h2>
            <p>Role: {loggedInUser.role}</p>
            <p>Token: {loggedInUser.token}</p>
          </div>
        )}
  
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  );
  

}
  

export default Register;
