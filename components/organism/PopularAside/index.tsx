import React, { useEffect, useState } from 'react';
import {
  Box, Stack,
} from '@mui/material';
import PopularPostedCard from '../../molecules/PopularPostedCard';
import Title from '../../atoms/Title';

export default function PopularAside({ popularBlogs }:any) {
  const totalData = popularBlogs?.articles?.slice(0, 10).length;
  const dataPerPage:number = 2;
  const totalPage = Math.ceil(totalData / dataPerPage);
  const [active, setActive] = useState(1);
  const [buttons, setButtons] = useState([] as any);

  function setActiveBtn(e:any) {
    setActive(Number(e.target.getAttribute('id')));
  }

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
          // eslint-disable-next-line no-restricted-globals
          onClick={() => { setActiveBtn(event); }}
          key={i}
        />,
      );
    }
    setButtons([...tempButtons]);
  }, [active, totalPage]);

  return (
    <Box className="popular-side-container" sx={{ width: { lg: '32%', md: '38%' }, height: { md: '100%', sm: '28rem', xs: '30rem' } }}>
      <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Popular" secondTitle="Posted" />

      <Box
        className="featured-card popular-aside-scrollbar"
        sx={{
          height: { md: '70%', sm: '65%', xs: '75%' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'scroll', overflowX: 'hidden'
        }}
      >
        {
        popularBlogs?.articles?.slice(dataPerPage * (active), dataPerPage * (active) + dataPerPage)
          .map((data:any, index:number) => (
            <PopularPostedCard
              key={`card${index}`}
              label={data.source.name}
              title={data.title}
              profilePic="img/author.png"
              name={data.author}
              date={new Date(data.publishedAt).toLocaleDateString()}
              timeToRead={Math.round(data.content.split(" ").length / 4)}
              content={data.description}
            />
          ))
          }
      </Box>

      <Stack className="pagination-button" direction="row" sx={{ height: { md: '15%', xs: '13%' }, justifyContent: 'center', alignItems: 'center' }}>
        {buttons}
      </Stack>
    </Box>

  );
}
