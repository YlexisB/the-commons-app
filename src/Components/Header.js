import { Link } from "react-router-dom";
import React, { useState } from "react";
import WeeklyStory from "./WeeklyStory";

const Header = () => {
  const [shouldFlip, setShouldFlip] = useState(false);
  const [flipped, setIsFlipped] = useState(false);
  const handleScroll = () => {
    const pinkEye = document.getElementById("pink-eye");
    const headerHeight = document.getElementById("header").offsetHeight;
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (scrollPosition >= headerHeight) {
      setShouldFlip(true);
      pinkEye.style.zIndex = "2";
    } else {
      setShouldFlip(false);
      pinkEye.style.zIndex = "-100";
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="header">
      {/* NAV */}
      <nav className="nav">
        <div className="one">
          <Link to="#" className="textlink">
            <h5 id="The-Commons">THE COMMONS</h5>
          </Link>
          <Link to="#" className="textlink">
            <h5 id="About">OUR STORY</h5>
          </Link>
        </div>
        <div className="two">
          <Link to="#" className="textlink">
            <h5 id="Your-Story">TELL YOUR STORY</h5>
          </Link>
          <Link to="#" className="textlink">
            <h5 id="Contact">CONTACT US</h5>
          </Link>
        </div>
      </nav>

      <div className="title-container">
        <h1>THE COMMONS</h1>
        <p>a glimpse into an eye's present, and our past</p>

        <div
          id="pink-eye"
          className={shouldFlip ? "flip-animation flipped" : ""}
        ></div>
        <div id="grey-iris"></div>
        <div id="grey-iris-copy"></div>
      </div>

      <hr />
    </div>
  );
};

export default Header;
