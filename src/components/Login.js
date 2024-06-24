// src/components/Login.js
import React from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form className="login-form">
        <div>
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
     Not Registed? <a href='/register' className='new'>Create new account</a>
    </div>
  );
};

export default Login;
