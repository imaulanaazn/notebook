import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';

export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <Box sx={{ textAlign: 'center', margin: '5rem 0' }}>
        <Typography variant="h1" sx={{ fontWeight: '700', fontSize: { sm: '12rem', xs: '8rem' }, color: '#00AAA1' }}>404</Typography>
        <Typography sx={{ textTransform: 'capitalize', fontWeight: '400', marginBottom: '1.5rem' }}>the page you are looking for does not exist!</Typography>
        <Link href="/" underline="none" sx={{ color: '#00AAA1', fontWeight: '500' }}>
          <i className="fa-solid fa-arrow-left-long" style={{ marginRight: '.6rem' }} />
          Back To Homepage
        </Link>
      </Box>
      <Footer />
    </>
  );
}
