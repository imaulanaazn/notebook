import React from 'react';
import { Stack, Box, Typography } from '@mui/material';

interface AboutAuthorCardProps {
  name:string,
  totalPosts:number,
  profilePic:string
}
export default function AboutAuthorCard(params:AboutAuthorCardProps) {
  const { name, totalPosts, profilePic } = params;
  return (
    <Stack direction="row" className="about-authors-card" sx={{ justifyContent: 'space-between' }}>
      <Box className="about-author-profile" sx={{ width: { md: '40%', sm: '32%', xs: '40%' }, height: '8.5rem', backgroundColor: '#D9D9D9' }}>
        <img src={profilePic} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <Stack sx={{ textAlign: 'left', justifyContent: 'space-evenly', width: '55%' }}>
        <Typography variant="h2" sx={{ fontSize: { sm: '1.3rem', xs: '1.2rem' }, fontWeight: '500' }}>{name}</Typography>
        <Typography sx={{ fontSize: '.9rem', fontWeight: '400', color: '#777777' }}>
          {totalPosts}
          {' '}
          posts
        </Typography>
        <a href={`/about/${name}`} style={{ fontSize: '.9rem', fontWeight: '400', color: '#00AAA1' }}>See details about author</a>
      </Stack>
    </Stack>
  );
}
