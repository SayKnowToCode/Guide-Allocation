// Navbar.js

import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { LuClipboardCheck } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({onTabChange}) => {

  const navigate = useNavigate()

  const onLogout = () => {
    localStorage.removeItem('teamData');
    navigate('/');
  }

  return (
    <nav className="navbar min-w-2/5 absolute top-0 left-0">
      <ul className="flex flex-row">
        <li className=''>
          <button className="mr-6 my-6"  style={{ display: 'flex', alignItems: 'center' }}>
            <FaHome style={{ marginRight: '0.5em' }} /> Home
          </button>
        </li>
        <li className=''>
          <button className="mr-6 my-6 whitespace-nowrap" style={{ display: 'flex', alignItems: 'center' }}>
            <GoProjectRoadmap style={{ marginRight: '0.5em' }} />Submissions
          </button>
        </li>
        <li className=''>
          <Link to='/preference'>
            <button className="mr-6 my-6" style={{ display: 'flex', alignItems: 'center' }}>
              <LuClipboardCheck style={{ marginRight: '0.5em' }} /> Preference List
            </button>
          </Link>
        </li>
        <li className=''>
          <button className="mr-6 my-6" onClick={onLogout} style={{ display: 'flex', alignItems: 'center' }}>
            <FiLogOut style={{ marginRight: '0.5em' }} />Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
