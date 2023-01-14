import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';
import CategoriesCard from '../components/atoms/CategoriesCard';
import Script from 'next/script';

export default function Categories() {
  return (
    <> 
      <Script async src="https://kit.fontawesome.com/490a850dc0.js" crossOrigin="anonymous"></Script>
      <Navbar />
      <Box sx={{ padding: { sm: '4rem 4rem 5rem', xs: '3rem 2rem 5rem' } }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '1.8rem', fontWeight: '500', textAlign: 'center', marginBottom: '3rem',
          }}
        >
          Categories
        </Typography>
        <Box sx={{
          display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <CategoriesCard title="Breaking News" iconClass="fa-solid fa-newspaper" topic="breaking-news"/>
          <CategoriesCard title="Science" iconClass="fa-solid fa-flask" topic="science"/>
          <CategoriesCard title="World" iconClass="fa-solid fa-earth-americas" topic="world"/>
          <CategoriesCard title="Business" iconClass="fa-solid fa-business-time" topic="business"/>
          <CategoriesCard title="Technology" iconClass="fa-solid fa-microchip" topic="technology"/>
          <CategoriesCard title="Entertainment" iconClass="fa-solid fa-camera-movie" topic="entertainment"/>
          <CategoriesCard title="Sports" iconClass="fa-solid fa-sportsball" topic="sports"/>
          <CategoriesCard title="Health" iconClass="fa-solid fa-heart-pulse " topic="health"/>
        </Box>
      </Box>
      <Footer />
    </>
  );
}