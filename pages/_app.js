import React from "react";
import App from "next/app";
import Head from "next/head";

import { StrictMode } from "react";
function Website({ Component, pageProps }) {
  return (
    <StrictMode>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Elroy's Portfolio</title>``
        {/* <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </StrictMode>
  );
}

export default Website;
