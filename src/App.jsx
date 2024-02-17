import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers/TeamMembers';
import "./App.css"
// import AbstractForm from './components/AbstractForm';
// import PreferenceList from './components/PreferenceList';
// import EvaluationResults from './components/EvaluationResults';
// import EvaluationForm from './components/EvaluationForm';
import Navbar from './utils/Navbar/Navbar'

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Member 1' },
    { id: 2, name: 'Member 2' },
    { id: 3, name: 'Team Leader', isLeader: true },
  ]);

  // const [abstract, setAbstract] = useState('');
  // const [professorsPreference, setProfessorsPreference] = useState([]);
  // const [evaluationResults, setEvaluationResults] = useState('');

  // const handlePostAbstract = (newAbstract) => {
  //   setAbstract(newAbstract);
  // };

  // const handleEditAbstract = (editedAbstract) => {
  //   setAbstract(editedAbstract);
  // };

  // const handleSetProfessorsPreference = (preferenceList) => {
  //   setProfessorsPreference(preferenceList);
  // };

  // const handleSetEvaluationResults = (results) => {
  //   setEvaluationResults(results);
  // };

  return (
    <div className="app relative z-10">
      {/* <div className="flex-grow">
      <h1 className="z-10 relative text-3xl ml-8 py-3 text-blue">Student Dashboard</h1>
      </div> */}
      <h1 className="Greet z-10 relative text-3xl py-3 ml-96 text-blue">Welcome to Guest allocator</h1>
      <div className="flex items-center">
      <nav className='mr-8'>
        <Navbar />
      </nav>
      </div>
      <TeamMembers teamMembers={teamMembers} />
      {/* <AbstractForm
        isLeader={teamMembers.find((member) => member.isLeader)}
        onPostAbstract={handlePostAbstract}
        onEditAbstract={handleEditAbstract}
      />
      <PreferenceList
        isLeader={teamMembers.find((member) => member.isLeader)}
        onSelectPreference={handleSetProfessorsPreference}
      />
      <EvaluationResults
        evaluationResults={evaluationResults}
      />

      <EvaluationForm /> */}
    </div>
  );
};

export default App;
