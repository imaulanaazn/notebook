
import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/organism/Navbar';
import Featured from '../components/organism/Featured';
import Footer from '../components/organism/Footer';
import PopularAside from '../components/organism/PopularAside';
import TopAuthor from '../components/organism/TopAuthor';
import RecentlyPosted from '../components/organism/RecentlyPosted';
import Ads from '../components/organism/Ads';
import Categories from '../components/organism/Categories/Categories';
import InstagramPosts from '../components/organism/InstagramPosts/InstagramPosts';
import SearchWithTags from '../components/organism/SearchWIthTags/SearchWithTags';
import TodaysUpdate from '../components/organism/TodaysUpdate/TodaysUpdate';

export default function Home( {featuredData, latestBlogData, popularBlogs} : any ) {
  return(
  <>
    <Navbar />
    <main>
      <Box
        className="jumbotron"
        sx={{
          backgroundColor: '#F2F8F7', display: 'flex', padding: { md: '6rem  3rem  ', sm: '5.5rem  3rem 0 ', xs: '3rem 1.5rem 0' }, height: { md: '44rem' }, flexDirection: { md: 'row', xs: 'column' },
        }}
      >
        <Featured featuredData={featuredData} />
        <PopularAside popularBlogs={popularBlogs} />
      </Box>
      <Box className="main-content" sx={{ display: 'flex', padding: { md: '6rem  3rem  ', sm: '5.5rem  3rem', xs: '3rem 1.5rem' }, flexDirection: { md: 'row', xs: 'column' } }}>
        <RecentlyPosted latestBlogData={latestBlogData} />
        <Box sx={{ width: { lg: '32%', md: '38%' } }}>
          <TopAuthor />
          <Ads />
          <Categories />
          <TodaysUpdate />
          <InstagramPosts />
          <SearchWithTags />
        </Box>
      </Box>
    </main>
    <Footer />
  </>
)}
export async function getServerSideProps() {
  // Fetch data from external API
  const [featuredRes, latestBlogRes, popularBlogRes] = await Promise.all([
    fetch(`https://newsapi.org/v2/everything?q=featured&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`),
    fetch(`https://newsapi.org/v2/everything?q=recently-posted&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`),
    fetch(`https://newsapi.org/v2/everything?q=recently-posted&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`),
  ]);
  const [featuredData, latestBlogData, popularBlogs] = await Promise.all([
    featuredRes.json(),
    latestBlogRes.json(),
    popularBlogRes.json(),
  ]);

  // Pass data to the page via props
  return { props: { featuredData, latestBlogData, popularBlogs } };
}