import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Title from '../../atoms/Title';

export default function Categories() {
  return (
    <Box sx={{ marginBottom: { sm: '5rem', xs: '1.6rem' } }}>
      <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Categories" secondTitle="" />
      <Stack
        direction="row"
        sx={{
          width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #D1E7E5', marginTop: '.6rem', paddingBottom: '.6rem',
        }}
      >
        <Typography sx={{ fontSize: '0.9rem' }}>Breaking News</Typography>
        <Typography sx={{ fontSize: '0.9rem' }}>{8}</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #D1E7E5', marginTop: '.6rem', paddingBottom: '.6rem',
        }}
      >
        <Typography sx={{ fontSize: '0.9rem' }}>Science</Typography>
        <Typography sx={{ fontSize: '0.9rem' }}>{10}</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #D1E7E5', marginTop: '.6rem', paddingBottom: '.6rem',
        }}
      >
        <Typography sx={{ fontSize: '0.9rem' }}>World</Typography>
        <Typography sx={{ fontSize: '0.9rem' }}>{3}</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #D1E7E5', marginTop: '.6rem', paddingBottom: '.6rem',
        }}
      >
        <Typography sx={{ fontSize: '0.9rem' }}>Bussines</Typography>
        <Typography sx={{ fontSize: '0.9rem' }}>{5}</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #D1E7E5', marginTop: '.6rem', paddingBottom: '.6rem',
        }}
      >
        <Typography sx={{ fontSize: '0.9rem' }}>Entertainment</Typography>
        <Typography sx={{ fontSize: '0.9rem' }}>{20}</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #D1E7E5', marginTop: '.6rem', paddingBottom: '.6rem',
        }}
      >
        <Typography sx={{ fontSize: '0.9rem' }}>Sports</Typography>
        <Typography sx={{ fontSize: '0.9rem' }}>{14}</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #D1E7E5', marginTop: '.6rem', paddingBottom: '.6rem',
        }}
      >
        <Typography sx={{ fontSize: '0.9rem' }}>Health</Typography>
        <Typography sx={{ fontSize: '0.9rem' }}>{21}</Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          width: '100%', justifyContent: 'space-between', borderBottom: '1px solid #D1E7E5', marginTop: '.6rem', paddingBottom: '.6rem',
        }}
      >
        <Typography sx={{ fontSize: '0.9rem' }}>Technology</Typography>
        <Typography sx={{ fontSize: '0.9rem' }}>{8}</Typography>
      </Stack>
    </Box>
  );
}
