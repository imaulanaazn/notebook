import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/footer.css';
import '../styles/home.css';
import '../styles/about.css';
import '../styles/write.css';
import '../styles/app.css';
import '../styles/contact-us.css';
import '../styles/blog-single.css';
import '../styles/faq.css';
import '../styles/categories.css';
import '../styles/author.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Roboto font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        {/* NOTO SANS FONT */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* FONTAWESOME */}
        <script src="https://kit.fontawesome.com/490a850dc0.js" crossOrigin="anonymous" />
      </Head>

      <Component
        {...pageProps}
      />
    </>
  );
}
export default MyApp;
