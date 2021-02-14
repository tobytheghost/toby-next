import { MDXProvider } from "@mdx-js/react";
import { motion, AnimatePresence } from "framer-motion";

import CodeBlock from "../components/CodeBlock/CodeBlock";
import Progress from "../components/Progress/Progress";
import { formatDate } from "../utils/helpers";
import Meta from "../components/Meta/Meta";

const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBlock {...props} />,
};

const Post = ({ children, frontMatter }) => {
  const { title, topImage, author, date } = frontMatter;
  // console.log(frontMatter);
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
