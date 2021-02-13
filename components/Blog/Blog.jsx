import React, { useEffect, useState } from "react";
import { frontMatter as blogPosts } from "../../pages/blog/**/*.mdx";
import Link from "next/link";

import { formatDate } from "../../utils/helpers";

const Blog = () => {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    const blogs = blogPosts
      .sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      })
      .map((frontMatter) => {
        if (!frontMatter.title || !frontMatter.date) {
          return;
        }
        const { __resourcePath, ...props } = frontMatter;
        const link = `/${__resourcePath.replaceAll("\\", "/").split(".")[0]}`;

        console.log(link, props);
        return (
          <div className="post" key={frontMatter.title} {...props}>
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
          </div>
        );
      });
    setPosts(blogs);
  }, [blogPosts]);
  return (
    <>
      <h1 className="section__title">Blog</h1>
      <div className="posts">{posts}</div>
    </>
  );
};

export default Blog;
