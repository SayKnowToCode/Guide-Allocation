import React from 'react';
import './facultydisplay.css'
const facultydisplay = () => {
  return (
    <div className="single-row-container">
      <div className="sr-no">Sr.No</div>
      <div className="faculty-name">facultyname</div>
      <div className="designation">designation</div>
      <button className="request-button">Request</button>
    </div>
  );
}

export default facultydisplay;