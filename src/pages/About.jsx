import React from "react";
import "../Css/About.css";
import web from "../Media/web.png";

export default function About() {
  return (
    <div className="_about" id="_about">
      <div className="_aboutContainer">
        <div className="_aboutinfo">
          <h3 className="_aboutTitle">About Me</h3>
          <p>
            My name is Goitsemang John Makeketa. I studied Business information
            technology at the University of Johannesburg. I grew up in Northwest
            in a small village called Moretele. My love for programming/
            technology started when I got my first phone, a Samsung E250, back
            in 2008
          </p>
          <p>
            I started exploring the internet when it was web 2.0 without the
            current modern and colorful design. Through exploring the internet,
            I came across many articles about tech and how it will change the
            world; I was inspired, of course, not because of the articles but
            because of the passion I have for building things. Okay, fast
            forward to 2014, I was doing grade 10, and we had a school trip to
            Scie-Bono. At Scie-Bono, I learned about different tech fields and
            technologies that are out there and how to leverage them; I knew
            right there that I wanted to study something that has to do with
            technology and to build things.
          </p>
          <p>
            So 2017, during my gap year, I applied to study Business information
            technology at the University of Johannesburg and graduated in 2020.
            during my 3years of study, I did extra online courses related to IT
            and obtained 15 certificates. I also applied to study advanced
            Diploma in Business information technology in 2021 and am still
            awaiting my results. I am currently equipped with knowledge of 3
            programming languages, three scripting languages, React native
            framework basics, Reactjs, Expressjs, and database design &
            Security. I also have expertise and good understanding in Linux and
            IT support systems.
          </p>
        </div>
        <div className="_aboutImage">
          <img src={web} alt="web" />
        </div>
      </div>
    </div>
  );
}
