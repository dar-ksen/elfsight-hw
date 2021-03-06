import PropTypes from "prop-types";
import classNames from "classnames";
import { capitalizeFirstLetter } from "../../utils";

import "./select.css";

const Select = ({
  name,
  className,
  containerClass,
  defaultValue,
  values,
  label,
  text,
  onFilterChange,
  ...attrs
}) => {
  const classes = classNames("form-select", className);
  const classesContainer = classNames("mb-3", containerClass);
  const defaultValueLabel = "Select for " + name;

  const onChange = (e) => {
    onFilterChange(name, e.target.value);
  };

  return (
    <div className={classesContainer}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        className={classes}
        onChange={onChange}
        defaultValue={defaultValue}
        aria-label={defaultValueLabel}
        {...attrs}
      >
        <option value="">{defaultValueLabel}</option>
        {values.map((value) => (
          <option key={value} value={value}>
            {capitalizeFirstLetter(value)}
          </option>
        ))}
      </select>
      {text && <div className="form-text">{text}</div>}
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  containerClass: PropTypes.string,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  text: PropTypes.string,
};

Select.defaultProps = {
  containerClass: "",
  className: "",
  defaultValue: "",
  values: [],
  label: "",
  text: "",
};

export default Select;
