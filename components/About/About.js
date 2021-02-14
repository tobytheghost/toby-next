import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import VisibilitySensor from "react-visibility-sensor";
import SpeedIcon from "@material-ui/icons/Speed";
import DevicesIcon from "@material-ui/icons/Devices";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import StorageIcon from "@material-ui/icons/Storage";
import LanguageIcon from "@material-ui/icons/Language";
import { Card } from "@material-ui/core";
import { motion, AnimatePresence } from "framer-motion";

function About() {
  const [isVisible, setVisibility] = useState(false);
  const [entered, setEntered] = useState(false);

  const handleOnChange = (visibility) => {
    setVisibility(visibility);
  };
  useEffect(() => {
    if (isVisible) {
      setEntered(true);
    }
  }, [isVisible]);

  return (
    <section className="section about">
      <VisibilitySensor partialVisibility onChange={handleOnChange}>
        {() => (
          <article className="section__container">
            <motion.h2
              className="section__title about__title"
              variants={{
                hidden: {
                  opacity: 0,
                  y: -100,
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
              animate={entered ? "show" : "hidden"}
              // exit="hidden"
            >
              About
            </motion.h2>

            <div className="section__row section__row--align-top">
              <motion.div
                className="section__column"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -100,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.45,
                    },
                  },
                }}
                initial="hidden"
                animate={entered ? "show" : "hidden"}
                // exit="hidden"
              >
                <div className="section__subtitle">
                  <h3>Who am I?</h3>
                </div>
                <figure className="about__image">
                  <img src="../../assets/img/toby-gates.png" alt="Toby Gates" />
                </figure>
                <div className="section__content section__content--large">
                  <p>
                    I'm a Full-Stack Developer currently working for{" "}
                    <a
                      href="https://www.fluidstudiosltd.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fluid Studios
                    </a>{" "}
                    in Hertfordshire, UK.
                  </p>
                  <p>
                    I'm currently working on fast, responsive and secure web
                    applications and supporting our legacy clients.
                  </p>
                  <p>
                    <Link className="cta" to="contact" smooth={true}>
                      Let's make something together!
                    </Link>
                  </p>
                </div>
              </motion.div>

              <motion.aside
                className="section__column"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 100,
                  },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.45,
                    },
                  },
                }}
                initial="hidden"
                animate={entered ? "show" : "hidden"}
                // exit="hidden"
              >
                <div className="section__subtitle">
                  <h3>What do I do?</h3>
                </div>
                <div className="section__cards">
                  <Card className="card">
                    <CodeIcon />
                    <h4 className="card__title">HTML5 / CSS3 / JS</h4>
                    <p>
                      Fast and dynamic web pages and applications using the
                      latest frameworks.
                    </p>
                  </Card>
                  <Card className="card">
                    <StorageIcon />
                    <h4 className="card__title">Back-end Development</h4>
                    <p>
                      Work with powerful back-end REST Api services and CMS
                      systems.
                    </p>
                  </Card>
                  <Card className="card">
                    <LanguageIcon />
                    <h4 className="card__title">Support & Hosting</h4>
                    <p>
                      Provide support to our legacy clients and host sites on
                      our cloud-based hosting services.
                    </p>
                  </Card>
                  <Card className="card">
                    <GitHubIcon />
                    <h4 className="card__title">Git Version Control</h4>
                    <p>
                      Keep web projects up-to-date and synchronised for better
                      cleaner development.
                    </p>
                  </Card>
                </div>
              </motion.aside>
            </div>

            <motion.div
              className="section__row"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.6,
                  },
                },
              }}
              initial="hidden"
              animate={entered ? "show" : "hidden"}
              // exit="hidden"
            >
              <div className="section__column section__column--full">
                <ul className="about__widgets">
                  <li className="about__widget">
                    <div className="about__widget-icon">
                      <SpeedIcon />
                    </div>
                    <div className="about__widget-title">Fast</div>
                    <div className="about__widget-info">
                      Focusing on fast load times and a smooth client
                      interaction.
                    </div>
                  </li>
                  <li className="about__widget">
                    <div className="about__widget-icon">
                      <DevicesIcon />
                    </div>
                    <div className="about__widget-title">Responsive</div>
                    <div className="about__widget-info">
                      Building sites that work responsively on devices both big
                      and small.
                    </div>
                  </li>
                  <li className="about__widget">
                    <div className="about__widget-icon">
                      <EmojiObjectsIcon />
                    </div>
                    <div className="about__widget-title">Intuitive</div>
                    <div className="about__widget-info">
                      Developing UX/UI that's easy to use and understand.
                    </div>
                  </li>
                  <li className="about__widget">
                    <div className="about__widget-icon">
                      <FlashOnIcon />
                    </div>
                    <div className="about__widget-title">Dynamic</div>
                    <div className="about__widget-info">
                      Putting extra power into your website. I love making pages
                      come to life.
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </article>
        )}
      </VisibilitySensor>
    </section>
  );
}

export default About;
