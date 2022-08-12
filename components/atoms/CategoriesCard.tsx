import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';

export default function CategoriesCard({ title, iconClass }) {
  const [activeClass, setActiveClass] = useState('');
  return (
    <Stack
      className={`categories-card ${activeClass}`}
      onClick={() => { setActiveClass(activeClass === 'active' ? '' : 'active'); }}
      sx={{
        minWidth: '15rem', height: '10rem', backgroundColor: '#E8F3F3', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', borderRadius: '6px',
      }}
    >
      <i className={`${iconClass} categories-icon`} />
      <Typography variant="h2" sx={{ fontSize: '1rem', fontWeight: '400' }}>{title}</Typography>
    </Stack>
  );
}
