// Navbar.js

import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { LuClipboardCheck } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
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
    <div className="navbar min-w-2/5 absolute top-0 left-0">
      <nav className="flex flex-row navbar-anim">
        <div className="mr-6 my-6 " style={{ display: 'flex', alignItems: 'center' }}>
          <FaHome style={{ marginRight: '0.5em' }} /> Home
        </div>
        <div className="mr-6 my-6 whitespace-nowrap" style={{ display: 'flex', alignItems: 'center' }}>
          <GoProjectRoadmap style={{ marginRight: '0.5em' }} />Submissions
        </div>
        <Link to='/preference'>
          <div className="mr-6 my-6" style={{ display: 'flex', alignItems: 'center' }}>
            <LuClipboardCheck style={{ marginRight: '0.5em' }} /> Preference List
          </div>
        </Link>
        <div className="mr-6 my-6" onClick={onLogout} style={{ display: 'flex', alignItems: 'center' }}>
          <FiLogOut style={{ marginRight: '0.5em' }} />Logout
        </div>
        <div class="animation start-home"></div>
      </nav>
    </div>
  );
};

export default Navbar;
