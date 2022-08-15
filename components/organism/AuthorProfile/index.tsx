import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { authors } from '../../../dummyData';

export default function AuthorProfile({ name }:any) {
  const authorData:any[] = authors.filter((data) => data.name === name.name);
  return (
    <Stack
      direction="row"
      sx={{
        padding: { sm: '4rem 4rem', xs: '4rem 2rem' }, gap: '1.5rem', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' }, backgroundColor: '#F2F8F7',
      }}
    >
      <Box sx={{ width: { md: '40%', xs: '100%' }, height: { sm: '25rem', xs: '23rem' }, backgroundColor: '#D9D9D9' }}>
        <img src={authorData[0].profilePic} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="author profile" />
      </Box>
      <Box sx={{ width: { md: '60%', xs: '100%' } }}>
        <Typography variant="h1" sx={{ fontWeight: '500', fontSize: '1.8rem', color: '#222222' }}>
          Hi! i’m
          {' '}
          {authorData[0].name}
        </Typography>
        <Typography sx={{
          fontWeight: '400', fontSize: '0.938rem', color: '#555555', margin: '1rem 0',
        }}
        >
          {authorData[0].aboutAuthor}
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: '500', fontSize: '1.2rem', color: '#222222' }}>{authorData[0].authorQuote}</Typography>
        <Typography sx={{ margin: '1rem 0 1.5rem' }}>
          {authorData[0].quoteDesc}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: '500', fontSize: '1.2rem', color: '#222222', marginBottom: '1rem',
          }}
        >
          Follow on social media:
        </Typography>
        <Stack direction="row" sx={{ justifyContent: { md: 'flex-start', xs: 'center' } }}>
          <i className="author-socmed-icon fa-brands fa-facebook" />
          <i className="author-socmed-icon fa-brands fa-square-twitter" />
          <i className="author-socmed-icon fa-brands fa-square-instagram" />
          <i className="author-socmed-icon fa-brands fa-pinterest" />
        </Stack>
      </Box>
    </Stack>
  );
}
