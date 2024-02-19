// Login.js
import React from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const Login = () => {
  return (
    <div className="login-container ">
      <h2 className='font-bold text-2xl text-blue-800'>LogIn</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <button className="forgot-password">Forgot Password</button>
    </div>
  );
};

export default Login;
