import { MDXProvider } from "@mdx-js/react";

import CodeBlock from "../components/CodeBlock/CodeBlock";
import Progress from "../components/Progress/Progress";
import { formatDate } from "../utils/helpers";

const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <CodeBlock {...props} />,
};

export default function Post({ children, frontMatter }) {
  const { title, topImage, author, date } = frontMatter;
  return (
    <>
      <Progress />
      <section className="section section--no-padding-top">
        <article className="section__container">
          <img
            className="section__image"
            src={topImage || "https://picsum.photos/1200/300"}
            alt={title}
          />
          <h1 className="section__title section__title--blog">{title}</h1>
          <div className="section__byline">
            By <strong>{author}</strong> - {formatDate(date)}
          </div>
          <div className="markdown-body">
            <MDXProvider components={components}>{children}</MDXProvider>
          </div>
        </article>
      </section>
    </>
  );
}
