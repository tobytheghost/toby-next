import Link from "next/link";
import Meta from "../components/Meta/Meta";

const ErrorPage = () => {
  const meta = {
    title: "404 - Web Developer",
    description: "404 - Page Not Found",
    canonical: "https://tobygates.co.uk/404/",
  };
  return (
    <>
      <Meta meta={meta} />
      <section className="section section--no-padding-top">
        <article className="section__container section__container--middle">
          <h1 className="section__subtitle">404 - Page Not Found</h1>
          <Link href="/">
            <a>Return Home</a>
          </Link>
        </article>
      </section>
    </>
  );
};

export default ErrorPage;
