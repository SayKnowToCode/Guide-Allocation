// EvaluationForm.js

import React, { useState } from 'react';
import './EvaluationForm.css';

const EvaluationForm = ({ onSubmit }) => {
  const [marksPhase1, setMarksPhase1] = useState('');
  const [marksPhase2, setMarksPhase2] = useState('');
  const [marksPhase3, setMarksPhase3] = useState('');
  const [teamName, setTeamName] = useState('');

  const handleSubmit = () => {
    // Perform any validation if needed

    // Package the evaluation data and pass it to the parent component
    const evaluationData = {
      marksPhase1: parseInt(marksPhase1, 10),
      marksPhase2: parseInt(marksPhase2, 10),
      marksPhase3: parseInt(marksPhase3, 10),
      teamName,
    };

    onSubmit(evaluationData);
  };

  return (
    <div className="evaluation-form">
      <h2>Evaluation Form</h2>
      <label>
        Marks for Phase 1:
        <input
          type="number"
          value={marksPhase1}
          onChange={(e) => setMarksPhase1(e.target.value)}
        />
      </label>
      <label>
        Marks for Phase 2:
        <input
          type="number"
          value={marksPhase2}
          onChange={(e) => setMarksPhase2(e.target.value)}
        />
      </label>
      <label>
        Marks for Phase 3:
        <input
          type="number"
          value={marksPhase3}
          onChange={(e) => setMarksPhase3(e.target.value)}
        />
      </label>
      <label>
        Team Name:
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit Evaluation</button>
    </div>
  );
};

export default EvaluationForm;
