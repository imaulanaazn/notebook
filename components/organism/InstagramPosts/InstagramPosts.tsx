import React from 'react';
import { Box, Link } from '@mui/material';
import Title from '../../atoms/Title';

export default function InstagramPosts() {
  return (
    <Box sx={{ marginBottom: { sm: '5rem', xs: '1.6rem' } }}>
      <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Instagram" secondTitle="Posts" />
      <Box sx={{
        display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gridGap: '.8rem',
      }}
      >
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9',
          }}
        >
          <img src="./img/bitcoin-invest.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9',
          }}
        >
          <img src="./img/chip.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9',
          }}
        >
          <img src="./img/footbal.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9',
          }}
        >
          <img src="./img/mars-explor.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', borderRadius: '5px', backgroundColor: '#D9D9D9', position: 'relative',
          }}
        >
          <i
            className="fa-brands fa-instagram"
            style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '1.3rem', color: 'white',
            }}
          />
          <img src="./img/author.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9',
          }}
        >
          <img src="./img/nanobot.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9',
          }}
        >
          <img src="./img/seo-writer.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9',
          }}
        >
          <img src="./img/travel.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9',
          }}
        >
          <img src="./img/traveling-tips.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </Link>
      </Box>
    </Box>
  );
}
