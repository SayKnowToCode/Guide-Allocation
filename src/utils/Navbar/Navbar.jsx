import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ onTabChange }) => {

  const navigate = useNavigate()

  const onLogout = () => {
    localStorage.removeItem('teamData');
    navigate('/');
  }

  return (
    <header className="head-area">
      <div className="header-container">
        <div class="logo-nav">
          <h1><span>Student</span>Dashboard</h1>
        </div>
        <div className="menu">
          <div className="menu1">
            <div className="Active">
              <p>Home</p>
            </div>
            <div className="">
              <p>Submissions</p>
            </div>
            <Link to='/preference'>
              <div className="">
                <p>Preference List</p>
              </div>
            </Link>
            <div className="">
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;