import React, { useState } from 'react';
import './App.css';
import PlaneImage from './components/plane.js';
import Button from './components/Button';

function App() {
  const [showStartPage, setShowStartPage] = useState(true);
  const [showQuestionPage, setShowQuestionPage] = useState(false);
  const [animatePlane, setAnimatePlane] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [kidCount, setKidCount] = useState(0);
  const [petCount, setPetCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(''); // Neue Variable für Fehlermeldung

  const handleButtonClick = () => {
    if (showStartPage) {
      setAnimatePlane(true);

      setTimeout(() => {
        setShowStartPage(false);
        setShowQuestionPage(true);
      }, 1888);
    }
  };

  const handleAnimationEnd = () => {};

  const increment = (inputId) => {
    let inputValue = parseInt(document.getElementById(inputId).value);
    let newValue;

    if (inputId === 'erwachsene') {
      newValue = inputValue + 1;
      setAdultCount(newValue);
    } else if (inputId === 'kinder') {
      newValue = inputValue + 1;
      setKidCount(newValue);
    } else if (inputId === 'haustiere') {
      newValue = inputValue + 1;
      setPetCount(newValue);
    }

    // Grenze setzten 
    if (newValue > 10) {
      newValue = 10; // Maximalzahl auf 10 setzen
    } else {
    }

    document.getElementById(inputId).value = newValue;
  };

  const decrement = (inputId) => {
    let inputValue = parseInt(document.getElementById(inputId).value);
    let newValue = Math.max(inputValue - 1, 0);

    if (inputId === 'erwachsene') {
      setAdultCount(newValue);
    } else if (inputId === 'kinder') {
      setKidCount(newValue);
    } else if (inputId === 'haustiere') {
      setPetCount(newValue);
    }

    document.getElementById(inputId).value = newValue;
  };

  return (
    <div className="App">
      {showStartPage && (
        <div className="App-header">
          <h1>Urlaubsversicherungsrechner</h1>
          <div className="frage">Wollen Sie sich im Ausland sicher fühlen?</div>
          <div>
            <Button onClick={handleButtonClick}>Start ⭢</Button>
          </div>
        </div>
      )}

      {showQuestionPage && (
        <div className="App-header">
          <div className="anzeige">
            <span className="schritt">■</span>
            <span className="schritt">Schritt 1</span>
            <span className="schritt">□ Schritt 2</span>
            <span className="schritt">□ Schritt 3</span>
            <span className="schritt">□ Schritt 4</span>
            <span className="schritt">□ Schritt 5</span>
          </div>
          <h1>Wie viele Personen wollen Sie mitversichern?</h1>
          <div className="frage">
            Beachten Sie bitte, dass Sie nur Leute von Ihrem Haushalt hinzufügen dürfen. Haustiere sind u. a. Katzen und Hunde.
          </div>
          <div className="form-container">
            {['Erwachsene (17+)', 'Kinder (17-)', 'Haustiere'].map((label, index) => {
              const id = label.split(' ')[0].toLowerCase();
              const countVar =
                id === 'erwachsene'
                  ? adultCount
                  : id === 'kinder'
                  ? kidCount
                  : petCount;
              return (
                <div className="form-group" key={index}>
                  <label htmlFor={id}>{label}</label>
                  <input type="number" id={id} min="0" defaultValue="0" disabled/>
                  <button className="btn" onClick={() => increment(id)}>+</button>
                  <button className="btn" onClick={() => decrement(id)}>-</button>
                </div>
              );
            })}
          </div>
          <Button onClick={handleButtonClick}>Weiter ⭢</Button>
        </div>
        
      )}
      {animatePlane && <PlaneImage onAnimationEnd={handleAnimationEnd} />}
    </div>
  
  );
}

export default App;