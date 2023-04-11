import React from "react";
import { Link } from "react-router-dom";
import "./HomeStyles.css";

export default function Home() {

  return (
    <div className="home-wrapper">
        <div className="login-button-container">
        {/* <img className="home-logo" src="/images/FitTrack-logo.png" alt="Running" /> */}
      <Link to="/login" className="login-button-home">
        Login
      </Link>
      </div>
      <div className="outer-container">
        <div className="title">
          <h1>FitTrack</h1>
          <p>
            A website where you can track all your workout progress. Always stay
            on top of your improvment with FitTrack with just a couple clicks of
            the mouse. All of your workouts kept together to easily watch your
            progress through your workout journey.
          </p>
          <Link to="/register">
          <button className="get-started">Get Started</button>
          </Link>
        </div>
        <div className="pics">
          <div className="inner-pics">
            <img src="/images/running.jpg" alt="Running" />
            <img src="/images/skipping.jpg" alt="Skipping" />
          </div>
          <div className="inner-pics">
            <img src="/images/swimming.jpg" alt="Swimming" />
            <img src="/images/weights.jpg" alt="Weight Lifting" />
          </div>
        </div>
      </div>
    </div>
  );
}
