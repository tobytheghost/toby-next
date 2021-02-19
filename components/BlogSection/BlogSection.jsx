import React, { useState, useEffect } from "react";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";

import Blog from "../Blog/Blog";

const BlogSection = () => {
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
    <section className="section blog">
      <VisibilitySensor partialVisibility onChange={handleOnChange}>
        {() => (
          <article className="section__container">
            <Blog section={true} visible={entered} />
            <Link href="/web-development-blog">
              <a className="section__button">Read More</a>
            </Link>
          </article>
        )}
      </VisibilitySensor>
    </section>
  );
};

export default BlogSection;
