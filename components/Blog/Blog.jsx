import React from "react";
import { motion } from "framer-motion";

import useBlogs from "../../hooks/useBlogs";

const Blog = ({ section, visible }) => {
  const limit = section ? 3 : 0;
  const posts = useBlogs(visible, limit);

  const variants = {
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
  };

  return (
    <>
      {section ? (
        <motion.h2
          className="section__title"
          variants={variants}
          initial="hidden"
          animate={visible ? "show" : "hidden"}
        >
          Blog
        </motion.h2>
      ) : (
        <motion.h1
          className="section__title"
          variants={variants}
          initial="hidden"
          animate="show"
        >
          Web Development Blog
        </motion.h1>
      )}
      <div className="posts">{posts}</div>
    </>
  );
};

export default Blog;
