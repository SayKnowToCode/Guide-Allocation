// PreferenceList.js

import React, { useState } from 'react';

const PreferenceList = ({ isLeader, onSelectPreference }) => {
  const [professorsPreference, setProfessorsPreference] = useState(['Reagef','aefaefae']);
  const [professorName,setProfessorName] = useState('');

  const handleSelectPreference = () => {
    setProfessorsPreference([...professorsPreference,professorName])
  };

  return (
    <div className="preference-list">
      <h2>Professors' Preference List</h2>
      <ul>
        {professorsPreference.map((professor, index) => (
          <li key={index}>{professor}</li>
        ))}
      </ul>
      {isLeader && 
      (
        <>
          <input
            type="text"
            value={professorName}
            onChange={(e) => setProfessorName(e.target.value)}
            placeholder="Enter professors' names"
          />
          <button onClick={handleSelectPreference}>Select Preference</button>
        </>
      )}
    </div>
  );
};

export default PreferenceList;
