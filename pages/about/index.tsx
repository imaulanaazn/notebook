import React from 'react';
import Footer from '../../components/organism/Footer';
import Navbar from '../../components/organism/Navbar';
import NotebookProfile from '../../components/organism/NotebookProfile';
import MeetOurAuthor from '../../components/organism/MeetOurAuthor';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <NotebookProfile />
      <MeetOurAuthor />
      <Footer />
    </>
  );
}
