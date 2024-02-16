// Navbar.js

import React from 'react';
import "../../output.css"
import './Navbar.css'; // Import CSS file for styling

const Navbar = ({ activeTab, onTabChange, onLogout }) => {
  return (
    <nav className="navbar flex flex-col items-start justify-start min-w-2/5 absolute top-0 left-0 text-white">
      <ul className="flex flex-col">
        <li>
          <h1 className="Dash z-10 relative text-3xl mt-5 ml-2 py-3 text-blue font-bold">Student Dashboard</h1>
        </li>
        <li className={activeTab === 'home' ? 'active' : ''}>
          <button className="mr-6 my-6 text-white" onClick={() => onTabChange('home')}>Home</button>
        </li>
        <li className={activeTab === 'post' ? 'active' : ''}>
          <button className="mr-6 my-6 text-white" onClick={() => onTabChange('post')}>Post</button>
        </li>
        <li className={activeTab === 'evaluate' ? 'active' : ''}>
          <button className="mr-6 my-6 text-white" onClick={() => onTabChange('evaluate')}>Evaluate</button>
        </li>
        <li className={activeTab === 'logout' ? 'active' : ''}>
          <button className="mr-6 my-6 text-white" onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
