import React from "react";
import "../Css/TopBar.css";

export default function TobarNav() {
  return (
    <div className="_tobarContainer">
      <div className="_logo">
        <h2>{"< GOITSEMANG JOHN MAKEKETA />"}</h2>
      </div>
      <div className="_topbarMenu">
        <ul className="_topbarOption">
          <li>
            <a href="#_home">Home</a>
          </li>
          <li>
            <a href="#_about">About</a>
          </li>
          <li>
            <a href="#_experience">Experience</a>
          </li>
          <li>
            <a href="#_project">Project</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* font-family: 'Abril Fatface', cursive;
font-family: 'Alfa Slab One', cursive;
font-family: 'Exo', sans-serif;
font-family: 'Open Sans', sans-serif; */
