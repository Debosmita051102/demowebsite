import React, { useState, useEffect } from 'react';
import './App.css';
// import './DoorAnimation.css'
// import './DoorAnimation.js'

function App() {
  const [doorsOpen, setDoorsOpen] = useState(false);

  useEffect(() => {
    const animationDuration = 1000;
    setTimeout(() => setDoorsOpen(true), animationDuration);
  }, []);

  return (
    <div className="App">
      <div id="particles-js"></div>
      <div className={`wrapper ${doorsOpen ? "doors-open" : ""}`}>
        <div className="door" id="left-door">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="knob" id="left-knob"></div>
        </div>
        <div className="door" id="right-door">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="knob" id="right-knob"></div>
        </div>
        <div className="fashionable-text">
          <h1>MEGATRONIX</h1>
        </div>

        <div className="shooting-stars-container">
          
        </div>
      </div>
    </div>
  );
}

export default App;
