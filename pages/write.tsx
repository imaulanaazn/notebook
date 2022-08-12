import React from 'react';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';
import WriteOnNotebook from '../components/organism/WriteOnNotebook/WriteOnNotebook';
import HowToWrite from '../components/organism/HowToWrite/HowToWrite';

export default function write() {
  return (
    <>
      <Navbar />
      <WriteOnNotebook />
      <HowToWrite />
      <Footer />
    </>
  );
}
