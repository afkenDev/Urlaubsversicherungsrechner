// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './components/schritt1';
import About from './components/schritt2';
import Step3 from './components/schritt3';
import Step4 from './components/schritt4';
import Step5 from './components/schritt5';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schritt2" element={<About />} />
          <Route path="/schritt3" element={<Step3 />} />
          <Route path="/schritt4" element={<Step4 />} />
          <About path="/schritt5" element={<Step5 />} />
       </Routes>
    </>
 );
};

export default App;