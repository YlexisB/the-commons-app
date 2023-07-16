import React from "react";

import "aos/dist/aos.css";
import { WEEKLY_STORY } from "../constants";
import nelsonPinkImage from "../images/nelson-pink.png";

const WeeklyStory = () => {
  return (
    <section id="weekly-story">
      <div id="week-story">
        <div data-aos="fade-left" id="week-text">
          <hr />
          <h3>{WEEKLY_STORY.storyTitle}</h3>
          <p>{WEEKLY_STORY.storyDescription}</p>
          <hr />
        </div>
        <div data-aos="fade-right" id="week-story-pic">
          <img id="week-person-pic" src={nelsonPinkImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default WeeklyStory;
