import React from 'react';
import { Route,Routes } from 'react-router-dom'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'
import StudentDashboard from './components/StudentDashboard/StudentDashboard'

const App = () => {
  return (
  <Routes>
    <Route path='/' element={ <LoginPage />} />
    <Route path='/register' element={ <RegisterPage />} />
    <Route path='/studentDashboard' element={ <StudentDashboard />} />
  </Routes>
  );
};

export default App;
