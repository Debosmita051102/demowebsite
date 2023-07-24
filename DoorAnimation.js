import React, { useState, useEffect } from 'react';
import './DoorAnimation.css';

const DoorAnimation = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    const animationDuration = 1000;
    setTimeout(() => setDoorsOpen(true), animationDuration);
  }, []);

  return (
    <div className={`door-animation ${doorsOpen ? "doors-open" : ""}`}>
      <div className={`left-door door ${doorsOpen ? "left-door-open" : ""}`}></div>
      <div className={`right-door door ${doorsOpen ? "right-door-open" : ""}`}></div>
    </div>
  );
};

export default DoorAnimation;
