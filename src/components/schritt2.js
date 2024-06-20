import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../components/Button";
import "../App.css";
import { useNavigate } from 'react-router-dom';

function Schritt2({ globalData, setGlobalData }) {
  const [startDate, setStartDate] = useState(globalData.startDate);
  const [endDate, setEndDate] = useState(globalData.endDate);
  const maxDate = new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000); // 3 Monate in Millisekunden
  const navigate = useNavigate();

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const validateDates = (start, end) => {
    return start && end && end <= maxDate && (end - start) <= 90 * 24 * 60 * 60 * 1000;
  };

  const onClickWeiter2 = () => {
    setGlobalData((prevData) => ({
      ...prevData,
      startDate: startDate,
      endDate: endDate,
    }));
    navigate('/schritt3');
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="anzeige">
          <span className="schritt">□ Schritt 1</span>
          <span
            className="schritt"
            style={{ fontWeight: "bold", textDecoration: "underline" }}
          >
            ■ Schritt 2
          </span>
          <span className="schritt">□ Schritt 3</span>
          <span className="schritt">□ Schritt 4</span>
          <span className="schritt">□ Schritt 5</span>
        </div>
        <h1>Wie lange reisen Sie?</h1>
        <div className="frage">
          Wählen Sie den Tag der Ankunft bis zum Tag der Abreise. Sie können
          maximal 3 Monate Reisedauer versichern, längere Reisen können nicht
          versichert werden.
        </div>
        <div className="datumsauswahl">
          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            maxDate={maxDate}
            dateFormat="dd.MM.yyyy"
            placeholderText="Bitte wählen Sie einen Zeitraum"
            className="custom-datepicker"
          />
        </div>
        <Button onClick={onClickWeiter2} disabled={!validateDates(startDate, endDate)}>
          Weiter ⭢
        </Button>
      </div>
    </div>
  );
}

export default Schritt2;
