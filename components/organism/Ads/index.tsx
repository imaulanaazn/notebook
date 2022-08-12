import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Ads() {
  return (
    <Box sx={{
      color: 'white', backgroundColor: '#00AAA1', position: 'relative', padding: '4rem 1.5rem', marginBottom: { sm: '5rem', xs: '1.6rem' },
    }}
    >
      <Typography sx={{
        textAlign: 'right', position: 'absolute', top: '.1rem', right: '.5rem',
      }}
      >
        Ad
      </Typography>
      <Typography variant="h1" sx={{ fontSize: '1.5rem', fontWeight: '400', width: '70%' }}>
        want to travel sikkim by car?
      </Typography>
      <Typography sx={{
        fontSize: '.84rem', fontWeigth: '300', margin: '1rem 0', width: '78%',
      }}
      >
        Did you come here for something in particular
        or just general Riker-bashing? And blowing into
      </Typography>
      <Button
        className="adsVisitBtn"
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: 'white', color: '#00AAA1', fontWeight: '300', textTransform: 'capitalize', fontSize: '.9rem', padding: '.2rem 1.2rem ',
        }}
      >
        Visit Us
      </Button>
    </Box>
  );
}
