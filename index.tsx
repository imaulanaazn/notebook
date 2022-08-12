import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

export default function PopularPostedCard() {
  return (
    <Box className="featured-card3" sx={{ paddingLeft: '1.688rem' }}>
      <Typography
        sx={{
          fontWeight: '400', fontSize: '0.75rem', display: 'inline-block', backgroundColor: '#E8F3F3', color: '#666666', padding: '.1rem .7rem', borderRadius: '3px',
        }}
      >
        Travel
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: '1.063rem', fontStyle: 'normal', fontWeight: '500', margin: ' 0.5rem 0 1.188rem',
        }}
      >
        Set Video Playback Speed With Javascript
      </Typography>
      <Stack direction="row">
        <Stack direction="row">
          <img src="img/author.png" alt="" style={{ width: '1rem', height: '1rem' }} />
          <Typography sx={{
            color: '#777777', fontWeight: '400', fontSize: '0.75rem', margin: '0 .5rem',
          }}
          >
            Jenni Kiaa
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ borderLeft: '1px solid #999999', borderRight: '1px solid #999999', padding: '0 .5rem' }}>
          <img src="icon/calendar.svg" alt="" style={{ width: '.8rem' }} />
          <Typography sx={{
            color: '#777777', fontWeight: '400', fontSize: '0.75rem', marginLeft: '.5rem',
          }}
          >
            02 December 2022
          </Typography>
        </Stack>
        <Stack direction="row">
          <img src="icon/clock.svg" alt="" style={{ width: '.8rem', margin: '0 .5rem' }} />
          <Typography sx={{ color: '#777777', fontWeight: '400', fontSize: '0.75rem' }}>3 Min. To Read</Typography>
        </Stack>
      </Stack>
      <Typography sx={{
        color: '#555555', fontSize: '0.938rem', fontWeight: '400', marginTop: '1.188rem',
      }}
      >
        Did you come here for something in particular or just general Riker-bashing?
        And blowing into
      </Typography>
    </Box>
  );
}
