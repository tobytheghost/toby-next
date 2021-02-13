import React from "react";
import { scroller } from "react-scroll";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Nav from "../Nav/Nav";

function Hero() {
  const scrollToSection = () => {
    scroller.scrollTo("main", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <section className="hero">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="hero__content">
        <h1>
          <span className="hero__title">
            Hi, I'm
            <span className="hero__title--alternative"> Toby Gates</span>.
          </span>
          <span className="hero__subtitle">
            I'm a full-stack web developer.
          </span>
        </h1>
        <div className="hero__buttons">
          <button className="hero__button" onClick={scrollToSection}>
            My Work
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
