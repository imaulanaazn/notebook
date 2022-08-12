import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';
import RecentlyPostedCard from '../components/molecules/RecentlyPostedCard';
import data from '../dummyData';

export default function SearchResult() {
  return (
    <>
      <Navbar />
      <Box sx={{ margin: { sm: '4rem 3rem', xs: '3rem 1.5rem' } }}>
        <Box sx={{ marginBottom: { sm: '3rem', xs: '2rem' } }}>
          <Typography sx={{
            fontSize: '1rem', color: '#777777', borderBottom: '3px solid #00AAA1', display: 'inline-block', position: 'relative', zIndex: '10',
          }}
          >
            search result for
            {' '}
            <Typography variant="caption" sx={{ fontWeight: '500', color: '#222222', fontSize: '1rem' }}>travel</Typography>
          </Typography>
          <Box sx={{
            width: '100%', height: '1px', backgroundColor: '#C4C4C4', transform: 'translateY(-2px)',
          }}
          />
        </Box>
        <Box className="blogs" sx={{ width: { md: '70%', xs: '100%' } }}>
          {data.slice(3, 9).map((blog) => (
            <RecentlyPostedCard
              label={blog.label}
              title={blog.title}
              name={blog.name}
              date={blog.date}
              content={blog.content}
            />
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
