import React, { useState } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Title from '../../atoms/Title';
import data from '../../../dummyData';
import CommentSection from '../CommentSection';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#DFF1F0',
    color: '#00AAA1',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#F2F8F7',
  },

}));

function createData(
  first: string,
  last: string,
  handle: string,
) {
  return {
    first, last, handle,
  };
}

const rows = [
  createData('Row:1 Cell:1', 'Row:1 Cell:2', 'Row:1 Cell:3'),
  createData('Row:2 Cell:1', 'Row:2 Cell:2', 'Row:2 Cell:3'),
  createData('Row:3 Cell:1', 'Row:3 Cell:2', 'Row:3 Cell:3'),
];

export default function BlogContent() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: { md: '62%', sm: '100%' } }}>
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
          travel
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { md: '1.55rem', sm: '1.7rem', xs: '1.4rem' }, fontStyle: 'normal', fontWeight: '600', margin: '1rem 0', color: '#222222',
          }}
        >
          I Created a Developer Rap Video - Here&apos;s What I Learned
        </Typography>
        <Stack direction="row">
          <Stack direction="row" sx={{ alignItems: 'center' }}>
            <img src="img/author.png" alt="" style={{ width: '1rem', height: '1rem' }} />
            <Typography sx={{
              color: '#777777', fontWeight: '400', fontSize: '0.74rem', margin: '0 .5rem',
            }}
            >
              Jesica koli
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ borderLeft: '1px solid #999999', borderRight: '1px solid #999999', padding: '0 .5rem' }}>
            <img src="icon/calendar.svg" alt="" style={{ width: '.8rem' }} />
            <Typography sx={{
              color: '#777777', fontWeight: '400', fontSize: '0.74rem', marginLeft: '.5rem',
            }}
            >
              02 december 2022
            </Typography>
          </Stack>
          <Stack direction="row">
            <img src="icon/clock.svg" alt="" style={{ width: '.8rem', margin: '0 .5rem' }} />
            <Typography sx={{ color: '#777777', fontWeight: '400', fontSize: '0.74rem' }}>3 Min. To Read</Typography>
          </Stack>
        </Stack>
        <Box sx={{
          width: '100%', height: '22rem', backgroundColor: '#D9D9D9', borderRadius: '0.438rem', margin: '1.5rem 0 1.688rem 0',
        }}
        >
          <img src="/#" alt="" />
        </Box>
        <Typography sx={{
          color: '#666666', fontSize: '0.84rem', fontWeight: '400', marginTop: '1.188rem',
        }}
        >
          Did you come here for something in particular or just general Riker-bashing?
          And blowing into maximum warp speed,
          you appeared for an instant to be in two places at once.
          We have a saboteur aboard. We know you’re dealing in stolen ore.
          But I wanna talk about the assassination attempt on Lieutenant Worf.
          Could someone survive inside a transporter buffer for 75 years? Fate.
          It protects fools, little children, and ships.
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: '1.2rem', fontWeight: '500', margin: '1rem 0', color: '#333333',
          }}
        >
          I Created a Developer Rap Video - Here&apos;s What I Learned
        </Typography>
        <Typography sx={{
          color: '#666666', fontSize: '0.84rem', fontWeight: '400', marginTop: '1.188rem',
        }}
        >
          Did you come here for something in particular or just general Riker-bashing?
          And blowing into maximum warp speed,
          you appeared for an instant to be in two places at once.
          We have a saboteur aboard. We know you’re dealing in stolen ore.
          But I wanna talk about the assassination attempt
        </Typography>
        <TableContainer sx={{ margin: '2rem 0' }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center" sx={{ border: 'none', padding: '.8rem 1rem' }}>First</StyledTableCell>
                <StyledTableCell align="center" sx={{ border: 'none', padding: '.8rem 1rem' }}>Last</StyledTableCell>
                <StyledTableCell align="center" sx={{ border: 'none', padding: '.8rem 1rem' }}>Handle</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    align="center"
                    sx={{
                      border: 'none', borderRight: '1px solid #DFF1F0', padding: '.8rem 1rem', color: '#666666',
                    }}
                  >
                    {row.first}
                  </StyledTableCell>
                  <StyledTableCell align="center" sx={{ border: 'none', padding: '.8rem 1rem', color: '#666666' }}>{row.last}</StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{
                      border: 'none', borderLeft: '1px solid #DFF1F0', padding: '.8rem 1rem', color: '#666666',
                    }}
                  >
                    {row.handle}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography sx={{
          color: '#666666', fontSize: '0.84rem', fontWeight: '400', marginTop: '1.188rem',
        }}
        >
          Did you come here for something in particular or just general Riker-bashing?
          And blowing into maximum warp speed,
          you appeared for an instant to be in two places at once.
          We have a saboteur aboard.
        </Typography>
        <cite className="cited">
          <p>
            “Did you come here for something in particular or just general Riker-bashing?
            And blowing into maximum warp speed,
            you appeared for an instant to be in two places at once.
            We have a saboteur aboard. We know you’re dealing in stolen ore.
            But I wanna talk about the assassination attempt on Lieutenant Worf.”
          </p>
        </cite>
        <Typography sx={{
          color: '#666666', fontSize: '0.84rem', fontWeight: '400', marginTop: '1.188rem',
        }}
        >
          Did you come here for something in particular or just general Riker-bashing?
          And blowing into maximum warp speed,
          you appeared for an instant to be in two places at once.
          We have a saboteur aboard.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: '1.2rem', fontWeight: '500', margin: '1rem 0', color: '#333333',
          }}
        >
          I Created a Developer Rap Video - Here&apos;s What I Learned
        </Typography>
        <Typography sx={{
          color: '#666666', fontSize: '0.84rem', fontWeight: '400', marginTop: '1.188rem',
        }}
        >
          Did you come here for something in particular or just general Riker-bashing?
          And blowing into maximum warp speed,
          you appeared for an instant to be in two places at once.
          We have a saboteur aboard.
        </Typography>
        <ol className="blog-single-list">
          <li>
            <Typography>
              Did you come here for something in particular or just general
            </Typography>
          </li>
          <li>
            <Typography sx={{ margin: '.6rem 0' }}>
              Did you come here for something in particular or just general Riker-bashing
            </Typography>
          </li>
          <li>
            <Typography>
              Did you come here for something in particula
            </Typography>
          </li>
        </ol>
        <Typography sx={{
          color: '#666666', fontSize: '0.84rem', fontWeight: '400', marginTop: '1.188rem',
        }}
        >
          Did you come here for something in particular or
          just general Riker-bashing? And blowing into maximum
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: '1.2rem', fontWeight: '500', margin: '1rem 0', color: '#333333',
          }}
        >
          I Created a Developer Rap Video
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Box className="step-tab" sx={{ borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Step 1" {...a11yProps(0)} />
              <Tab label="Step 2" {...a11yProps(1)} />
              <Tab label="Step 3" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} className="tab-panel">
            <Typography
              variant="h3"
              sx={{
                fontSize: '1rem', fontWeight: '500', margin: '1rem 0', color: '#333333',
              }}
            >
              I Created a Developer Rap Video
            </Typography>
            <Typography sx={{
              color: '#666666', fontSize: '0.84rem', fontWeight: '400', marginTop: '1.188rem',
            }}
            >
              Did you come here for something in particular or just general Riker-bashing?
              And blowing into maximum warp speed,
              you appeared for an instant to be in two places at once.
              We have a saboteur aboard. We know you’re dealing in stolen ore.
              But I wanna talk about the assassination attempt on Lieutenant Worf.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1} className="tab-panel">
            <Typography
              variant="h3"
              sx={{
                fontSize: '1rem', fontWeight: '500', margin: '1rem 0', color: '#333333',
              }}
            >
              I Created a Developer Rap Video part 2
            </Typography>
            <Typography sx={{
              color: '#666666', fontSize: '0.84rem', fontWeight: '400', marginTop: '1.188rem',
            }}
            >
              Did you come here for something in particular or just general Riker-bashing?
              And blowing into maximum warp speed,
              you appeared for an instant to be in two places at once.
              We have a saboteur aboard. We known stolen ore.
              But I wanna talk about the assassination attempt on Lieutenant Worf.
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2} className="tab-panel">
            <Typography
              variant="h3"
              sx={{
                fontSize: '1rem', fontWeight: '500', margin: '1rem 0', color: '#333333',
              }}
            >
              I Created a Developer Rap Video part 3
            </Typography>
            <Typography sx={{
              color: '#666666', fontSize: '0.84rem', fontWeight: '400', marginTop: '1.188rem',
            }}
            >
              Did you come here for something in particular or just general Riker-bashing?
              And blowing into maximum warp speed,
              you appeared for an instant to be in two places at once.
              We have a saboteur aboard.
              But I wanna talk about the assassination attempt on Lieutenant Worf.
            </Typography>
          </TabPanel>
        </Box>
        <Box sx={{
          width: { sm: '40%', xs: '70%' }, margin: 'auto', transform: 'translateY(50%)', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly',
        }}
        >
          <i className="blog-single-socmed-icon fa-solid fa-link" />
          <i className="blog-single-socmed-icon fa-brands fa-facebook" />
          <i className="blog-single-socmed-icon fa-brands fa-square-twitter" />
          <i className="blog-single-socmed-icon fa-brands fa-square-instagram" />
          <i className="blog-single-socmed-icon fa-brands fa-pinterest" />
        </Box>
        <Box sx={{
          width: '100%', height: '1px', backgroundColor: '#D1E7E5', marginBottom: '2rem',
        }}
        />
        <img className="blog-single-share-icon" src="icon/share.svg" alt="" />
        <Title marginBottom={{ sm: '3.4rem', xs: '1.6rem' }} mainTitle="Featured" secondTitle="This Month" />
        <Box
          className="featured-card"
          sx={{
            display: 'grid', gridTemplateColumns: { md: 'repeat(auto-fit, minmax(270px, .8fr))', xs: 'repeat(auto-fit, minmax(270px, 1fr))' }, marginTop: '2rem', gridGap: { md: '3rem 1.5rem', sm: '2.5rem 1.7rem', xs: '3rem' }, justifyContent: 'center',
          }}
        >
          {data.slice(0, 2).map((blog) => (
            <Box
              className="featured-card1"
              sx={{
                width: '100%', minWidth: '197px',
              }}
            >
              <Box sx={{
                width: '100%', height: '14.5rem', backgroundColor: '#D9D9D9', borderRadius: '0.438rem',
              }}
              >
                <img src="/#" alt="" />
              </Box>
              <Typography
                sx={{
                  fontWeight: '400', fontSize: { md: '0.74rem', sm: '0.6rem' }, display: 'inline-block', backgroundColor: '#E8F3F3', color: '#666666', padding: '.1rem .7rem', borderRadius: '3px', margin: '1.5rem 0 .8rem',
                }}
              >
                {blog.label}
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { md: '1.55rem', sm: '1.5rem', xs: '1.4rem' }, fontStyle: 'normal', fontWeight: '600' }}>{blog.title}</Typography>
              <Stack direction="row" sx={{ margin: '1.5rem 0 .6rem' }}>
                <Stack direction="row" sx={{ alignItems: 'center' }}>
                  <img src="img/author.png" alt="" style={{ width: '1rem', height: '1rem' }} />
                  <Typography sx={{
                    color: '#777777', fontWeight: '400', fontSize: '0.74rem', margin: '0 .5rem',
                  }}
                  >
                    {blog.name}
                  </Typography>
                </Stack>
                <Stack direction="row" sx={{ borderLeft: '1px solid #999999', borderRight: '1px solid #999999', padding: '0 .5rem' }}>
                  <img src="icon/calendar.svg" alt="" style={{ width: '.8rem' }} />
                  <Typography sx={{
                    color: '#777777', fontWeight: '400', fontSize: '0.74rem', marginLeft: '.5rem',
                  }}
                  >
                    {blog.date}
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
                {blog.content}
              </Typography>
            </Box>
          ))}
        </Box>
        <CommentSection />
      </Box>
    </Box>
  );
}
