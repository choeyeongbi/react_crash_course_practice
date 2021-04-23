import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClickBtn = (e) => {
    console.log("click", e);
  };

  return (
    <header className="header" style={headingStyle}>
      <h1>{title}</h1>
      <Button color="lightgray" text="+" onClick={onClickBtn} />
     
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = { color: "purple", backgroundColor: "white" };

export default Header;
