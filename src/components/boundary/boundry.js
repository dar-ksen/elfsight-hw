import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner/spinner";

const Boundry = ({ hasError, isLoading, children }) => {
  if (hasError) {
    return <ErrorIndicator />;
  }
  
  if (isLoading) {
    return <Spinner/>
  }

  return children;
};

export default Boundry;
