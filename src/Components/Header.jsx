import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { HEADER_STUFF } from "../constants";

const Header = () => {
  const navigate = useNavigate();

  const handlePeriodClick = (period) => {
    navigate(`/people/${period}`);
  };

  useEffect(() => {
    Aos.init({
      duration: 3000,
      offset: 300,
    });
    const pinkEyeElement = document.getElementById("pink-eye");
    pinkEyeElement.addEventListener("animationend", () => {
      pinkEyeElement.classList.remove("hide");
    });
    return () => {
      pinkEyeElement.removeEventListener("animationend", () => {
        pinkEyeElement.classList.remove("hide");
      });
    };
  }, []);

  return (
    <div id="header-nav">
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

          <div id="pink-eye" className="flipped hide"></div>
          <div data-aos="flip-up" id="pink-eye-2" className="flipped">
            <p>{HEADER_STUFF.prompt}</p>
            <div data-aos="zoom-out-down" id="arc">
              <div className="word-container">
                <span className="w1" onClick={() => handlePeriodClick("1500s")}>
                  {HEADER_STUFF.year1}
                </span>

                <span className="w2" onClick={() => handlePeriodClick("1600s")}>
                  {HEADER_STUFF.year2}
                </span>
                <span className="w3" onClick={() => handlePeriodClick("1700s")}>
                  {HEADER_STUFF.year3}
                </span>
                <span className="w4" onClick={() => handlePeriodClick("1800s")}>
                  {HEADER_STUFF.year4}
                </span>
                <span className="w5" onClick={() => handlePeriodClick("1900s")}>
                  {HEADER_STUFF.year5}
                </span>
              </div>
            </div>
          </div>
          <div id="grey-iris"></div>
          <div data-aos="flip-up" id="grey-iris-copy"></div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default Header;
