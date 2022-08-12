import React from 'react';
import {
  Box, Typography, Stack, Link,
} from '@mui/material';

export default function HowToWrite() {
  return (
    <Box sx={{ textAlign: 'center', padding: { md: '6rem 0', xs: '6rem 1rem' } }}>
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
          How can you earn
        </Typography>
        by writing on medium
      </Typography>
      <Stack
        direction="row"
        sx={{
          flexDirection: { sm: 'row', xs: 'column' }, padding: { md: '0 4rem', sm: '0 3rem' }, gap: { md: '4rem', sm: '3rem' }, margin: { md: '4rem 0', sm: '3rem 0', xs: '2rem 0' },
        }}
      >
        <Box sx={{ flex: '1', marginTop: { xs: '2rem' } }}>
          <Typography variant="h2" sx={{ fontSize: '1.3rem', fontWeight: '500', marginBottom: '1.5rem' }}>By Ad Revinue</Typography>
          <Typography sx={{
            fontSize: '0.938rem', color: '#555555',
          }}
          >
            Dynamically underwhelm integrated outsourcing via timely models.
            Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change.
            Completely streamline functionalized models and out-of-the-box functionalities.
          </Typography>
        </Box>
        <Box sx={{ flex: '1', marginTop: { xs: '2rem' } }}>
          <Typography variant="h2" sx={{ fontSize: '1.3rem', fontWeight: '500', marginBottom: '1.5rem' }}>by affiliate  programme</Typography>
          <Typography sx={{
            fontSize: '0.938rem', color: '#555555',
          }}
          >
            Dynamically underwhelm integrated outsourcing via timely models. Rapidiously
            reconceptualize visionary imperatives without 24/365 catalysts for change.
            Completely streamline functionalized models and out-of-the-box functionalities.
            Authoritatively target proactive vortals vis-a-vis exceptional results.
            Compellingly brand
          </Typography>
        </Box>
      </Stack>
      <Typography variant="h2" sx={{ fontSize: '1.3rem', fontWeight: '500', marginBottom: '1.5rem' }}>Want To Know More?</Typography>
      <Link href="/write" underline="none" sx={{ color: '#00AAA1', fontSize: '0.938rem' }}>
        Go to FEQ page
        {' '}
        <i className="fa-solid fa-arrow-right-long" />
      </Link>
    </Box>
  );
}
