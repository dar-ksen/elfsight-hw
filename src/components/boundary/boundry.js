import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner/spinner";
import PropTypes from "prop-types";

const Boundry = ({ hasError, isLoading, children }) => {
  if (hasError) {
    return <ErrorIndicator />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return children;
};

Boundry.propTypes = {
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

Boundry.defaultProps = {
  hasError: false,
  isLoading: true,
  children: null,
};

export default Boundry;
