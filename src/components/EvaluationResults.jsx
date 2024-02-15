// EvaluationResults.js

import React from 'react';

const EvaluationResults = ({ evaluationResults }) => {
  return (
    <div className="evaluation-results">
      <h2>Evaluation Results</h2>
      <p>{evaluationResults}</p>
    </div>
  );
};

export default EvaluationResults;
