import Container from "../components/parts/Container/Container";
import "../styles/Main.scss";

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
