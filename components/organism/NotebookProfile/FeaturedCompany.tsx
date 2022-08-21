import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Stack,
} from '@mui/material';
import { featuredCompanies } from '../../../dummyData';

export default function Featured() {
  const totalData = featuredCompanies.length;
  const [dataPerPage, setDataPerPage] = useState(3);
  const totalPage = Math.ceil(totalData / dataPerPage);
  const [active, setActive] = useState(1);
  const [buttons, setButtons] = useState([] as any);
  const [screenW, setScreenW] = useState(0);
  useEffect(() => {
    setScreenW(window.outerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => { setScreenW(window.outerWidth); });
  });

  useEffect(() => {
    if (screenW <= 600) {
      setDataPerPage(2);
    } else if (screenW <= 900) {
      setDataPerPage(3);
    } else {
      setDataPerPage(5);
    }
  }, [screenW]);

  const setActiveBtn = (e:any) => {
    setActive(Number(e.target.getAttribute('id')));
  };

  useEffect(() => {
    const tempButtons:any[] = [];
    for (let i = 0; i < totalPage; i += 1) {
      tempButtons.push(
        <Box
          sx={{
            width: '14px', height: '7px', backgroundColor: '#C4D1D1', margin: '0 4px', borderRadius: '3px',
          }}
          id={`${i}`}
          className={`pagination-btn ${active === i ? 'active' : 'not-active'}`}
          onClick={() => { setActiveBtn(event); }}
          key={i}
        />,
      );
    }
    setButtons([...tempButtons]);
  }, [active, totalPage]);
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { md: '1.6rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '500',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: { md: '1.8rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '500', marginRight: '.4rem', backgroundColor: '#00AAA1', color: 'white',
          }}
        >
          We are
        </Typography>
        featured on
      </Typography>

      <Stack
        direction="row"
        sx={{
          width: '80%',
          margin: '2rem auto',
          alignItems: 'center',
          gap: '4rem',
        }}
      >
        {
        featuredCompanies.slice(dataPerPage * (active), dataPerPage * (active) + dataPerPage)
          .map((imgUrl:any, index:number) => (
            <Box sx={{ flex: '1' }} key={`button${index}`}>
              <img className="featured-icon" src={imgUrl} alt="" />
            </Box>
          ))
        }
      </Stack>
      <Stack className="pagination-button" direction="row" sx={{ height: { md: '15%', xs: '13%' }, justifyContent: 'center', alignItems: 'center' }}>
        {buttons}
      </Stack>
    </Box>
  );
}
