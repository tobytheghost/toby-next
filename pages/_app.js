import Container from "../components/Container/Container";

import "../styles/Main.scss";
// import "github-markdown-css/github-markdown.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
