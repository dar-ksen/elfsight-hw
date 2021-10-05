import PropTypes from "prop-types";
import classNames from "classnames";
import { capitalizeFirstLetter } from "../../utils";

import "./input.css";

const Input = ({ name, containerClass, className, text, onFilterChange, ...attrs }) => {
  const classes = classNames("form-control", className);
  const classesContainer = classNames("mb-3", containerClass);
  const label = capitalizeFirstLetter(name);
  const onChange =(e) => {
    onFilterChange(name, e.target.value);
  }

  return (
    <div className={classesContainer}>
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
  containerClass: PropTypes.string,
  text: PropTypes.string,
};

Input.defaultProps = {
  className: "",
  containerClass: "",
  text: "",
};

export default Input;
