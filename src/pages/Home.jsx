import React from "react";
import "../Css/Home.css";
import ME from "../Media/ME.png";
import resume from "../Media/Goitsemang John Makeketa Resume.pdf";

export default function Home() {
  return (
    <div className="_home" id="_home">
      <div className="_homeinnerContainer">
        <div className="_homeinfo">
          <h3>Hi, There!</h3>
          <p>
            MY Name is GOITSEMANG JOHN MAKEKETA, and i love playing with the
            web. I hold a Diploma in Business Information Technology from the
            University of Johannesburg. I recently completed my Advanced Diploma
            in Business Information Technology.
          </p>
          <p>
            i want to be a developer at Sovtech,Because i love developing and i
            has been learnig and brusing up my skills. I’m passionate about
            creating things, and I love learning new techniques and technologies
            that allow me to build project that are better and good looking.”
          </p>
          <div className="_homelinkinfo">
            <a
              className="_homeLinks"
              href="https://github.com/Goitsemang-cloud?tab=repositories"
              rel="noreferrer"
              target="_blank"
            >
              <i class="devicon-github-original"></i>
            </a>
            <a
              className="_homeLinks"
              href="https://www.linkedin.com/in/goitsemang-j-makeketa-b827191a9/"
              rel="noreferrer"
              target="_blank"
            >
              <i class="devicon-linkedin-plain"></i>
            </a>
            <a href={resume} rel="noreferrer" target="_blank">
              <input className="_HomeResumeBtn" type="button" value="resume" />
            </a>
          </div>
        </div>
        <div className="_homeimageContainer">
          <img className="_homeimage" src={ME} alt="ME" />
        </div>
      </div>
    </div>
  );
}
