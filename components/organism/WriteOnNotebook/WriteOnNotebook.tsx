import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function WriteOnNotebook() {
  return (
    <Box sx={{
      textAlign: 'center', padding: { md: '6rem 29%', sm: '6rem 12%', xs: '6rem 1%' }, backgroundColor: '#F2F8F7',
    }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { md: '2rem', sm: '1.5rem', xs: '1.4rem' }, fontWeight: '500',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: { md: '2.2rem', sm: '1.5rem', xs: '1.4rem' }, fontWeight: '500', marginRight: '.4rem', backgroundColor: '#00AAA1', color: 'white',
          }}
        >
          <img className="write-edit-icon" src="icon/edit-white.svg" alt="" />
          Write On
        </Typography>
        Notebook
      </Typography>
      <Typography sx={{
        fontSize: { sm: '1.2rem', xs: '1.1rem' }, color: '#222222', fontWeight: '500', margin: '1.6rem 0 .6rem',
      }}
      >
        Write on notebook is very simple
      </Typography>
      <Typography sx={{ fontSize: '0.938rem', color: '#555555' }}>Go to your mail and start typing your article with title & categories, attached your image/video file (if have).</Typography>
      <Typography sx={{
        fontSize: { sm: '1.2rem', xs: '1.1rem' }, color: '#222222', fontWeight: '500', margin: '1.6rem 0 .1rem',
      }}
      >
        type your personal information.
      </Typography>
      <Typography sx={{ fontSize: '0.938rem', color: '#555555' }}>(Name, Occupation, Address, Social media links)</Typography>
      <Typography sx={{ fontSize: '1rem', color: '#555555', margin: '1.6rem 0' }}>
        Send it on:
        <Typography variant="caption" sx={{ fontSize: { sm: '1.1rem', xs: '1rem' }, color: '#222222', fontWeight: '500' }}>blog.notebook@gmail.com</Typography>
      </Typography>
      <Button
        variant="outlined"
        sx={{
          color: '#00AAA1', borderColor: '#00AAA1', textTransform: 'capitalize', padding: { sm: '.4rem 1rem', xs: '.3rem .6rem' }, fontWeight: '400', fontSize: { sm: '1.15rem', xs: '1.1rem' }, borderWidth: '1.5px', borderRadius: '6px',
        }}
      >
        Go To Your Mail
      </Button>
    </Box>
  );
}
