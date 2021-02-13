import React, { useState } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav() {
  const [menuActive, setMenuActive] = useState(false);

  Events.scrollEvent.register("begin", function (to, element) {
    setMenuActive(false);
  });

  const router = useRouter();

  return (
    <section
      className={`nav${menuActive ? " nav--active" : ""}${
        router.pathname === "/" ? " nav--home" : ""
      }`}
    >
      <nav className="nav__container">
        <ul className="nav__items">
          {/* <li className="nav__item">
            <button
              className="nav__link"
              onClick={() => {
                scrollToTop();
                setMenuActive(false);
              }}
            >
              Home
            </button>
          </li> */}
          {/* <li className="nav__item">
            <ScrollLink className="nav__link" to="about" smooth={true}>
              About
            </ScrollLink>
          </li>
          <li className="nav__item">
            <ScrollLink className="nav__link" to="technologies" smooth={true}>
              My Skills
            </ScrollLink>
          </li>
          <li className="nav__item">
            <ScrollLink className="nav__link" to="contact" smooth={true}>
              Contact
            </ScrollLink>
          </li> */}
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link" onClick={() => setMenuActive(false)}>
                Home
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/blog">
              <a className="nav__link" onClick={() => setMenuActive(false)}>
                Blog
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/contact">
              <a className="nav__link" onClick={() => setMenuActive(false)}>
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="nav__icon">
        <button
          className="nav__button"
          onClick={() =>
            menuActive ? setMenuActive(false) : setMenuActive(true)
          }
        >
          <span></span>
        </button>
      </div>
      <Link href="/">
        <a onClick={() => setMenuActive(false)}>
          <span className="nav__title">Toby Gates.</span>
        </a>
      </Link>
    </section>
  );
}

export default Nav;
