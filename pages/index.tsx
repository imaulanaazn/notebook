import type { NextPage } from 'next';
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
import TodaysUpdate from '../components/organism/TodaysUpdate/TodaysUpdate';
import InstagramPosts from '../components/organism/InstagramPosts/InstagramPosts';
import SearchWithTags from '../components/organism/SearchWIthTags/SearchWithTags';

const Home: NextPage = () => (
  <>
    <Navbar />
    <main>
      <Box
        className="jumbotron"
        sx={{
          backgroundColor: '#F2F8F7', display: 'flex', padding: { md: '6rem  3rem  ', sm: '5.5rem  3rem 0 ', xs: '3rem 1.5rem 0' }, height: { md: '44rem' }, flexDirection: { md: 'row', xs: 'column' },
        }}
      >
        <Featured />
        <PopularAside />
      </Box>
      <Box className="main-content" sx={{ display: 'flex', padding: { md: '6rem  3rem  ', sm: '5.5rem  3rem', xs: '3rem 1.5rem' }, flexDirection: { md: 'row', xs: 'column' } }}>
        <RecentlyPosted />
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
);

export default Home;
// https://newsapi.org/v2/everything?q=featured&from=2022-08-01&apiKey=67e3e73e223f4b1ca32ee2bb447ccd93
