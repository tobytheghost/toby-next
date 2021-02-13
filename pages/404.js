import Link from "next/link";

const ErrorPage = () => {
  return (
    <section className="section section--no-padding-top">
      <article className="section__container section__container--middle">
        <h1 className="section__subtitle">404 - Page Not Found</h1>
        <Link href="/">
          <a>Return Home</a>
        </Link>
      </article>
    </section>
  );
};

export default ErrorPage;
