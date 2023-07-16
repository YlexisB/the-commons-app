import { Link } from "react-router-dom";
import React from "react";

import { HEADER_STUFF } from "../constants";

const StaticHeader = () => {
  return (
    <div id="static-header">
      <div id="header">
        {/* NAV */}
        <nav className="nav">
          <div className="one">
            <Link to="/" className="textlink">
              <h5 id="The-Commons">{HEADER_STUFF.siteName}</h5>
            </Link>
            <Link to="/OurStory/" className="textlink">
              <h5 id="About">{HEADER_STUFF.about}</h5>
            </Link>
          </div>
          <div className="two">
            <Link to="/StoryTeller/" className="textlink">
              <h5 id="Your-Story">{HEADER_STUFF.aboutYou}</h5>
            </Link>
            <Link to="/ContactUs/" className="textlink">
              <h5 id="Contact">{HEADER_STUFF.contact}</h5>
            </Link>
          </div>
        </nav>

        <div className="title-container">
          <Link to="/">
            <h1>{HEADER_STUFF.siteName}</h1>
          </Link>
          <p>{HEADER_STUFF.headerMotto}</p>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default StaticHeader;
