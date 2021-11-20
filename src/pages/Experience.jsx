import React from "react";
import "../Css/Experience.css";
import uj_logo from "../Media/InsImg.gif";

export default function Experience() {
  return (
    <div className="_experience">
      <h2>Experience</h2>
      <div className="_experienceContainer">
        <div className="_experienceinfo">
          <h4>University of Johannesburg</h4>
          <h5>from March 2021 -- to November 2021</h5>
          <img src={uj_logo} alt="uj_logo" />
        </div>
        <div className="_experienceSummary">
          <h5>Computer Science Research Student Assistant</h5>
          <ul>
            <li>Research on phonetics in Sesotho</li>
            <li> Data gathering and Analysis</li>
            <li>Developing an Algorithm in python</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="_experienceContainer">
        <div className="_experienceinfo">
          <h4>University of Johannesburg</h4>
          <h5>from Feb 2019 -- to November 2019</h5>
          <img src={uj_logo} alt="uj_logo" />
        </div>
        <div className="_experienceSummary">
          <h5>Peer Mentor Program</h5>
          <p>
            Program for helping students to transition from high school life to
            the university environment.
          </p>
          <ul>
            <li>Leadership and time management</li>
            <li>
              Assist students in coping and providing course resources and
              advice
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="_experienceContainer">
        <div className="_experienceinfo">
          <h4>University of Johannesburg</h4>
          <h5>from June 2019 -- to November 2019</h5>
          <img src={uj_logo} alt="uj_logo" />
        </div>
        <div className="_experienceSummary">
          <h5>Community Engagement</h5>
          <p>
            I was part of the group at the University of Johannesburg that was
            helping high schools with cleaning <br />
            the environment, motivating learners to make the right choices, and
            to study hard.
          </p>
          <ul>
            <li>Leadership and time management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
