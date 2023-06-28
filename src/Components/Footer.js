import React from "react";
import { Link } from "react-router-dom";
import { FOOTER } from "../constants";

const Footer = () => {
  return (
    <footer>
      <h4>{FOOTER.prompt}</h4>
      <Link to="/StoryTeller/">
        <button className="click-here">{FOOTER.prompt2}</button>
      </Link>
    </footer>
  );
};

export default Footer;
