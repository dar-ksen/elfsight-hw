import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner/spinner";
import PropTypes from "prop-types";

const Boundry = ({ hasError, isLoading, isFound, children }) => {
  if (hasError) {
    return (
      <ErrorIndicator>
        <span className="boom">BOOM!</span>
        <span>
          something has gone terribly wrong
        </span>
        <span>
          (but we already sent Morty to fix it)
        </span>

      </ErrorIndicator>
    );
  }

  
  if (isLoading) {
    return <Spinner />;
  }

  if (!isFound) {
    return (
      <ErrorIndicator>
        <span className="boom">404</span>
        <span>
          No answers found for the specified filter
        </span>
        <span>
          Try to change your request
        </span>

      </ErrorIndicator>
    );
  }
  
  return children;
};

Boundry.propTypes = {
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isFound: PropTypes.bool,
  children: PropTypes.node,
};

Boundry.defaultProps = {
  hasError: false,
  isLoading: true,
  isFound: true,
  children: null,
};

export default Boundry;