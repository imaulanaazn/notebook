import {
  Box, Typography, Pagination, Link,
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import Title from '../../atoms/Title';
import usePagination from './Pagination';
// import data from '../../../dummyData.js';
import RecentlyPostedCard from '../../molecules/RecentlyPostedCard';

export default function RecentlyPosted({ latestBlogData }:any) {
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const _DATA = usePagination(latestBlogData.articles, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <Box sx={{ width: { md: '62%', lg: '68%' }, paddingRight: { md: '5rem', sm: '0' } }}>
      <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Recently" secondTitle="Posted" />
      <Box className="blogs">
        {_DATA.currentData().map((blog:any, i:number) => {
          if (i === 2 && page === 1) {
            return (
              <>
                <RecentlyPostedCard
                  label={blog.source.name}
                  title={blog.title}
                  name={blog.author}
                  date="12 june 2021"
                  content={blog.description}
                  imgUrl={blog.urlToImage}
                />
                <Box
                  className="write-box"
                  sx={{
                    textAlign: 'center', backgroundColor: '#F2F8F7', height: '12rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '.4rem 0',
                  }}
                >
                  <Typography variant="h4" sx={{ fontWeight: '500', fontSize: '1.4rem', marginBottom: '1.4rem' }}>
                    Share your knowledge with our readers
                  </Typography>
                  <Link
                    href="/write"
                    underline="none"
                    sx={{
                      color: '#00AAA1', border: '1px solid #00AAA1', fontWeight: '400', textTransform: 'capitalize', alignSelf: 'center', padding: '.5rem 1rem', borderRadius: '4px',
                    }}
                  >
                    <img src="icon/edit-green.svg" alt="" />
                    Write on notebook
                  </Link>
                </Box>
              </>
            );
          }
          return (
            <RecentlyPostedCard
              label={blog.source.name}
              title={blog.title}
              name={blog.author}
              date="12 june 2021"
              content={blog.description}
              imgUrl={blog.urlToImage}
            />
          );
        })}
      </Box>
      <Pagination
        count={3}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        sx={{ margin: '6rem 0' }}
      />
    </Box>
  );
}
