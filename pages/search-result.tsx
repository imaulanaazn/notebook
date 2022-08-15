import React, { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';
import RecentlyPostedCard from '../components/molecules/RecentlyPostedCard';

let wordToSearch:string;

export default function SearchResult({ blogs }:any) {
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => { setSearchValue(sessionStorage.getItem('searchValue')); });
  useEffect(() => { wordToSearch = searchValue; }, [searchValue]);
  console.log(wordToSearch);
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
            <Typography variant="caption" sx={{ fontWeight: '500', color: '#222222', fontSize: '1rem' }}>{searchValue}</Typography>
          </Typography>
          <Box sx={{
            width: '100%', height: '1px', backgroundColor: '#C4C4C4', transform: 'translateY(-2px)',
          }}
          />
        </Box>
        <Box className="blogs" sx={{ width: { md: '70%', xs: '100%' } }}>
          {blogs.articles.slice(0, 50).map((blog:any) => (
            <RecentlyPostedCard
              label={blog.source.name}
              title={blog.title}
              name={blog.author}
              date="12 december 2012"
              content={blog.description}
              imgUrl={blog.urlToImage}
            />
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://newsapi.org/v2/everything?q=${wordToSearch}&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`);
  const blogs = await res.json();

  // Pass data to the page via props
  return { props: { blogs } };
}
