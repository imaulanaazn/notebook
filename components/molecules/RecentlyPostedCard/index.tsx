import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

export default function RecentlyPostedCard(param:any) {
  const {
    label, title, name, date, content,
  } = param;
  return (
    <Box
      className="blog"
      sx={{
        display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', margin: '2.5rem 0',
      }}
    >
      <Box
        className="thumb"
        sx={{
          width: { sm: '40%', xs: '100%' }, height: '13rem', backgroundColor: '#D9D9D9', borderRadius: '0.438rem',
        }}
      />
      <Box sx={{ width: { sm: '56%', xs: '100%' } }}>
        <Typography
          sx={{
            fontWeight: '400', fontSize: { md: '0.74rem', sm: '0.8rem' }, display: 'inline-block', backgroundColor: '#E8F3F3', color: '#666666', padding: '.1rem .7rem', borderRadius: '3px', marginBottom: '0.344rem', marginTop: { xs: '1rem' },
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { md: '1.55rem', xs: '1.4rem' }, fontStyle: 'normal', fontWeight: '600', margin: '.8rem 0',
          }}
        >
          {title}
        </Typography>
        <Stack direction="row">
          <Stack direction="row">
            <img src="img/author.png" alt="" style={{ width: '1rem', height: '1rem' }} />
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
            <Typography sx={{ color: '#777777', fontWeight: '400', fontSize: '0.74rem' }}>3 Min. To Read</Typography>
          </Stack>
        </Stack>
        <Typography sx={{
          color: '#555555', fontSize: '0.84rem', fontWeight: '400', marginTop: '1.188rem',
        }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
