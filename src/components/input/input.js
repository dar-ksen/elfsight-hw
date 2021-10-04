import PropTypes from "prop-types";
import classNames from "classnames";
import { capitalizeFirstLetter } from "../../utils";

import "./input.css";

const Input = ({ name, className, text, onFilterChange, ...attrs }) => {
  const classes = classNames("form-control", className);
  const label = capitalizeFirstLetter(name);
  const onChange =(e) => {
    onFilterChange(name, e.target.value);
  }

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}:
      </label>
      <input onChange={onChange} name={name} id={name} className={classes} {...attrs} />
      {text && (
        <div id="emailHelp" className="form-text">
          {text}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string,
};

Input.defaultProps = {
  className: "",
  text: "",
};

export default Input;
