import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>Task Tracker</h1>
      {title}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
