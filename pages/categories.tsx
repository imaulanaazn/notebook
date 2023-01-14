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
          <CategoriesCard title="breaking news" iconClass="fa-brands fa-pagelines" topic="breaking-news"/>
          <CategoriesCard title="science" iconClass="fa-solid fa-microchip" topic="science"/>
          <CategoriesCard title="world" iconClass="fa-solid fa-vest" topic="world"/>
          <CategoriesCard title="business" iconClass="fa-solid fa-camera-retro" topic="business"/>
          <CategoriesCard title="technology" iconClass="fa-solid fa-plate-wheat" topic="technology"/>
          <CategoriesCard title="entertainment" iconClass="fa-solid fa-plane" topic="entertainment"/>
          <CategoriesCard title="sports" iconClass="fa-solid fa-heart-pulse " topic="sports"/>
          <CategoriesCard title="health" iconClass="fa-solid fa-heart-pulse " topic="health"/>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

// export async function getServerSideProps() {
//   console.log('apa');
//   // Fetch data from external API
//   const res = await fetch('https://newsapi.org/v2/everything?q=featured&from=2022-08-01&apiKey=67e3e73e223f4b1ca32ee2bb447ccd93');
//   const newsData = await res.json();
//   console.log('apa');

//   // Pass data to the page via props
//   return { props: { newsData } };
// }
