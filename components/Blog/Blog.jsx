import React, { useEffect, useState } from "react";
import { frontMatter as blogPosts } from "../../pages/blog/**/*.mdx";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { formatDate } from "../../utils/helpers";

const Blog = () => {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    const blogs = blogPosts
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
      .map((frontMatter, i) => {
        if (!frontMatter.title || !frontMatter.date) {
          return;
        }
        const { __resourcePath, ...props } = frontMatter;
        const link = `/${__resourcePath.replaceAll("\\", "/").split(".")[0]}`;
        const delay = (i % 2) / 2 + 1.5;
        // console.log(delay);

        // console.log(link, props);
        return (
          <motion.div
            className="post"
            key={frontMatter.title}
            {...props}
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
              },
              show: (delay) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: delay * 0.3,
                },
              }),
            }}
            initial="hidden"
            animate="show"
            custom={delay}
            // exit="hidden"
          >
            <Link href={link}>
              <a className="post__link">
                <img
                  className="post__image"
                  src={frontMatter.image || "https://picsum.photos/400/300"}
                />
              </a>
            </Link>
            <Link href={link}>
              <a className="post__link">
                <h2 className="post__title">{frontMatter.title}</h2>
              </a>
            </Link>
            <span className="post__about">
              By <strong>{frontMatter.author}</strong> -{" "}
              {formatDate(frontMatter.date)}
            </span>
            <p>{frontMatter.extract}</p>
          </motion.div>
        );
      });
    setPosts(blogs);
  }, [blogPosts]);
  return (
    <>
      <motion.h1
        className="section__title"
        variants={{
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
        }}
        initial="hidden"
        animate="show"
      >
        Web Development Blog
      </motion.h1>
      <div className="posts">{posts}</div>
    </>
  );
};

export default Blog;
