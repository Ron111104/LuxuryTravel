// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tourizo</title>
        <meta
          name="description"
          content="Luxury travel. Exclusive experiences. Custom journeys around the world."
        />
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
