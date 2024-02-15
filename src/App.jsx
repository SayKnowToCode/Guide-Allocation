import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers';
import AbstractForm from './components/AbstractForm';
import PreferenceList from './components/PreferenceList';
import EvaluationResults from './components/EvaluationResults';

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Team Member 1' },
    { id: 2, name: 'Team Member 2' },
    { id: 3, name: 'Team Leader', isLeader: true },
  ]);

  const [abstract, setAbstract] = useState('');
  const [professorsPreference, setProfessorsPreference] = useState([]);
  const [evaluationResults, setEvaluationResults] = useState('');

  const handlePostAbstract = (newAbstract) => {
    setAbstract(newAbstract);
  };

  const handleEditAbstract = (editedAbstract) => {
    setAbstract(editedAbstract);
  };

  const handleSetProfessorsPreference = (preferenceList) => {
    setProfessorsPreference(preferenceList);
  };

  const handleSetEvaluationResults = (results) => {
    setEvaluationResults(results);
  };

  return (
    <div className="app">
      <h1>Student Dashboard</h1>
      <TeamMembers teamMembers={teamMembers} />
      <AbstractForm
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
    </div>
  );
};

export default App;
