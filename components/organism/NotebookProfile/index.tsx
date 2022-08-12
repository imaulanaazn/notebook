import React from 'react';
import { Box } from '@mui/material';
import Description from './Description';
import FeaturedCompany from './FeaturedCompany';

export default function NotebookProfile() {
  return (
    <Box sx={{ padding: { md: '4rem 0 8rem', xs: '4rem 1.4rem 8rem' }, backgroundColor: '#F2F8F7' }}>
      <Description />
      <FeaturedCompany />
    </Box>
  );
}
