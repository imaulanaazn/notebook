import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import ContactForm from '../components/organism/ContactForm';
import ContactDetails from '../components/organism/ContactDetails';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <Box sx={{ margin: { sm: '5rem 4rem', xs: '4rem 1rem' } }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { md: '1.6rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '500', marginBottom: '3rem', textAlign: 'center',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: { md: '1.8rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '500', marginRight: '.4rem', backgroundColor: '#00AAA1', color: 'white',
            }}
          >
            Contact
          </Typography>
          Us
        </Typography>
        <Stack direction="row" sx={{ gap: '4rem', flexDirection: { md: 'row', xs: 'column' } }}>
          <ContactForm />
          <ContactDetails />
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
