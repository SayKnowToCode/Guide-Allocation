import React from 'react';
import { Route,Routes } from 'react-router-dom'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'
import StudentDashboard from './components/StudentDashboard/StudentDashboard'
import FacultyDashboard from './components/FacultyDashboard/FacultyDashboard';
import PreferenceList from './components/PreferenceList/PreferenceList';

// IMP !!!!!!!!!!!!!!!! 
// Need to Create Outlet Route for Navbar

const App = () => {
  return (
  <Routes>
    <Route path='/' element={ <LoginPage />} />
    <Route path='/register' element={ <RegisterPage />} />
    <Route path='/studentDashboard' element={ <StudentDashboard />} />
    <Route path='/facultyDashboard' element={ <FacultyDashboard />} />
    <Route path='/preference' element={ <PreferenceList />} />
  </Routes>
  );
};

export default App;
