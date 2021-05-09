import React from "react";
import Head from "next/head";
import Layout from "components/Layout";
import GlobalStyle from "common/globalStyle";

const MyApp = ({ Component, pageProps }): JSX.Element => {
  return (
    <>
      <Head>
        <title>💙 Time to Hack</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
