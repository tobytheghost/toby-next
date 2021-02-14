import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import VisibilitySensor from "react-visibility-sensor";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const scrollToSection = () => {
    scroller.scrollTo("section", {
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
        <motion.h1
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
              },
            },
          }}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <span className="hero__title">
            Hi, I'm
            <span className="hero__title--alternative"> Toby Gates</span>.
          </span>
          <span className="hero__subtitle">
            I'm a full-stack web developer.
          </span>
        </motion.h1>
        <motion.div
          className="hero__buttons"
          variants={{
            hidden: {
              opacity: 0,
              y: 100,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.45,
              },
            },
          }}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <button className="hero__button" onClick={scrollToSection}>
            My Work
            <ArrowForwardIcon />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
