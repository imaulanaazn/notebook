import React from 'react';
import {
  Box, Typography, Link,
} from '@mui/material';
import AboutAuthorCard from '../../molecules/AboutAuthorCard';

export default function MeetOurAuthor() {
  return (
    <Box sx={{ textAlign: 'center', padding: '5rem 0' }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { md: '1.6rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '500', marginBottom: '2rem',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: { md: '1.8rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '500', marginRight: '.4rem', backgroundColor: '#00AAA1', color: 'white',
          }}
        >
          Meet
        </Typography>
        Our Authors
      </Typography>
      <Box sx={{
        display: 'grid', width: { sm: '70%', xs: '90%' }, margin: '0 auto 4rem', gridGap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(21rem,1fr))',
      }}
      >
        <AboutAuthorCard name="Maria Jenin" totalPosts={Math.floor(Math.random() * 50)} />
        <AboutAuthorCard name="enna lee" totalPosts={Math.floor(Math.random() * 50)} />
        <AboutAuthorCard name="simon D’silva" totalPosts={Math.floor(Math.random() * 50)} />
        <AboutAuthorCard name="asa agarwal" totalPosts={Math.floor(Math.random() * 50)} />
        <AboutAuthorCard name="simon D’silva" totalPosts={Math.floor(Math.random() * 50)} />
        <AboutAuthorCard name="Maria Jenin" totalPosts={Math.floor(Math.random() * 50)} />
      </Box>
      <Box
        className="write-box"
        sx={{
          textAlign: 'center', backgroundColor: '#F2F8F7', height: '14rem', width: { sm: '80%', xs: '90%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: { md: '.4rem auto', xs: '.4rem auto' },
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: '500', fontSize: '1.4rem' }}>
          want to write on notebook?
        </Typography>
        <Typography sx={{ fontSize: '.9rem', color: '#555555', margin: { md: '1.2rem 0', xs: '1.2rem 2rem' } }}>
          there have some simple steps, by following these
          steps you can be a regular author in notebook
        </Typography>
        <Link
          href="/write"
          underline="none"
          sx={{
            color: '#00AAA1', border: '1px solid #00AAA1', fontWeight: '400', textTransform: 'capitalize', alignSelf: 'center', padding: '.5rem 1rem', borderRadius: '4px',
          }}
        >
          <img src="icon/edit-green.svg" alt="" />
          Write on notebook
        </Link>
      </Box>
    </Box>
  );
}
