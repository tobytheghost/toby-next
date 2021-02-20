import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import VisibilitySensor from "react-visibility-sensor";
import { motion, AnimatePresence } from "framer-motion";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function Footer() {
  const scrollToSection = () => {
    scroll.scrollToTop();
  };

  const [isVisible, setVisibility] = useState(false);

  const handleOnChange = (visibility) => {
    setVisibility(visibility);
  };

  return (
    <VisibilitySensor partialVisibility onChange={handleOnChange}>
      {() => (
        <>
          <section className="section footer">
            <div className="footer__links">
              <ul className="footer__items">
                <li className="footer__item">
                  <a
                    href="https://www.linkedin.com/in/tobygates/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>LinkedIn</span>
                    <LinkedInIcon />
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://github.com/tobytheghost/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Github</span>
                    <GitHubIcon />
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="https://www.facebook.com/tobytheghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Facebook</span>
                    <FacebookIcon />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__copy">
              Website Design & Build - Toby Gates - {new Date().getFullYear()}
            </div>
          </section>
          {/* <motion.button
              className="top-button"
              onClick={scrollToSection}
              variants={{
                show: {
                  opacity: 1,
                },
                hide: {
                  opacity: 0,
                },
              }}
              animate={isVisible ? "show" : "hide"}
              initial={"hide"}
              exit={"hide"}
            >
              <KeyboardArrowUpIcon />
            </motion.button> */}
        </>
      )}
    </VisibilitySensor>
  );
}

export default Footer;
