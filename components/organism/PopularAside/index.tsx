import React, { useEffect, useState } from 'react';
import {
  Box, Stack,
} from '@mui/material';
import PopularPostedCard from '../../molecules/PopularPostedCard';
import blogData from '../../../dummyData.js';
import Title from '../../atoms/Title';

export default function PopularAside() {
  const [totalData, setTotalData] = useState(blogData.slice(0, 10).length);
  const [dataPerPage, setDataPerPage] = useState(2);
  const totalPage = Math.ceil(totalData / dataPerPage);
  const [active, setActive] = useState(1);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const tempButtons = [];
    for (let i = 0; i < totalPage; i += 1) {
      tempButtons.push(
        <Box
          sx={{
            width: '14px', height: '7px', backgroundColor: '#C4D1D1', margin: '0 4px', borderRadius: '3px',
          }}
          id={i}
          className={`pagination-btn ${active === i ? 'active' : 'not-active'}`}
          // eslint-disable-next-line no-unused-vars
          onClick={(e: { target: { getAttribute: (arg0: string) => any; }; }) => {
            setActive(Number(e.target.getAttribute('id')));
          }}
          key={i}
        />,
      );
    }
    setButtons([...tempButtons]);
  }, [active]);

  return (
    <Box className="popular-side-container" sx={{ width: { lg: '32%', md: '38%' }, height: { md: '100%', sm: '28rem', xs: '30rem' } }}>
      <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Popular" secondTitle="Posted" />

      <Box
        className="featured-card"
        sx={{
          height: { md: '70%', sm: '65%', xs: '75%' }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}
      >
        {
        blogData.slice(dataPerPage * (active), dataPerPage * (active) + dataPerPage)
          .map((data) => (
            <PopularPostedCard
              key={data.id}
              label={data.label}
              title={data.title}
              profilePic={data.profilePic}
              name={data.name}
              date={data.date}
              timeToRead={data.timeToRead}
              content={data.content}
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
