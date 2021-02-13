import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

function Footer() {
  return (
    <section className="section footer">
      <div className="footer__links">
        <ul className="footer__items">
          <li className="footer__item">
            <a
              href="https://www.linkedin.com/in/tobygates/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://github.com/tobytheghost/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
          <li className="footer__item">
            <a
              href="https://www.facebook.com/tobytheghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__copy">
        Website Design & Build - Toby Gates - {new Date().getFullYear()}
      </div>
    </section>
  );
}

export default Footer;
