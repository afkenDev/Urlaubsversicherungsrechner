import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./components/Button";

function Schritt2({ myData }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [maxDate, setMaxDate] = useState(
    new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000)
  ); // 3 Monate in Millisekunden
  const data = myData;
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const validateDate = (date) => {
    return date <= maxDate;
  };

  const onClickWeiter2 = () => {
    // was passiert
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="anzeige">
          <span className="schritt">□ Schritt 1</span>
          <span
            className="schritt"
            style={{ fontWeight: "bold", textDecoration: "underline" }}>
            ■ Schritt 2
          </span>
          <span className="schritt">□ Schritt 3</span>
          <span className="schritt">□ Schritt 4</span>
          <span className="schritt">□ Schritt 5</span>
        </div>
        <h1>Wie lange reisen sie?</h1>
        <div className="frage">
          Wählen Sie den Tag der Ankunft bis zum Tag der Abreise mit. Sie können
          maximal 3 Monate Reisedauer versichern werden, längere Reisen können
          nicht versichert werden.
        </div>
        <div className="datumsauswahl">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            maxDate={maxDate}
            dateFormat="dd.MM.yyyy"
            placeholderText="Bitte wählen sie ein Datum"
            className="custom-datepicker"
          />
        </div>
        <Button onClick={onClickWeiter2} disabled={!validateDate(selectedDate)}>
          Weiter ⭢
        </Button>
      </div>
    </div>
  );
}

export default Schritt2;
