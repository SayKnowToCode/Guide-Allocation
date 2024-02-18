import React from 'react';
import './Background.css'
const Stars = () => {
  // Create an array to hold the stars
  const starsArray = Array.from({ length: 50 }, (_, index) => (
    <div key={index} className="star"></div>
  ));

  return <div className="stars">{starsArray}</div>;
};

export default Stars;
