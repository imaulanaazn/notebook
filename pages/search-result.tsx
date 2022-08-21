import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';
import RecentlyPostedCard from '../components/molecules/RecentlyPostedCard';

export default function SearchResult() {
  const [searchedWord, setSearchedWord] = useState('');
  const [blogResult, setBlogResult] = useState([]);
  useEffect(() => { setSearchedWord(sessionStorage.getItem('searchValue') ?? ''); });
  useEffect(() => {
    if (searchedWord) {
      const fetchData = async () => {
        const data = await fetch(`https://newsapi.org/v2/everything?q=${searchedWord}&from=2022-08-01&apiKey=${process.env.NEXT_PUBLIC_NEWSAPI_KEY}`);
        const result = await data.json();
        setBlogResult(result?.articles?.slice(1, 40));
      };
      fetchData();
    }
  }, [searchedWord]);

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
            <Typography variant="caption" sx={{ fontWeight: '500', color: '#222222', fontSize: '1rem' }}>{searchedWord}</Typography>
          </Typography>
          <Box sx={{
            width: '100%', height: '1px', backgroundColor: '#C4C4C4', transform: 'translateY(-2px)',
          }}
          />
        </Box>
        <Box className="blogs" sx={{ width: { md: '70%', xs: '100%' } }}>
          {blogResult?.map((blog:any) => (
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
