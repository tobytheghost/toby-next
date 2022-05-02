import { MDXProvider } from "@mdx-js/react";
import { motion } from "framer-motion";
import CodeBlock from "../components/parts/CodeBlock/CodeBlock";
import Progress from "../components/parts/Progress/Progress";
import Meta from "../components/parts/Meta/Meta";
import { formatDate } from "../utils/helpers";

const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBlock {...props} />,
};

const Post = ({ children, frontMatter }) => {
  const { title, topImage, author, date, tags } = frontMatter;
  return (
    <>
      <Meta meta={frontMatter} />
      <Progress />
      <section className="section section--no-padding-top">
        <article className="section__container">
          <motion.img
            className="section__image"
            src={topImage || "https://picsum.photos/1200/300"}
            alt={title}
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
          />
          <motion.h1
            className="section__title section__title--blog"
            variants={{
              hidden: {
                opacity: 0,
                y: -100,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.45,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {title}
          </motion.h1>
          <motion.div
            className="section__byline"
            variants={{
              hidden: {
                opacity: 0,
                y: -100,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.45,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            By <strong>{author}</strong> - {formatDate(date)}
            <div className="section__tags">
              {tags.length && (
                <ul className="tags">
                  {tags.map((tag) => {
                    return (
                      <li key={tag} className="tags__tag">
                        {tag}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </motion.div>
          <motion.div
            className="markdown-body"
            variants={{
              hidden: {
                opacity: 0,
                y: -100,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.6,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <MDXProvider components={components}>{children}</MDXProvider>
          </motion.div>
        </article>
      </section>
    </>
  );
};

export default Post;
