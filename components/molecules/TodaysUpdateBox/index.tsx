import React from 'react';
import { Stack, Typography } from '@mui/material';

export default function TodaysUpdateBox(params) {
  const { total, statsTitle } = params;
  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: '#F2F8F7', borderRadius: '.6rem', flex: '1', height: { md: '7rem', sm: '11rem', xs: '6rem' }, justifyContent: 'center', alignItems: 'center',
      }}
    >
      <Typography variant="h3" sx={{ fontSize: { md: '1.6rem', sm: '1.8rem', xs: '2rem' }, fontWeight: '600', color: '#00AAA1' }}>{total}</Typography>
      <Typography sx={{ fontSize: { md: '.9rem', sm: '1rem' }, color: '#222222' }}>{statsTitle}</Typography>
    </Stack>
  );
}
