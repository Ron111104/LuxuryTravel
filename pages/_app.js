// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adams &amp; Butler</title>
        <meta
          name="description"
          content="Luxury travel. Exclusive experiences. Custom journeys around the world."
        />
        <link rel="icon" href="https://img.icons8.com/fluency/48/000000/luxury.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
