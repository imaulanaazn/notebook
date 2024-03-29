import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

interface PopularPostedCardProps{
  label:string,
   title:string,
   name:string,
   date:string,
   timeToRead:number,
   content:string,
  url: string
}

export default function PopularPostedCard(params:PopularPostedCardProps) {
  const {
    label, title, name, date, timeToRead, content, url
  } = params;
  return (
    <a href={url} target="_blank" rel="noreferrer">
    <Box className="featured-card3" sx={{ paddingLeft: { md: '1.688rem' } }}>
      <Typography
        sx={{
          fontWeight: '400', fontSize: {xs:'0.74rem',md:'0.7rem'}, display: 'inline-block', backgroundColor: '#E8F3F3', color: '#666666', padding: '.1rem .7rem', borderRadius: '3px',
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontSize: {xs:'1.063rem',md:'1rem'}, fontStyle: 'normal', fontWeight: '500', margin: ' 0.5rem 0 1.188rem',
        }}
      >
        {title}
      </Typography>
      <Stack direction="row">
        <Stack direction="row">
          <Typography sx={{
            color: '#777777', fontWeight: '400', fontSize: {xs:'0.74rem',md:'0.7rem'}, margin: '0 .5rem',
          }}
          >
            {name}
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ borderLeft: '1px solid #999999', borderRight: '1px solid #999999', padding: '0 .5rem' }}>
          <img src="icon/calendar.svg" alt="" style={{ width: '.8rem' }} />
          <Typography sx={{
            color: '#777777', fontWeight: '400', fontSize: {xs:'0.74rem',md:'0.7rem'}, marginLeft: '.5rem',
          }}
          >
            {date}
          </Typography>
        </Stack>
        <Stack direction="row">
          <img src="icon/clock.svg" alt="" style={{ width: '.8rem', margin: '0 .5rem' }} />
          <Typography sx={{ color: '#777777', fontWeight: '400', fontSize: {xs:'0.74rem',md:'0.7rem'} }}>
            {timeToRead}
            Min. To Read
          </Typography>
        </Stack>
      </Stack>
      <Typography sx={{
        color: '#555555', fontSize: {xs:'0.84rem',md:'0.8rem'}, fontWeight: '400', marginTop: '1.188rem',
      }}
      >
        {content.length < 200 ? content : `${content.substring(0, 100)}....`}
      </Typography>
    </Box>
    </a>
  );
}
