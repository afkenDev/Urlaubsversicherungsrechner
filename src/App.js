import React, { useState } from 'react';
import './App.css';
import PlaneImage from './components/plane.js';
import Button from './components/Button';

function App() {
  const [animatePlane, setAnimatePlane] = useState(false);

  const handleButtonClick = () => {
    setAnimatePlane(true);
  };

  const handleAnimationEnd = () => {
    // was soll dann passieren
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="header logo">Urlaubsversicherungsrechner</h1>
        <div className="steps"></div>
        <div className="frage">
          Wollen Sie sich im Ausland sicher fühlen?
        </div>
        <Button onClick={handleButtonClick}>Start ⭢</Button>
        {animatePlane && <PlaneImage onAnimationEnd={handleAnimationEnd} />}
      </div>
    </div>
  );
}

export default App;
