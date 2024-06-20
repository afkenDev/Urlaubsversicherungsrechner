import React, { useState } from "react";
import Button from "../components/Button";
import "../App.css";
import { useNavigate } from 'react-router-dom';

function Step3({ globalData, setGlobalData }) {
  const [insuranceOptions, setInsuranceOptions] = useState(globalData.insuranceOptions);
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    const { name, checked } = event.target;
    setInsuranceOptions({
      ...insuranceOptions,
      [name]: checked,
    });
  };

  const onClickWeiter3 = () => {
    setGlobalData((prevData) => ({
      ...prevData,
      insuranceOptions: insuranceOptions,
    }));
    navigate('/schritt4');
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="anzeige">
          <span className="schritt">□ Schritt 1</span>
          <span className="schritt">□ Schritt 2</span>
          <span className="schritt" style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ■ Schritt 3
          </span>
          <span className="schritt">□ Schritt 4</span>
          <span className="schritt">□ Schritt 5</span>
        </div>
        <h1 id="heading" style={{ marginBottom: '1%' }}>Weiterer Schutz</h1>
        <div className="frage">
          <h2>Stornoschutz</h2>
          <p>
            Möchten Sie Stornoschutz hinzufügen? Mit Stornoschutz erhalten Sie
            eine Erstattung der Reisekosten, falls Sie Ihre Reise aufgrund
            unvorhergesehener Ereignisse stornieren müssen.
          </p>
          <input
            type="checkbox"
            name="cancellationProtection"
            checked={insuranceOptions.cancellationProtection}
            onChange={handleOptionChange}
          />
          <h2>Medizinischer Notfallschutz</h2>
          <p>
            Möchten Sie medizinischen Notfallschutz hinzufügen? Der
            medizinische Notfallschutz deckt die Kosten für Arztbesuche,
            Krankenhausaufenthalte und Rücktransporte im Falle einer
            medizinischen Notfallsituation während Ihrer Reise ab.
          </p>
          <input
            type="checkbox"
            name="medicalEmergencyProtection"
            checked={insuranceOptions.medicalEmergencyProtection}
            onChange={handleOptionChange}
          />

          <h2>Gepäckschutz</h2>
          <p>
            Möchten Sie Gepäckschutz hinzufügen? Der Gepäckschutz deckt den
            Verlust, die Beschädigung oder den Diebstahl Ihres Gepäcks während
            Ihrer Reise ab.
          </p>
          <input
            type="checkbox"
            name="luggageProtection"
            checked={insuranceOptions.luggageProtection}
            onChange={handleOptionChange}
          />
        </div>
        <Button onClick={onClickWeiter3} disabled={!Object.values(insuranceOptions).some(Boolean)}>
          Weiter ⭢
        </Button>
      </div>
    </div>
  );
}

export default Step3;
