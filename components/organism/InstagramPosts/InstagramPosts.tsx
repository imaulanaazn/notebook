import React from 'react';
import { Box, Link } from '@mui/material';
import Title from '../../atoms/Title';
import Image from 'next/image';

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
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9','&:hover':{filter:'brightness(50%)', transition:'0.5s ease all'}
          }}
        >
          <Image src="/img/bitcoin-invest.jpg" width={200} height={200} objectFit="cover" alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9','&:hover':{filter:'brightness(50%)', transition:'0.5s ease all'}
          }}
        >
          <Image src="/img/chip.jpg" width={200} height={200} objectFit="cover" alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9','&:hover':{filter:'brightness(50%)', transition:'0.5s ease all'}
          }}
        >
          <Image src="/img/footbal.jpg" width={200} height={200} objectFit="cover" alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9','&:hover':{filter:'brightness(50%)', transition:'0.5s ease all'}
          }}
        >
          <Image src="/img/mars-explor.jpg" width={200} height={200} objectFit="cover" alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', borderRadius: '5px', backgroundColor: '#D9D9D9', position: 'relative', '&:hover':{filter:'brightness(50%)', transition:'0.5s ease all'}
          }}
        >
          <i
            className="fa-brands fa-instagram"
            style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '1.3rem', color: 'white',
            }}
          />
          <Image src="/img/author.jpg" width={200} height={200} objectFit="cover" alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9','&:hover':{filter:'brightness(50%)', transition:'0.5s ease all'}
          }}
        >
          <Image src="/img/nanobot.jpg" width={200} height={200} objectFit="cover" alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9','&:hover':{filter:'brightness(50%)', transition:'0.5s ease all'}
          }}
        >
          <Image src="/img/seo-writer.jpg" width={200} height={200} objectFit="cover" alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9','&:hover':{filter:'brightness(50%)', transition:'0.5s ease all'}
          }}
        >
          <Image src="/img/travel.jpg" width={200} height={200} objectFit="cover" alt="" />
        </Link>
        <Link
          href="/#"
          sx={{
            width: '100%', height: { md: '7rem', sm: '10rem', xs: '6.5rem' }, justifySelf: 'center', overFlow: 'hidden', borderRadius: '5px', backgroundColor: '#D9D9D9','&:hover':{filter:'brightness(50%)', transition:'0.5s ease all'}
          }}
        >
          <Image src="/img/traveling-tips.jpg" width={200} height={200} objectFit="cover" alt="" />
        </Link>
      </Box>
    </Box>
  );
}
