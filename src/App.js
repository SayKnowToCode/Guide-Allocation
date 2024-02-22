import React from 'react';
import { Route,Routes } from 'react-router-dom'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'
import StudentDashboard from './components/StudentDashboard/StudentDashboard'
import FacultyDashboard from './components/FacultyDashboard/FacultyDashboard';
import PreferenceList from './components/PreferenceList/PreferenceList';
import { useState } from 'react';

// IMP !!!!!!!!!!!!!!!! 
// Need to Create Outlet Route for Navbar

const App = () => {

  const [faculties,setFaculties] = useState([])

  return (
  <Routes>
    <Route path='/' element={ <LoginPage setFaculties={setFaculties}/>} />
    <Route path='/register' element={ <RegisterPage />} />
    <Route path='/studentDashboard' element={ <StudentDashboard />} />
    <Route path='/facultyDashboard' element={ <FacultyDashboard faculties={faculties} setFaculties={setFaculties} />} />
    <Route path='/preference' element={ <PreferenceList />} />
  </Routes>
  );
};

export default App;
