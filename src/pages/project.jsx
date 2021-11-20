import React from "react";
import "../Css/Project.css";

export default function Project() {
  return (
    <div className="_project">
      <h3>project's</h3>
      <div className="_projectContainter">
        <div className="_projecttitle">
          <h4>React video chat app </h4>
        </div>
        <div className="_projectdetails">
          <h3>Description</h3>
          <p>A React application using express and socket.io</p>

          <h3>Technologies used</h3>
          <p> React js, Express js, socket io</p>
        </div>
      </div>
      <div className="_projectContainter">
        <div className="_projecttitle">
          <h4>React-blog </h4>
        </div>
        <div className="_projectdetails">
          <h3>Description</h3>
          <p>A React application using express</p>

          <h3>Technologies used</h3>
          <p> React js, Django rest APi</p>
        </div>
      </div>
      <div className="_projectContainter">
        <div className="_projecttitle">
          <h4>React chat App </h4>
        </div>
        <div className="_projectdetails">
          <h3>Description</h3>
          <p>A React application</p>

          <h3>Technologies used</h3>
          <p> React js, Django rest APi</p>
        </div>
      </div>
    </div>
  );
}
