import React from 'react';
import PropTypes from "prop-types";

import './error-indicator.css';
import icon from './error.png';

const ErrorIndicator = ({children}) => {
  return (
    <div className="error-indicator">

      {children}
      <img src={icon} alt="error icon"/>
    </div>
  );
};

ErrorIndicator.propTypes = {
  children: PropTypes.node,
};

ErrorIndicator.defaultProps = {
  children: null,
};

export default ErrorIndicator;
