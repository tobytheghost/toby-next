import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { frontMatter as blogPosts } from "../pages/web-development-blog/**/*.mdx";
import { formatDate } from "../utils/helpers";

const useBlogs = (visible = true, limit = false) => {
  const [posts, setPosts] = useState([]);

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
        const delay = i / 2 + 1.5;
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
            animate={visible ? "show" : "hidden"}
            custom={delay}
            // exit="hidden"
          >
            <Link href={link}>
              <a className="post__link">
                <div className="post__image-wrapper">
                  <img
                    className="post__image"
                    alt={frontMatter.title}
                    src={frontMatter.image || "https://picsum.photos/400/300"}
                  />
                </div>
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

    if (limit) {
      setPosts(blogs.slice(0, limit));
    } else {
      setPosts(blogs);
    }
  }, [blogPosts, visible, limit]);

  return posts;
};

export default useBlogs;
