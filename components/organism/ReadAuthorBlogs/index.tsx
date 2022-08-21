import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { authors } from '../../../dummyData';

export default function ReadAuthorBlogs({ name, authorBlogs }:any) {
  const authorData = authors.filter((author) => author.name === name.name);
  return (
    <Box sx={{ margin: { sm: '4rem 4rem', xs: '0 2rem' } }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { md: '1.6rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '500', marginBottom: '2rem',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: { md: '1.8rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '500', marginRight: '.4rem', backgroundColor: '#00AAA1', color: 'white',
          }}
        >
          Read
        </Typography>
        Author Blogs
      </Typography>
      <Box
        className="featured-card"
        sx={{
          display: 'grid', gridTemplateColumns: { md: 'repeat(auto-fit, minmax(270px, .8fr))', xs: 'repeat(auto-fit, minmax(270px, 1fr))' }, marginTop: '2rem', gridGap: { md: '3rem 1.5rem', sm: '2.5rem 1.7rem', xs: '3rem' }, justifyContent: 'center',
        }}
      >
        {authorBlogs.articles.slice(0, 5).map((blog:any, index:number) => (
          <Box
            key={`blog${index}`}
            className="featured-card1"
            sx={{
              width: '100%', minWidth: '197px',
            }}
          >
            <Box sx={{
              width: '100%', height: '14.5rem', backgroundColor: '#D9D9D9', borderRadius: '0.438rem', overflow: 'hidden',
            }}
            >
              <img src={blog.urlToImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography
              sx={{
                fontWeight: '400', fontSize: { md: '0.74rem', sm: '0.6rem' }, display: 'inline-block', backgroundColor: '#E8F3F3', color: '#666666', padding: '.1rem .7rem', borderRadius: '3px', margin: '1.5rem 0 .8rem',
              }}
            >
              {blog.source.name}
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { md: '1.55rem', sm: '1.5rem', xs: '1.4rem' }, fontStyle: 'normal', fontWeight: '600' }}>{blog.title}</Typography>
            <Stack direction="row" sx={{ margin: '1.5rem 0 .6rem' }}>
              <Stack direction="row" sx={{ alignItems: 'center' }}>
                <img src={authorData[0].profilePic} alt="" style={{ width: '1rem', height: '1rem', borderRadius: '50%' }} />
                <Typography sx={{
                  color: '#777777', fontWeight: '400', fontSize: '0.74rem', margin: '0 .5rem',
                }}
                >
                  {name.name}
                </Typography>
              </Stack>
              <Stack direction="row" sx={{ borderLeft: '1px solid #999999', borderRight: '1px solid #999999', padding: '0 .5rem' }}>
                <img src="icon/calendar.svg" alt="" style={{ width: '.8rem' }} />
                <Typography sx={{
                  color: '#777777', fontWeight: '400', fontSize: '0.74rem', marginLeft: '.5rem',
                }}
                >
                  02 december 2019
                </Typography>
              </Stack>
              <Stack direction="row">
                <img src="icon/clock.svg" alt="" style={{ width: '.8rem', margin: '0 .5rem' }} />
                <Typography sx={{ color: '#777777', fontWeight: '400', fontSize: '0.74rem' }}>3 Min. To Read</Typography>
              </Stack>
            </Stack>
            <Typography sx={{
              color: '#555555', fontSize: '0.84rem', fontWeight: '400',
            }}
            >
              {blog.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
