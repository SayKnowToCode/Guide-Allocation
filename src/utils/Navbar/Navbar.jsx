// Navbar.js

import React from 'react';
import "../../output.css"
import './Navbar.css'; // Import CSS file for styling

const Navbar = ({ activeTab, onTabChange, onLogout }) => {
  return (
    <nav className="navbar flex flex-col justify-start min-w-2/5 py-20 px-10 absolute top-0 left-0 text-white">
      <ul className="flex flex-col gap-16 ">
       {/* <li>
          <h1 className="text-lg">Student Dashboard</h1>
        </li>  */}
        <li className={activeTab === 'home' ? 'active' : ''}>
          <button className="mr-6  text-black hover:text-gray-300" onClick={() => onTabChange('home')}>Home</button>
        </li>
        <li className={activeTab === 'post' ? 'active' : ''}>
          <button className="mr-6  text-black hover:text-gray-300" onClick={() => onTabChange('post')}>Post</button>
        </li>
        <li className={activeTab === 'evaluate' ? 'active' : ''}>
          <button className="mr-6  text-black hover:text-gray-300" onClick={() => onTabChange('evaluate')}>Evaluate</button>
        </li>
        <li className={activeTab === 'logout' ? 'active' : ''}>
          <button className="mr-6 text-black hover:text-gray-300" onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
