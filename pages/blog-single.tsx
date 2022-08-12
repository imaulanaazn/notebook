import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';
import BlogContent from '../components/organism/BlogContent';
import TopAuthor from '../components/organism/TopAuthor';
import Ads from '../components/organism/Ads';
import Categories from '../components/organism/Categories/Categories';
import TodaysUpdate from '../components/organism/TodaysUpdate/TodaysUpdate';
import InstagramPosts from '../components/organism/InstagramPosts/InstagramPosts';
import SearchWithTags from '../components/organism/SearchWIthTags/SearchWithTags';

export default function BlogSingle() {
  return (
    <>
      <Navbar />
      <main>
        <Box
          className="main-content"
          sx={{
            display: 'flex', gap: '4rem', padding: { md: '6rem  3rem  ', sm: '5.5rem  3rem', xs: '3rem 1.5rem' }, flexDirection: { md: 'row', xs: 'column' },
          }}
        >
          <BlogContent />
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
}
