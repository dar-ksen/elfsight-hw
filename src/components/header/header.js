import PropTypes from "prop-types";
import "./header.css";

const Header = ({ title, count, pages }) => {
  return (
    <header className="mb-5">
      <div className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-uppercase" href="/">
            {title}
          </a>
          <div className="navbar-info">
            <span className="navbar-brand">pages: {pages}</span>
            <span className="navbar-brand">count: {count}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  pages: PropTypes.number,
};

Header.defaultProps = {
  title: 'Example title',
  count: 0,
  pages: 0,
};

export default Header;
