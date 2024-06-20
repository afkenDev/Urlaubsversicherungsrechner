import React, { useState } from "react";
import Button from "../components/Button";
import "../App.css";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css"; 
import { useNavigate } from 'react-router-dom';

function Step5({ globalData, setGlobalData }) {
  const [travelExperience, setTravelExperience] = useState(globalData.travelExperience);
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setTravelExperience(option.value);
  };

  const onClickWeiter5 = () => {
    setGlobalData((prevData) => ({
      ...prevData,
      travelExperience: travelExperience,
    }));
    navigate('/ergebniss');
  };
  

  const travelExperiences = [
    { value: "Keine Erfahrung", label: "Keine Erfahrung" },
    { value: "Gelegentlich", label: "Gelegentlich" },
    { value: "Häufig", label: "Häufig" },
    { value: "Sehr häufig", label: "Sehr häufig" },
  ];

  return (
    <div className="App">
      <div className="App-header">
        <div className="anzeige">
          <span className="schritt">□ Schritt 1</span>
          <span className="schritt">□ Schritt 2</span>
          <span className="schritt">□ Schritt 3</span>
          <span className="schritt">□ Schritt 4</span>
          <span className="schritt" style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ■ Schritt 5
          </span>
        </div>
        <h1 id="heading">Wie viel Reiseerfahrung haben Sie?</h1>
        <div className="frage">
          <p>
            Wie viel Reiseerfahrung haben Sie? Diese Information hilft uns, die
            relevantesten Versicherungsoptionen für Sie zu empfehlen.
          </p>
          <div>
            <ReactDropdown
              options={travelExperiences}
              onChange={handleOptionChange}
              value={travelExperience}
              placeholder="Reiseerfahrung hier auswählen"
              menuClassName="dropdown-menu"
            />
          </div>
        </div>
        <Button onClick={onClickWeiter5} disabled={!travelExperience}>
          Weiter ⭢
        </Button>
      </div>
    </div>
  );
}

export default Step5;
