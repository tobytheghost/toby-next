import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Technologies from "../components/Technologies/Technologies";
// import Contact from "../components/Contact/Contact";
import Meta from "../components/Meta/Meta";

const App = () => {
  const meta = {
    title: "Web Developer - Full-Stack Developer",
    description:
      "Full-Stack Developer based in Hertfordshire, UK working on bespoke, fast, responsive and secure web applications.",
    canonical: "https://tobygates.co.uk/",
  };
  return (
    <>
      <Meta meta={meta} />
      <Hero />
      <About />
      <Technologies />
      {/* <Contact /> */}
    </>
  );
};

export default App;
