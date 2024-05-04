import React from 'react';
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage'
import StudentDashboard from './components/StudentDashboard/StudentDashboard'
import FacultyDashboard from './components/FacultyDashboard/FacultyDashboard';
import PreferenceList from './components/PreferenceList/PreferenceList';
import Submission from './components/Submission/Submission';
import TeamRegisteration from './components/RegisterPage/TeamRegisteration/TeamRegisteration';
import UserRegisteration from './components/RegisterPage/UserRegisteration/UserRegisteration';
import EvaluationForm from './components/EvaluationForm/EvaluationForm';
import Admin from './components/Admin/Admin';
import Eval from './components/Eval/Eval';
import Eval1 from './components/Eval1/Eval1';
// import PDF from './components/pdfUpload';
import RevealBento from './components/StudentDashboard/UI-Student-Dash/Block';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3500");

// IMP !!!!!!!!!!!!!!!! 
// Need to Create Outlet Route for Navbar

const App = () => {

  return (
    <Routes>


      <Route path='/' element={<LoginPage />} />
      {/* <Route path='/' element={<RevealBento />} /> */}

      <Route path='/register'>
        <Route index element={<RegisterPage />} />
        <Route path='/register/team' element={<TeamRegisteration />} />
        <Route path='/register/user' element={<UserRegisteration />} />
      </Route>


      <Route path='/studentDashboard' element={<StudentDashboard socket={socket} />} />
      <Route path='/facultyDashboard' element={<FacultyDashboard socket={socket} />} />
      <Route path='/evaluation/:teamName/:role' element={<Eval socket={socket} />} />
      <Route path='/preference' element={<PreferenceList socket={socket} />} />
      <Route path='/submission' element={<Submission socket={socket} />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/eval' element={<Eval socket={socket} />} />
      <Route path='/eval1' element={<Eval1 socket={socket} />} />

    </Routes>
  );
};

export default App;
