import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import VisibilitySensor from "react-visibility-sensor";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import ThreeDRotationIcon from "@material-ui/icons/ThreeDRotation";
const Stars = dynamic(() => import("../Stars/Stars"), {
  ssr: false,
});

function Hero() {
  const scrollToSection = () => {
    scroller.scrollTo("section", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const [orbit, setOrbit] = useState(false);

  const toggleOrbit = () => {
    setOrbit((orbit) => !orbit);
  };

  return (
    <section className="hero">
      <Stars orbit={orbit} />
      {!orbit ? (
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
      ) : (
        <div className="hero__content">
          <motion.div
            className="hero__subtitle"
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
            Drag to explore space!
          </motion.div>
        </div>
      )}
      <button className="hero__orbit" onClick={toggleOrbit}>
        <ThreeDRotationIcon />
      </button>
    </section>
  );
}

export default Hero;
