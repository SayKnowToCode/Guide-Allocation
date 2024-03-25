import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'
import StudentDashboard from './components/StudentDashboard/StudentDashboard'
import FacultyDashboard from './components/FacultyDashboard/FacultyDashboard';
import PreferenceList from './components/PreferenceList/PreferenceList';
import TeamRegisteration from './components/RegisterPage/TeamRegisteration/TeamRegisteration';
import UserRegisteration from './components/RegisterPage/UserRegisteration/UserRegisteration';

import io from 'socket.io-client';
const socket = io.connect("http://localhost:3500");

// IMP !!!!!!!!!!!!!!!! 
// Need to Create Outlet Route for Navbar

const App = () => {

  const [faculties, setFaculties] = useState([])

  return (
    <Routes>
      <Route path='/' element={<LoginPage setFaculties={setFaculties} />} />

      <Route path='/register'>
        <Route index element={<RegisterPage />} />
        <Route path='/register/team' element={<TeamRegisteration />} />
        <Route path='/register/user' element={<UserRegisteration />} />
      </Route>


      <Route path='/studentDashboard' element={<StudentDashboard />} />
      <Route path='/facultyDashboard' element={<FacultyDashboard socket={socket} faculties={faculties} setFaculties={setFaculties} />} />
      <Route path='/preference' element={<PreferenceList socket={socket} />} />
    </Routes>
  );
};

export default App;
