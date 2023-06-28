import React, { useState } from "react";
import StaticHeader from "../Components/StaticHeader";
import Footer from "../Components/Footer";
import { TELL_YOUR_STORY } from "../constants";

const StoryTeller = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
  }

  return (
    <div className="storyteller-section">
      <StaticHeader />
      <div className={`contact-section ${submitted ? "change-padding" : ""}`}>
        {submitted ? (
          <p className="white">{TELL_YOUR_STORY.submission}</p>
        ) : (
          <div id="contact-us-section">
            <h1>story tellers</h1>
            <h4>{TELL_YOUR_STORY.yourStoryPrompt}</h4>
            <form id="contact-container">
              <div className="input-field">
                <input
                  placeholder="Name"
                  className=" formEntry"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  aria-required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-field">
                <input
                  placeholder="Email"
                  className="u formEntry"
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  aria-required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input-field">
                <textarea
                  placeholder="Message"
                  className="formEntry"
                  id="message"
                  name="message"
                  value={message}
                  aria-required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                className="submit-btn"
                type="submit"
                value="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default StoryTeller;
