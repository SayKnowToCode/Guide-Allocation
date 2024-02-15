// Navbar.js

import React from 'react';
import "../../output.css"
import './Navbar.css'; // Import CSS file for styling

const Navbar = ({ activeTab, onTabChange, onLogout }) => {
  return (
    <nav className="navbar">
      <ul className="flex justify-end w-full px-4 py-6 absolute top-0 right-0 bg-gray-800 text-white">
       {/* <li>
          <h1 className="text-lg">Student Dashboard</h1>
        </li>  */}
        <li className={activeTab === 'home' ? 'active' : ''}>
          <button className="mr-6 hover:text-gray-300" onClick={() => onTabChange('home')}>Home</button>
        </li>
        <li className={activeTab === 'post' ? 'active' : ''}>
          <button className="mr-6 hover:text-gray-300" onClick={() => onTabChange('post')}>Post</button>
        </li>
        <li className={activeTab === 'evaluate' ? 'active' : ''}>
          <button className="mr-6 hover:text-gray-300" onClick={() => onTabChange('evaluate')}>Evaluate</button>
        </li>
        <li className={activeTab === 'logout' ? 'active' : ''}>
          <button className="mr-6 hover:text-gray-300" onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
