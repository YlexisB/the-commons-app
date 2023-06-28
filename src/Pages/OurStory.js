import React from "react";
import StaticHeader from "../Components/StaticHeader";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { HEADER_STUFF, OUR_STORY } from "../constants";

const OurStory = () => {
  return (
    <div>
      <StaticHeader />
      <div id="about-container">
        <div className="circle-mask">
          <img src="../images/airplane.png" className="floating" alt="" />
        </div>
        <div id="second-about-container">
          <h1>{HEADER_STUFF.about}</h1>
          <div>
            <p>{OUR_STORY.about1}</p>
            <p>{OUR_STORY.about2}</p>
          </div>
          <Link to="/ContactUs/">
            <button>{HEADER_STUFF.contact}</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurStory;
