import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Title from '../../atoms/Title';

export default function Featured({ featuredData }:any) {
  return (
    <Box sx={{ width: { md: '62%', lg: '68%' } }} className="featured-container ">
      <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Featured" secondTitle="This Month" />

      <Box className="scrollbar" sx={{ overflowY: { md: 'scroll' }, height: { md: '85%' }, paddingRight: { md: '2rem' } }}>
        <Box
          className="featured-card"
          sx={{
            display: 'grid', gridTemplateColumns: { md: 'repeat(auto-fit, minmax(270px, .8fr))', xs: 'repeat(auto-fit, minmax(270px, 1fr))' }, marginBottom: '5rem', gridGap: { lg:'3rem 1.5rem',md: '1.5rem', sm: '2.5rem 1.7rem', xs: '3rem' }, justifyContent: 'center',
          }}
        >
          {featuredData?.articles?.slice(0, 13).map((blog:any, index:number) => (
            <a href={blog.url} target="_blank" key={`featured${index}`} rel="noreferrer" >
              <Box
                className="featured-card1"
                sx={{
                  width: '100%', minWidth: '197px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '400', fontSize: { md: '0.74rem', sm: '0.8rem' }, display: 'inline-block', backgroundColor: '#E8F3F3', color: '#666666', padding: '.1rem .7rem', borderRadius: '3px', marginBottom: '0.344rem',
                  }}
                >
                  {blog.source.name}
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { md: '1.44rem', sm: '1.6rem', xs: '1.3rem' }, fontStyle: 'normal', fontWeight: '600' }}>{blog.title}</Typography>
                <Box sx={{
                  width: '100%', height: {xs:'16rem', sm:'12rem',md:'13rem',lg:'14rem'}, backgroundColor: '#D9D9D9', borderRadius: '0.438rem', margin: '1.5rem 0 1.688rem 0', overflow: 'hidden',
                }}
                >
                  <img src={blog.urlToImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                </Box>
                <Stack direction="row">
                  <Stack direction="row" sx={{ alignItems: 'center' }}>
                    <Typography sx={{
                      color: '#777777', fontWeight: '400', fontSize: '0.8rem', margin: '0 .5rem',
                    }}
                    >
                      {blog.author}
                    </Typography>
                  </Stack>
                  <Stack direction="row" sx={{ borderLeft: '1px solid #999999', borderRight: '1px solid #999999', padding: '0 .5rem', alignItems: 'center' }}>
                    <img src="icon/calendar.svg" alt="" style={{ width: '.8rem' }} />
                    <Typography sx={{
                      color: '#777777', fontWeight: '400', fontSize: '0.8rem', marginLeft: '.5rem',
                    }}
                    >
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </Typography>
                  </Stack>
                  <Stack direction="row">
                    <img src="icon/clock.svg" alt="" style={{ width: '.8rem', margin: '0 .5rem' }} />
                    <Typography sx={{ color: '#777777', fontWeight: '400', fontSize: '0.8rem' }}>{Math.round(blog.content.split(" ").length / 4)} Min. To Read</Typography>
                  </Stack>
                </Stack>
                <Typography sx={{
                  color: '#555555', fontSize: {xs:'0.8rem',lg:'0.85rem'}, fontWeight: '400', marginTop: '1.188rem'
                }}
                >
                  {blog.description.length > 100 ? blog.description.slice(0,150) + '...' : blog.description}
                </Typography>
              </Box>
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
