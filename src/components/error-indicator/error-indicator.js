import React from 'react';

import './error-indicator.css';
import icon from './error.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent Morty to fix it)
      </span>
      <img src={icon} alt="error icon"/>
    </div>
  );
};

export default ErrorIndicator;
