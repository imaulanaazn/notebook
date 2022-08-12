import React from 'react';
import {
  Box, Typography, Stack, Link,
} from '@mui/material';

export default function ContactDetails() {
  return (
    <Box sx={{ flex: '1' }}>
      <Typography sx={{ fontSize: '0.938rem', color: '#555555', marginBottom: { md: '3rem', xs: '2rem' } }}>
        Dynamically underwhelm integrated outsourcing
        via timely models. Rapidiously reconceptualize visionary imperatives without
      </Typography>
      <Typography sx={{ fontSize: '0.938rem', color: '#555555' }}>blog.notebook@gmail.com</Typography>
      <Typography sx={{ fontSize: '0.938rem', color: '#555555', margin: '.4rem 0' }}>+886554 654654</Typography>
      <Typography sx={{ fontSize: '0.938rem', color: '#555555' }}>9567 Turner Trace Apt. BC C3G8A4</Typography>
      <Typography sx={{
        fontSize: '0.938rem', color: '#222222', fontWeight: '500', margin: { md: '3rem 0 1rem', xs: '2rem 0 1rem' },
      }}
      >
        Follow on:
      </Typography>
      <Stack direction="row">
        <Link
          className="homeSocmed"
          href="/#"
          sx={{
            width: '1.7rem', height: '1.7rem', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
          }}
        >
          <i className="fa-brands fa-facebook-f" />
        </Link>
        <Link
          className="homeSocmed"
          href="/#"
          sx={{
            width: '1.7rem', height: '1.7rem', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
          }}
        >
          <i className="fa-brands fa-twitter" />
        </Link>
        <Link
          className="homeSocmed"
          href="/#"
          sx={{
            width: '1.7rem', height: '1.7rem', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
          }}
        >
          <i className="fa-brands fa-instagram" />
        </Link>
        <Link
          className="homeSocmed"
          href="/#"
          sx={{
            width: '1.7rem', height: '1.7rem', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
          }}
        >
          <i className="fa-brands fa-pinterest" />
        </Link>
      </Stack>
    </Box>
  );
}
