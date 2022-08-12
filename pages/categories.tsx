import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';
import CategoriesCard from '../components/atoms/CategoriesCard';

export default function Categories({ newsData }) {
  console.log(newsData);
  return (
    <>
      <Navbar />
      <Box sx={{ padding: { sm: '4rem 4rem', xs: '3rem 2rem' } }}>
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
          <CategoriesCard title="Environment & Nature" iconClass="fa-brands fa-pagelines" />
          <CategoriesCard title="Technology" iconClass="fa-solid fa-microchip" />
          <CategoriesCard title="Lifestyle & Fashion" iconClass="fa-solid fa-vest" />
          <CategoriesCard title="Photography" iconClass="fa-solid fa-camera-retro" />
          <CategoriesCard title="Food" iconClass="fa-solid fa-plate-wheat" />
          <CategoriesCard title="Holiday & Travel" iconClass="fa-solid fa-plane" />
          <CategoriesCard title="Healthcare<" iconClass="fa-solid fa-heart-pulse " />
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  console.log('apa');
  // Fetch data from external API
  const res = await fetch('https://newsapi.org/v2/everything?q=featured&from=2022-08-01&apiKey=67e3e73e223f4b1ca32ee2bb447ccd93');
  const newsData = await res.json();
  console.log('apa');

  // Pass data to the page via props
  return { props: { newsData } };
}
