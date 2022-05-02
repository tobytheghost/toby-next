import React from "react";
import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Technologies from "../components/sections/Technologies/Technologies";
import Meta from "../components/parts/Meta/Meta";
import Blog from "../components/sections/Blog/Blog";

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
