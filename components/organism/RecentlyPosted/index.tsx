import {
  Box, Typography, Pagination, Link,
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import Title from '../../atoms/Title';
import usePagination from './Pagination';
import RecentlyPostedCard from '../../molecules/RecentlyPostedCard';

import { newsApiArticleProps } from '../Featured';

export default function RecentlyPosted({latestBlogData}:any) {
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  const DATA = usePagination(latestBlogData.articles, PER_PAGE);
  const handleChange = (e:any,p:any) => {
    setPage(p);
    DATA.jump(p);
  };
  return (
    <Box sx={{ width: { md: '62%', lg: '68%' }, paddingRight: { md: '5rem', sm: '0' } }}>
      <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Recently" secondTitle="Posted" />
      <Box className="blogs">
        {DATA.currentData().length === 0 ? 
          <div>
            Cannot retrive blogs
          </div>
          :
          DATA.currentData().map((blog:newsApiArticleProps, i:number) => {
          if (i === 2 && page === 1) {
            return (
              <Box key={blog.url}>
                <RecentlyPostedCard
                  label={blog.source.name}
                  title={blog.title}
                  name={blog.author}
                  date={new Date(blog.publishedAt).toLocaleDateString()}
                  desc={blog.description}
                  imgUrl={blog.urlToImage}
                  url={blog.url}
                  timeToRead={Math.round(blog.content.split(" ").length / 4)}
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
              </Box>
            );
          }
          return (
            <RecentlyPostedCard
              key={blog.url}
              label={blog.source.name}
              title={blog.title}
              name={blog.author}
              date={new Date(blog.publishedAt).toLocaleDateString()}
              desc={blog.description}
              imgUrl={blog.urlToImage}
              url={blog.url}
              timeToRead={Math.round(blog.content.split(" ").length / 4)}
            />
          );
          })
        }
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
