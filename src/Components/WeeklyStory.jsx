import React from "react";
import "aos/dist/aos.css";
import { WEEKLY_STORY } from "../constants";

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
          <img id="week-person-pic" src="/images/nelson-pink.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default WeeklyStory;
