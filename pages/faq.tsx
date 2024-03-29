import React from 'react';
import {
  Box, Typography, Accordion, Link,
} from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../components/organism/Navbar';
import Footer from '../components/organism/Footer';
import Script from 'next/script';

export default function faq() {
  return (
    <>
      <Script async src="https://kit.fontawesome.com/490a850dc0.js" crossOrigin="anonymous"></Script>
      <Navbar />
      <Box sx={{ padding: { md: '4rem 0', sm: '4rem 2rem', xs: '3rem 1rem' }, textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { md: '1.6rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '500', textAlign: 'center',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontSize: { md: '1.8rem', sm: '1.5rem', xs: '1.3rem' }, fontWeight: '500', marginRight: '.4rem', backgroundColor: '#00AAA1', color: 'white',
            }}
          >
            Frequently
          </Typography>
          Asked Question
        </Typography>
        <Typography sx={{ fontSize: '.938rem', color: '#666666', margin: '1rem 0 3rem' }}>Did you come here for something in particular or just general Riker-bashing? And blowing</Typography>
        <Box sx={{ width: { md: '58%', sm: '80%' }, margin: 'auto' }} className="faq-accordion">
          <Box>
            <Accordion sx={{ boxShadow: 'none' }}>
              <AccordionSummary
                sx={{ backgroundColor: '#F2F8F7' }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: '.938rem', color: '#222222' }}>is there have any option for write blog?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#F2F8F7' }}>
                <Typography sx={{ color: '#666666', fontSize: '.839rem', textAlign: 'left' }}>
                  Did you come here for something in particular or just general Riker-bashing?
                  And blowing into maximum warp speed,
                  you appeared for an instant to be in two places at once.
                  We have a saboteur aboard. We know you’re dealing in stolen ore.
                  But I wanna talk about
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ marginTop: '1rem' }}>
            <Accordion sx={{ boxShadow: 'none' }}>
              <AccordionSummary
                sx={{ backgroundColor: '#F2F8F7' }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: '.938rem', color: '#222222' }}>can i change my plan later?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#F2F8F7' }}>
                <Typography sx={{ color: '#666666', fontSize: '.839rem', textAlign: 'left' }}>
                  Did you come here for something in particular or just general Riker-bashing?
                  And blowing into maximum warp speed,
                  you appeared for an instant to be in two places at once.
                  We have a saboteur aboard. We know you’re dealing in stolen ore.
                  But I wanna talk about
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ marginTop: '1rem' }}>
            <Accordion sx={{ boxShadow: 'none' }}>
              <AccordionSummary
                sx={{ backgroundColor: '#F2F8F7' }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: '.938rem', color: '#222222' }}>Did you come here for something in particular?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#F2F8F7' }}>
                <Typography sx={{ color: '#666666', fontSize: '.839rem', textAlign: 'left' }}>
                  Did you come here for something in particular or just general Riker-bashing?
                  And blowing into maximum warp speed,
                  you appeared for an instant to be in two places at once.
                  We have a saboteur aboard. We know you’re dealing in stolen ore.
                  But I wanna talk about
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ marginTop: '1rem' }}>
            <Accordion sx={{ boxShadow: 'none' }}>
              <AccordionSummary
                sx={{ backgroundColor: '#F2F8F7' }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: '.938rem', color: '#222222' }}>is there have any option for write blog?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#F2F8F7' }}>
                <Typography sx={{ color: '#666666', fontSize: '.839rem', textAlign: 'left' }}>
                  Did you come here for something in particular or just general Riker-bashing?
                  And blowing into maximum warp speed,
                  you appeared for an instant to be in two places at once.
                  We have a saboteur aboard. We know you’re dealing in stolen ore.
                  But I wanna talk about
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ marginTop: '1rem' }}>
            <Accordion sx={{ boxShadow: 'none' }}>
              <AccordionSummary
                sx={{ backgroundColor: '#F2F8F7' }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: '.938rem', color: '#222222' }}>something in particular or just general Riker-bashing?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#F2F8F7' }}>
                <Typography sx={{ color: '#666666', fontSize: '.839rem', textAlign: 'left' }}>
                  Did you come here for something in particular or just general Riker-bashing?
                  And blowing into maximum warp speed,
                  you appeared for an instant to be in two places at once.
                  We have a saboteur aboard. We know you`&apos;`re dealing in stolen ore.
                  But I wanna talk about
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        <Typography sx={{ fontSize: '1.3rem', fontWeight: '500', margin: '3rem 0 1rem' }}>
          Can&apos;t find an answer to your question?
        </Typography>
        <Link
          href="/contact"
          underline="none"
          sx={{
            borderColor: '#00AAA1', color: '#00AAA1', fontSize: '0.9rem', fontWeight: '400', textTransform: 'capitalize', borderWidth: '1.3px',
          }}
        >
          Contact us
        </Link>
      </Box>
      <Footer />
    </>
  );
}
