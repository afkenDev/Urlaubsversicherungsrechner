import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './components/schritt1';
import About from './components/schritt2';
import Step3 from './components/schritt3';
import Step4 from './components/schritt4';
import Step5 from './components/schritt5';
import Ergebniss from './components/ergebniss';

const App = () => {
  const [globalData, setGlobalData] = useState({ //Globale Variable über alles
    adults: 0,
    kids: 0,
    pets: 0,
    startDate: null,
    endDate: null,
    insuranceOptions: {
      cancellationProtection: false,
      medicalEmergencyProtection: false,
      luggageProtection: false,
    },
    tripType: "",
    travelExperience: ""
  });

  return (
    <Routes>
      <Route path="/" element={<Home setGlobalData={setGlobalData} />} />
      <Route path="/schritt2" element={<About globalData={globalData} setGlobalData={setGlobalData} />} />
      <Route path="/schritt3" element={<Step3 globalData={globalData} setGlobalData={setGlobalData} />} />
      <Route path="/schritt4" element={<Step4 globalData={globalData} setGlobalData={setGlobalData} />} />
      <Route path="/schritt5" element={<Step5 globalData={globalData} setGlobalData={setGlobalData} />} />
      <Route path="/ergebniss" element={<Ergebniss globalData={globalData}/>} />
    </Routes>
  );
};

export default App;
