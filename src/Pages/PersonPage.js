import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import data from "../data.json";
import axios from "axios";
import { VOICERSS_API_URL } from "../constants";

const PersonPage = () => {
  const [data1, setData1] = useState();

  const { id } = useParams();
  const person = data.timePeriods
    .flatMap((period) => period.people)
    .find((p) => p.id === id);
  ///////////////////////////////////////
  const h1 = person.h1;
  const v = person.v;
  const handleTextToSpeech = async (text) => {
    const options = {
      method: "GET",
      url: VOICERSS_API_URL,
      params: {
        key: process.env.REACT_APP_VOICERSS_KEY,
        src: text,
        hl: h1,
        v: v,
        r: "0",
        c: "mp3",
        f: "8khz_8bit_mono",
        b64: true,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "voicerss-text-to-speech.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setData1(response.data);
      console.log(data1);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleTextToSpeech(person["short-description"]);
  }, []);

  //////////////////////////////////////////////////
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 400,
    });
  }, []);
  if (!person) {
    return null;
  }
  return (
    <div>
      <div id="person-section">
        <div className="person-intro-section">
          <div className="person-intro">
            <h1>THE COMMONS</h1>
            <img
              data-aos="fade-up-left"
              className="first-image"
              src={`../images/${person.image}`}
              alt="img"
            />

            <div data-aos="fade-down-right" className="pink-fill-box"></div>
            <audio controls src={data1} type="audio/mpeg">
              Play
            </audio>
            <h2 className="pink-name">{person.name}</h2>
            <p className="description">{person["short-description"]}</p>
          </div>
        </div>
        <div className="person-pic-two">
          <div>
            <img
              data-aos="fade-up"
              className="image-2"
              src={`../images/${person["image-2"]}`}
              alt="img-2"
            />
          </div>
        </div>
        <div className="person-intro-section">
          <h2 className="description-2">{person["longer-description"]}</h2>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
