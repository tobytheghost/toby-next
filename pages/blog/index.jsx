import Blog from "../../components/Blog/Blog";
import Meta from "../../components/Meta/Meta";

const BlogPage = () => {
  const meta = {
    title: "Web Development Blog - Web Developer",
    description:
      "Personal Blog by Toby Gates. My notes, thoughts, ideas & answers to frequently asked questions.",
    canonical: "https://tobygates.co.uk/blog/",
  };
  return (
    <>
      <Meta meta={meta} />
      <section className="section blog">
        <article className="section__container">
          <Blog />
        </article>
      </section>
    </>
  );
};

export default BlogPage;
