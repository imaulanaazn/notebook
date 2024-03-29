import React from 'react';
import {
  Box, Stack, Typography, Link,
} from '@mui/material';
import Title from '../../atoms/Title';
import { authors } from '../../../dummyData';
import Image from 'next/image';

interface authorData{
  name: string,
  job: string,
  fb: string,
  twit: string,
  insta: string,
  profilePic: string,
  totalPosts: any,
  aboutAuthor: string,
  authorQuote: string,
  quoteDesc: string,
}

export default function TopAuthor() {
  return (
    <Box>
      <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Top" secondTitle="Authors" />
      {authors.slice(0, 3).map((author:authorData, index:number) => (
        <Stack key={`title${index}`} direction="row" sx={{ alignItems: 'center', marginBottom: '2.6rem' }}>
          <Link
            href={`/about/${author.name}`}
            className="profile-pic"
            sx={{
              width: '4.6rem', minWidth: '4.6rem', height: '4.5rem', borderRadius: '50%', backgroundColor: '#D9D9D9', overflow: 'hidden'
            }}
          >
            <Box style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative' }}>
            <Image src={author.profilePic} alt=""  width={300} height={300} objectFit="cover" quality={1}/>
            </Box>
          </Link>
          <Box className="autor-info" sx={{ marginLeft: '1.5rem' }}>
            <Typography variant="h5" sx={{ fontSize: '1rem', fontWeight: '500' }}>
              {author.name}
            </Typography>
            <Typography sx={{ color: '#666666', fontSize: '0.8rem', margin: '.4rem 0' }}>
              {author.job}
            </Typography>
            <Stack direction="row">
              <Link
                underline="none"
                className="homeSocmed"
                href="/#"
                sx={{
                  width: '1.2rem', height: '1.2rem', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white',
                }}
              >
                <i className="fa-brands fa-facebook-f" />
              </Link>
              <Link
                underline="none"
                className="homeSocmed"
                href="/#"
                sx={{
                  width: '1.2rem', height: '1.2rem', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 .6rem',
                }}
              >
                <i className="fa-brands fa-twitter" />
              </Link>
              <Link
                underline="none"
                className="homeSocmed"
                href="/#"
                sx={{
                  width: '1.2rem', height: '1.2rem', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <i className="fa-brands fa-instagram" />
              </Link>
            </Stack>
          </Box>
        </Stack>
      ))}
    </Box>
  );
}
