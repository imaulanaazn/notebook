import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

export default function PopularPostedCard(params) {
  const {
    label, title, profilePic, name, date, timeToRead, content,
  } = params;
  return (
    <Box className="featured-card3" sx={{ paddingLeft: { md: '1.688rem' } }}>
      <Typography
        sx={{
          fontWeight: '400', fontSize: '0.74rem', display: 'inline-block', backgroundColor: '#E8F3F3', color: '#666666', padding: '.1rem .7rem', borderRadius: '3px',
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: '1.063rem', fontStyle: 'normal', fontWeight: '500', margin: ' 0.5rem 0 1.188rem',
        }}
      >
        {title}
      </Typography>
      <Stack direction="row">
        <Stack direction="row">
          <img src={profilePic} alt="" style={{ width: '1rem', height: '1rem' }} />
          <Typography sx={{
            color: '#777777', fontWeight: '400', fontSize: '0.74rem', margin: '0 .5rem',
          }}
          >
            {name}
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ borderLeft: '1px solid #999999', borderRight: '1px solid #999999', padding: '0 .5rem' }}>
          <img src="icon/calendar.svg" alt="" style={{ width: '.8rem' }} />
          <Typography sx={{
            color: '#777777', fontWeight: '400', fontSize: '0.74rem', marginLeft: '.5rem',
          }}
          >
            {date}
          </Typography>
        </Stack>
        <Stack direction="row">
          <img src="icon/clock.svg" alt="" style={{ width: '.8rem', margin: '0 .5rem' }} />
          <Typography sx={{ color: '#777777', fontWeight: '400', fontSize: '0.74rem' }}>
            {timeToRead}
            Min. To Read
          </Typography>
        </Stack>
      </Stack>
      <Typography sx={{
        color: '#555555', fontSize: '0.84rem', fontWeight: '400', marginTop: '1.188rem',
      }}
      >
        {content.length < 200 ? content : `${content.substring(0, 120)}....`}
      </Typography>
    </Box>
  );
}
