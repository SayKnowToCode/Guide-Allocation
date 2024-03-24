import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './RegisterPage.css'
function RegisterPage() {
  return (
    <div className='Register-Container'>
      <div className="reg-div">
      <h1 className='reg-head'>Register Here</h1>
      <div className='Reg-Buttons'>
      <Link to="/register/team">
        <button type="button" className='btnreg border-animation'>Team Registeration</button>
      </Link>
      <Link to="/register/user">
        <button type="button" className='btnreg border-animation'>User Registeration</button>
      </Link>
      </div>
      <Outlet />
      </div>
      <ul class="bg1-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
    </div>
  );
}

export default RegisterPage;