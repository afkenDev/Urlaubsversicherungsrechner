import React from 'react';
import '../App.css';

function Button({ onClick, children }) {
  return (
    <button className="weiter" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
