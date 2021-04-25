import PropTypes from "prop-types";
import { memo } from "react";
const Button = memo(({ color, text, onClick }) => {
  console.log("button click()");

  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={onClick}
    >
      <h2>{text}</h2>
    </button>
  );
});

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
