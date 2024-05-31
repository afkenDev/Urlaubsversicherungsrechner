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
    
  };

  function increment(inputId) {
    var input = document.getElementById(inputId);
    input.value = parseInt(input.value) + 1;
  }

  function decrement(inputId) {
    var input = document.getElementById(inputId);
    if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
    }
  }

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
