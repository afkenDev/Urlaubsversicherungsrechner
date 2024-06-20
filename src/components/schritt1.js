import React, { useState } from "react";
import "../App.css";
import PlaneImage from "../components/plane";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

function Home({ setGlobalData }) {
  const [showStartPage, setShowStartPage] = useState(true);
  const [showQuestionPage, setShowQuestionPage] = useState(false);
  const [animatePlane, setAnimatePlane] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [kidCount, setKidCount] = useState(0);
  const [petCount, setPetCount] = useState(0);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (showStartPage) {
      setAnimatePlane(true);
      setTimeout(() => {
        setShowStartPage(false);
        setShowQuestionPage(true);
      }, 1888);
    }
  };

  const increment = (setter, currentCount) => {
    setter(currentCount < 10 ? currentCount + 1 : 10);
  };

  const decrement = (setter, currentCount) => {
    setter(currentCount > 0 ? currentCount - 1 : 0);
  };

  const onClickWeiter1 = () => {
    setGlobalData((prevData) => ({
      ...prevData,
      adults: adultCount,
      kids: kidCount,
      pets: petCount,
    }));
    navigate('/schritt2');
  };

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
            <h1 id="heading">Wie viele Personen wollen Sie mitversichern?</h1>
            <div className="frage">
              🛈 Bitte beachten Sie, dass Sie nur Leute aus Ihrem Haushalt hinzufügen dürfen. Haustiere sind u. a. Katzen und Hunde.
            </div>
            <div className="form-container">
              {[
                { label: "Erwachsene (17+)", count: adultCount, setter: setAdultCount },
                { label: "Kinder (17-)", count: kidCount, setter: setKidCount },
                { label: "Haustiere", count: petCount, setter: setPetCount }
              ].map(({ label, count, setter }, index) => (
                <div className="form-group" key={index}>
                  <label>{label}</label>
                  <input type="number" value={count} readOnly />
                  <button className="btn" onClick={() => increment(setter, count)}>+</button>
                  <button className="btn" onClick={() => decrement(setter, count)}>-</button>
                </div>
              ))}
            </div>
            <Button onClick={onClickWeiter1}>Weiter ⭢</Button>
          </>
        )}
      </div>
      {animatePlane && <PlaneImage onAnimationEnd={() => setAnimatePlane(false)} />}
    </div>
  );
}

export default Home;
