// src/components/Register.js
import React from 'react';
import './Register.css'; // Import your CSS file for styling

const Register = () => {
  return (
    <div className="register-container">
      <h2 className="register-header">Register</h2>
      <form className="register-form">
        <div>
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Register</button>
      </form>
      Already register?<a href='/login'>Login</a>
    </div>
  );
};

export default Register;
