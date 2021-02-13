export default function Index({ children, frontMatter }) {
  return (
    <section className="section blog">
      <article className="section__container">{children}</article>
    </section>
  );
}
