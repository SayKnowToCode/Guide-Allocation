import React from 'react';
import './PhaseList.css';
const PhaseList = () => {
  return (
    <div className='phase-container'>
      <div className='phase-item phase-highlight shadow'>
        Phase 1
      </div>
      <div className='phase-item phase-highlight shadow'>
        Phase 2
      </div>
      <div className='phase-item phase-highlight shadow'>
        Phase 3
      </div>
    </div>
  );
};

export default PhaseList;

