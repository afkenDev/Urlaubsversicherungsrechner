import React, { useEffect, useState } from 'react';
import './PlaneImage.css';

function PlaneImage({ onAnimationEnd }) {
  const [slideIn, setSlideIn] = useState(false);
  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    setSlideIn(true);
    const timer = setTimeout(() => {
      setSlideOut(true);
    }, 1888); // Zeit in ms bis die Slide-Out-Animation beginnt

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = (e) => {
    if (e.animationName === 'slideOut') {
      onAnimationEnd();
    }
  };

  return (
    <div className={`plane-container ${slideIn ? 'slide-in' : ''} ${slideOut ? 'slide-out' : ''}`} onAnimationEnd={handleAnimationEnd}>
      <img src='https://static.vecteezy.com/system/resources/previews/018/803/020/original/cartoon-comic-cloud-png.png' alt="plane"/>
    </div>
  );
}

export default PlaneImage;
