import React from 'react';
import Navbar from '../../components/organism/Navbar';
import Footer from '../../components/organism/Footer';
import AuthorProfile from '../../components/organism/AuthorProfile';
import ReadAuthorBlogs from '../../components/organism/ReadAuthorBlogs';
import { authors } from '../../dummyData';

export default function aboutAuthor({ name, authorBlogs }:any) {
  return (
    <>
      <Navbar />
      <AuthorProfile name={name} />
      <ReadAuthorBlogs name={name} authorBlogs={authorBlogs} />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = authors.map((author) => ({ params: { name: author.name } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }:any) {
  // Fetch necessary data for the blog post using params.id\
  const authorBlogsRes = await fetch(`https://newsapi.org/v2/everything?q=recently-posted&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`);
  const authorBlogs = await authorBlogsRes.json();
  return {
    props: { name: params, authorBlogs },
    revalidate: 60 * 60 * 24,
  };
}
