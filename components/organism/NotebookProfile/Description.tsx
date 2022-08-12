import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Description() {
  return (
    <Box sx={{ padding: { md: '0px 15rem', sm: '0px 8rem' }, textAlign: 'center', marginBottom: '5rem' }}>
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
          Notebook is a place
        </Typography>
        where you can find your perfect blogs
      </Typography>
      <Typography sx={{ fontSize: '0.938rem', color: '#555555' }}>
        Dynamically underwhelm integrated outsourcing via timely models.
        Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change.
        Completely streamline functionalized models and out-of-the-box functionalities.
        Authoritatively target proactive vortals vis-a-vis exceptional results.
        Compellingly brand emerging sources and compelling materials.
        Globally iterate parallel content
      </Typography>
      <Typography sx={{
        fontSize: '1.2rem', color: '#222222', fontWeight: '500', margin: '1.6rem 0 1.2rem',
      }}
      >
        The best ideas can change who we are.
      </Typography>
      <Typography sx={{ fontSize: '0.938rem', color: '#555555' }}>
        Dynamically underwhelm integrated outsourcing via timely models.
        Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for
      </Typography>
    </Box>
  );
}
