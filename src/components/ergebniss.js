// Ergebniss.js
import React from "react";
import Button from "../components/Button";
import "../App.css";
import { useNavigate } from 'react-router-dom';

function Ergebniss({ globalData }) {
  const navigate = useNavigate();

  const calculatePremium = () => {
    const { adults, kids, pets, startDate, endDate, insuranceOptions, tripType, travelExperience } = globalData;

    let basePrice = 50; // Grundpreis
    let premium = basePrice;

    premium += adults * 20; // Preis pro Erwachsener
    premium += kids * 10;   // Preis pro Kind
    premium += pets * 5;    // Preis pro Haustier

    const tripDuration = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24); // Dauer der Reise in Tagen
    premium += tripDuration * 2; // Preis pro Reisetag

    if (insuranceOptions.cancellationProtection) premium += 30;
    if (insuranceOptions.medicalEmergencyProtection) premium += 50;
    if (insuranceOptions.luggageProtection) premium += 20;

    return premium.toFixed(2); // Rundet auf 2 Dezimalstellen
  };

  const premium = calculatePremium();

  const createMailtoLink = () => {
    const { adults, kids, pets, startDate, endDate, insuranceOptions, tripType, travelExperience } = globalData;
    const subject = "Versicherungsprämie für Ihre Reise";
    const body = `
      Hier sind die Details Ihrer Reiseversicherung:
      
      - Erwachsene: ${adults}
      - Kinder: ${kids}
      - Haustiere: ${pets}
      - Startdatum: ${startDate.toLocaleDateString()}
      - Enddatum: ${endDate.toLocaleDateString()}
      - Stornoschutz: ${insuranceOptions.cancellationProtection ? "Ja" : "Nein"}
      - Medizinischer Notfallschutz: ${insuranceOptions.medicalEmergencyProtection ? "Ja" : "Nein"}
      - Gepäckschutz: ${insuranceOptions.luggageProtection ? "Ja" : "Nein"}
      - Art der Reise: ${tripType}
      - Reiseerfahrung: ${travelExperience}
      
      Gesamtprämie: ${premium} Fr.
    `;

    return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="anzeige">
          <span className="schritt">□ Schritt 1</span>
          <span className="schritt">□ Schritt 2</span>
          <span className="schritt">□ Schritt 3</span>
          <span className="schritt">□ Schritt 4</span>
          <span className="schritt">□ Schritt 5</span>
          <span className="schritt" style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ■ Ergebnis
          </span>
        </div>
        <h1 id="heading">Ihre Versicherungsprämie</h1>
        <div className="frage">
          <p>Hier ist die Zusammenfassung Ihres Versicherungspakets:</p>
          <ul>
            <li>Erwachsene: {globalData.adults}</li>
            <li>Kinder: {globalData.kids}</li>
            <li>Haustiere: {globalData.pets}</li>
            <li>Startdatum: {new Date(globalData.startDate).toLocaleDateString()}</li>
            <li>Enddatum: {new Date(globalData.endDate).toLocaleDateString()}</li>
            <li>Stornoschutz: {globalData.insuranceOptions.cancellationProtection ? "Ja" : "Nein"}</li>
            <li>Medizinischer Notfallschutz: {globalData.insuranceOptions.medicalEmergencyProtection ? "Ja" : "Nein"}</li>
            <li>Gepäckschutz: {globalData.insuranceOptions.luggageProtection ? "Ja" : "Nein"}</li>
            <li>Art der Reise: {globalData.tripType}</li>
            <li>Reiseerfahrung: {globalData.travelExperience}</li>
          </ul>
          <h2>Gesamtprämie: {premium} Fr.</h2>
        </div>
        <Button onClick={() => navigate('/')}>Zurück zum Anfang</Button>
        <Button onClick={() => window.location.href = createMailtoLink()}>Per E-Mail senden</Button>
      </div>
    </div>
  );
}

export default Ergebniss;
