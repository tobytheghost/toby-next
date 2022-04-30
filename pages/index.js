import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Technologies from "../components/Technologies/Technologies";
// import Contact from "../components/Contact/Contact";
import Meta from "../components/Meta/Meta";
import Blog from "../components/BlogSection/BlogSection";

const App = () => {
  const meta = {
    title: "Web Developer - Full-Stack Developer",
    description:
      "Front-End Engineer based in Bedfordshire, UK working on bespoke, fast, responsive and secure web apps.",
    canonical: "https://tobygates.co.uk/",
  };
  return (
    <>
      <Meta meta={meta} />
      <Hero />
      <About />
      <Technologies />
      <Blog />
    </>
  );
};

export default App;
