import { Link } from "react-router-dom";
import { memo } from "react";

const About = memo(() => {
  return (
    <div>
      <h4>version 1.0.0</h4>
      <Link to="/"> Go Back</Link>
    </div>
  );
});

export default About;
