// Navbar.js

import React from 'react';

const Navbar = ({ activeTab, onTabChange, onLogout }) => {
  return (
    <nav className="navbar">
      <ul>
        <li className={activeTab === 'home' ? 'active' : ''}>
          <button onClick={() => onTabChange('home')}>Home</button>
        </li>
        <li className={activeTab === 'post' ? 'active' : ''}>
          <button onClick={() => onTabChange('post')}>Post</button>
        </li>
        <li className={activeTab === 'evaluate' ? 'active' : ''}>
          <button onClick={() => onTabChange('evaluate')}>Evaluate</button>
        </li>
        <li className={activeTab === 'logout' ? 'active' : ''}>
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
