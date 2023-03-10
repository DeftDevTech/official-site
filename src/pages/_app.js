import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Cursor from '../components/Cursor';
import ScrollToTop from '../components/Scroll-to-top';
import LoadingScreen from '../components/Loading-Screen';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DeftDev | Trust Deft</title>
        <link rel="icon" href={`${process.env.BASE_PATH}/img/favicon.ico`} />
      </Head>
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Component {...pageProps} />

      <Script
        strategy="beforeInteractive"
        id="wow"
        src={`${process.env.BASE_PATH}/js/wow.min.js`}
      ></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src={`${process.env.BASE_PATH}/js/splitting.min.js`}
      ></Script>
      <Script
        id="simpleParallax"
        src={`${process.env.BASE_PATH}/js/simpleParallax.min.js`}
      ></Script>
      <Script
        strategy="beforeInteractive"
        id="isotope"
        src={`${process.env.BASE_PATH}/js/isotope.pkgd.min.js`}
      ></Script>
      <Script
        strategy="lazyOnload"
        id="initWow"
        src={`${process.env.BASE_PATH}/js/initWow.js`}
      ></Script>
    </>
  );
}

export default MyApp;
