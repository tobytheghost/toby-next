import React from "react";
import Nav from "../Nav/Nav";

function Header({ type }) {
  return (
    <section className={type === "home" ? "header header--home" : "header"}>
      <Nav />
    </section>
  );
}

export default Header;
