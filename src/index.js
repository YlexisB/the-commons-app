import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import PeoplePage from "./Pages/PeoplePage";
import PersonPage from "./Pages/PersonPage";
import ContactUs from "./Pages/ContactUs";
import OurStory from "./Pages/OurStory";
import StoryTeller from "./Pages/Storyteller";
// eslint-disable-next-line no-unused-vars
import { HashRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="people/:year/" element={<PeoplePage />} />
          <Route path="person/:id/" element={<PersonPage />} />
          <Route path="ContactUs/" element={<ContactUs />} />
          <Route path="OurStory/" element={<OurStory />} />
          <Route path="StoryTeller/" element={<StoryTeller />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
