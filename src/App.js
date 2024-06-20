import React, { useState } from "react";
import "./App.css";
import PlaneImage from "./components/plane.js";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Schritt2 from "./components/schritt2.js";
import Button from './components/Button'; // Annahme: Button-Komponente importieren


function App() {
  const [showStartPage, setShowStartPage] = useState(true);
  const [showQuestionPage, setShowQuestionPage] = useState(false);
  const [animatePlane, setAnimatePlane] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [kidCount, setKidCount] = useState(0);
  const [petCount, setPetCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

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

    if (inputId === "erwachsene") {
      newValue = inputValue + 1;
      setAdultCount(newValue);
    } else if (inputId === "kinder") {
      newValue = inputValue + 1;
      setKidCount(newValue);
    } else if (inputId === "haustiere") {
      newValue = inputValue + 1;
      setPetCount(newValue);
    }

    if (newValue > 10) {
      newValue = 10; // Maximalzahl auf 10 setzen
    }

    document.getElementById(inputId).value = newValue;
  };

  const decrement = (inputId) => {
    let inputValue = parseInt(document.getElementById(inputId).value);
    let newValue = Math.max(inputValue - 1, 0);

    if (inputId === "erwachsene") {
      setAdultCount(newValue);
    } else if (inputId === "kinder") {
      setKidCount(newValue);
    } else if (inputId === "haustiere") {
      setPetCount(newValue);
    }

    document.getElementById(inputId).value = newValue;
  };

  const onClickWeiter1 = () => {
    const data = {
      adults: adultCount,
      kids: kidCount,
      pets: petCount,
    };
    window.myGlobalData = data; // mach die data global für andere scripts zu sehen
    console.log("window.myGlobalData:", window.myGlobalData);
    window.location.href = '/schritt2';

  };
  const myGlobalData = window.myGlobalData;

  return (
    <div className="App">
      <div className="App-header">
        {showStartPage && (
          <>
            <h1>Urlaubsversicherungsrechner</h1>
            <div className="frage">
              Wollen Sie sich im Ausland sicher fühlen?
            </div>
            <div>
              <Button onClick={handleButtonClick}>Start ⭢</Button>
            </div>
          </>
        )}

        {showQuestionPage && (
          <>
            <div className="anzeige">
              <span
                className="schritt"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                ■ Schritt 1
              </span>
              <span className="schritt">□ Schritt 2</span>
              <span className="schritt">□ Schritt 3</span>
              <span className="schritt">□ Schritt 4</span>
              <span className="schritt">□ Schritt 5</span>
            </div>
            <h1 id="heading"> Wie viele Personen wollen Sie mitversichern?</h1>

            <div className="frage">
              🛈 Bitte beachten Sie bitte, dass Sie nur Leute von Ihrem Haushalt
              hinzufügen dürfen. Haustiere sind u. a. Katzen und Hunde.
            </div>
            <div className="form-container">
              {["Erwachsene (17+)", "Kinder (17-)", "Haustiere"].map(
                (label, index) => {
                  const id = label.split(" ")[0].toLowerCase();
                  const countVar =
                    id === "erwachsene"
                      ? adultCount
                      : id === "kinder"
                      ? kidCount
                      : petCount;
                  return (
                    <div className="form-group" key={index}>
                      <label htmlFor={id}>{label}</label>
                      <input
                        type="number"
                        id={id}
                        min="0"
                        defaultValue="0"
                        disabled
                      />
                      <button className="btn" onClick={() => increment(id)}>
                        +
                      </button>
                      <button className="btn" onClick={() => decrement(id)}>
                        -
                      </button>
                    </div>
                  );
                }
              )}
            </div>
            <Router>
              <Route exact path="/">
                {myGlobalData ? (
                  <div>Zu Schritt 2 weiterleiten...</div>
                ) : (
                  <Button onClick={onClickWeiter1}>Weiter ⭢</Button>
                )}
              </Route>
              <Route path="/schritt2">
                <Schritt2 myData={myGlobalData} />
              </Route>
            </Router>
          </>
        )}
      </div>
      {animatePlane && <PlaneImage onAnimationEnd={handleAnimationEnd} />}
    </div>
  );
}

export default App;
