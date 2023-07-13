import React from "react";

import { Link, useParams } from "react-router-dom";

import data from "../data.json";
const PeoplePage = () => {
  const { year } = useParams();
  const timePeriod = data.timePeriods.find((period) => period.year === year);
  return (
    <div>
      <section id="people-section">
        <div className="back-year">
          <Link to="/">
            <button className="back-button">← BACK</button>
          </Link>
          <h2 className="year">People of the {year}</h2>
        </div>
        <div id="elements-container">
          {timePeriod.people.map((person, index) => (
            <div className="elements" key={index}>
              <Link
                to={{
                  pathname: `/person/${person.id}`,
                  state: {
                    person: person,
                  },
                }}
                className="person-link"
              >
                <img src={`../images/${person.image}`} alt="" />
              </Link>
              <div>
                <Link
                  to={{
                    pathname: `/person/${person.id}`,
                    state: {
                      person: person,
                    },
                  }}
                  className="person-link"
                >
                  <h2>{person.name}</h2>
                </Link>
                <p>{person["short-description"]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default PeoplePage;
