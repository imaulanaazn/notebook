import React from 'react';
import { Box, Stack } from '@mui/material';
import Title from '../../atoms/Title';
import TodaysUpdateBox from '../../molecules/TodaysUpdateBox';

export default function TodaysUpdate() {
  return (
    <Box sx={{ marginBottom: { sm: '5rem', xs: '1.6rem' } }}>
      <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Today's" secondTitle="Update" />
      <Stack direction="column" />
      <Stack direction="row" className="flex-container" sx={{ gap: '1.5rem' }}>
        <TodaysUpdateBox total={Math.floor(Math.random() * 20)} statsTitle="New Posts" />
        <TodaysUpdateBox total={Math.floor(Math.random() * 100)} statsTitle="Total Visitors" />
      </Stack>
      <Stack direction="row" className="flex-container" sx={{ gap: '1.5rem', marginTop: '1.5rem' }}>
        <TodaysUpdateBox total={Math.floor(Math.random() * 20)} statsTitle="New Subscribers" />
        <TodaysUpdateBox total={Math.floor(Math.random() * 100)} statsTitle="Blog Read" />
      </Stack>
    </Box>
  );
}
