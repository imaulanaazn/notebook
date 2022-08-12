import React from 'react';
import Navbar from '../../components/organism/Navbar';
import Footer from '../../components/organism/Footer';
import AuthorProfile from '../../components/organism/AuthorProfile';
import ReadAuthorBlogs from '../../components/organism/ReadAuthorBlogs';

export default function aboutAuthor() {
  return (
    <>
      <Navbar />
      <AuthorProfile />
      <ReadAuthorBlogs />
      <Footer />
    </>
  );
}
