// AbstractForm.js

import React, { useState } from 'react';

const AbstractForm = ({ isLeader, onPostAbstract, onEditAbstract }) => {
  const [abstract, setAbstract] = useState('');

  const handlePostAbstract = () => {
    if (isLeader) {
      onPostAbstract(abstract);
    }
  };

  const handleEditAbstract = () => {
    if (isLeader) {
      onEditAbstract(abstract);
    }
  };

  return (
    <div className="abstract-form">
      <h2>Abstract Form</h2>
      <textarea
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
        placeholder="Write your abstract here..."
      />
      {isLeader && (
        <>
          <button onClick={handlePostAbstract}>Post Abstract</button>
          <button onClick={handleEditAbstract}>Edit Abstract</button>
        </>
      )}
    </div>
  );
};

export default AbstractForm;
