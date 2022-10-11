import React from 'react';
import { Typography } from '@mui/material';

interface TitleProps{
  marginBottom:object,
  mainTitle:string,
  secondTitle:string
}

export default function Title(props:TitleProps) {
  const { marginBottom, mainTitle, secondTitle } = props;
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { md: '1.313rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '600', marginBottom: { ...marginBottom },
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontSize: { md: '1.313rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '600', marginRight: '.4rem', backgroundColor: '#00AAA1', color: 'white',
        }}
      >
        {mainTitle}
      </Typography>
      {secondTitle}
    </Typography>
  );
}
