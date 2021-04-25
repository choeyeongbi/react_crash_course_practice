import { Link } from "react-router-dom";
import { memo } from "react";
const Footer = memo(() => {
  return (
    <footer>
      <p>Copyright &copy; 2021 zoey</p>
      <Link to="/about/">About </Link>
    </footer>
  );
});

export default Footer;
