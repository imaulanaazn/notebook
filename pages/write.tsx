import React from 'react';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';
import WriteOnNotebook from '../components/organism/WriteOnNotebook/WriteOnNotebook';
import HowToWrite from '../components/organism/HowToWrite/HowToWrite';
import Script from 'next/script';

export default function write() {
  return (
    <>
      <Script async src="https://kit.fontawesome.com/490a850dc0.js" crossOrigin="anonymous"></Script>
      <Navbar />
      <WriteOnNotebook />
      <HowToWrite />
      <Footer />
    </>
  );
}
