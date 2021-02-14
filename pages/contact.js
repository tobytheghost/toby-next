import React from "react";

import ContactForm from "../components/Contact/Contact";
import Meta from "../components/Meta/Meta";

const Contact = () => {
  const meta = {
    title: "Contact - Web Developer",
    description:
      "Questions? Queries? Contact me to see what I can do for you. Let's make something together!",
    canonical: "https://tobygates.co.uk/contact/",
  };
  return (
    <>
      <Meta meta={meta} />
      <ContactForm />
    </>
  );
};

export default Contact;
