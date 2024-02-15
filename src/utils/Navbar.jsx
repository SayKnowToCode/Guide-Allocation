// App.js

import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from '../components/TeamMembers';
import Post from '../components/AbstractForm';
import Evaluate from '../components/EvaluationForm';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    // Perform logout actions
    console.log('Logout');
  };

  return (
    <div className="app">
      <Navbar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onLogout={handleLogout}
      />

      {/* Content based on the active tab */}
      {activeTab === 'home' && <Home />}
      {activeTab === 'post' && <Post />}
      {activeTab === 'evaluate' && <Evaluate />}
    </div>
  );
};

export default App;
