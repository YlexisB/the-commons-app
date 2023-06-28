import React from "react";
import Header from "../Components/Header";
import WeeklyStory from "../Components/WeeklyStory";
import Footer from "../Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  return (
    <div>
      <Header />
      <WeeklyStory />
      <Footer />
    </div>
  );
};

export default Home;
