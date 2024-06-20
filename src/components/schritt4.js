import React, { useState } from "react";
import Button from "../components/Button";
import "../App.css";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css"; 
import { useNavigate } from 'react-router-dom';

function Step4({ globalData, setGlobalData }) {
  const [tripType, setTripType] = useState(globalData.tripType);
  const navigate = useNavigate();

  const handleTripTypeChange = (selectedOption) => {
    setTripType(selectedOption.value);
  };

  const onClickWeiter4 = () => {
    setGlobalData((prevData) => ({
      ...prevData,
      tripType: tripType,
    }));
    navigate('/schritt5');
  };

  const tripTypes = [
    { value: "Städtetrip", label: "Städtetrip" },
    { value: "Strandurlaub", label: "Strandurlaub" },
    { value: "Aktivurlaub", label: "Aktivurlaub" },
    { value: "Kreuzfahrt", label: "Kreuzfahrt" },
    { value: "Arbeitsplatzreise", label: "Arbeitsplatzreise" },
    { value: "Zweckreise", label: "Zweckreise" }
  ];

  return (
    <div className="App">
      <div className="App-header">
        <div className="anzeige">
          <span className="schritt">□ Schritt 1</span>
          <span className="schritt">□ Schritt 2</span>
          <span className="schritt">□ Schritt 3</span>
          <span className="schritt" style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ■ Schritt 4
          </span>
          <span className="schritt">□ Schritt 5</span>
        </div>
        <h1 id="heading">Welche Art der Reise?</h1>
        <div className="frage">
          <p>
            Wählen Sie die Art Ihrer Reise aus, um die relevantesten
            Versicherungsoptionen zu erhalten.
          </p>
          <div>
            <label id="ka">Art der Reise:</label>
            <ReactDropdown
              options={tripTypes}
              onChange={handleTripTypeChange}
              value={tripType}
              placeholder="Art der Reise hier auswählen"
              menuClassName="dropdown-menu"
            />
          </div>
        </div>
        <Button onClick={onClickWeiter4} disabled={!tripType}>
          Weiter ⭢
        </Button>
      </div>
    </div>
  );
}

export default Step4;
