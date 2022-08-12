import React from 'react';
import {
  Box, Stack, Typography, Button, Link,
} from '@mui/material';

export default function Footer() {
  return (
    // BLOG FOOTER DESCRIPTION
    <Box sx={{
      padding: { md: '7rem  3rem  ', sm: '5.5rem  3rem', xs: '3rem 1.5rem' }, backgroundColor: '#F2F8F7', display: 'grid', gridRowGap: { sm: '4rem', xs: '2rem' }, gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))', textAlign: { md: 'left', sm: 'center' },
    }}
    >
      <Box sx={{ flex: '1' }}>
        <Box
          className="logo"
          sx={{
            display: 'flex', alignItems: 'flex-end', justifyContent: { md: 'flex-start', sm: 'center' }, flex: '1', marginBottom: '1rem',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              backgroundColor: '#00AAA1',
              fontSize: {
                md: '1.688rem', sm: '1.4rem', xs: '1.4rem', color: 'white',
              },
              fontWeight: '600',
            }}
          >
            Note
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: '#333333', fontSize: { md: '1.063rem', sm: '.8rem', xs: '1rem' }, fontWeight: '600', margin: { md: '0 0.05rem 0 0.2rem', xs: '0 0.15rem 0 0.4rem' },
            }}
          >
            Book
          </Typography>
          <Box sx={{
            width: { md: '0.25rem', sm: '0.35rem', xs: '.25rem' }, height: { md: '0.25rem', sm: '0.35rem', xs: '.25rem' }, backgroundColor: '#00AAA1', borderRadius: '50%', transform: 'translateY(-100%)',
          }}
          />
        </Box>
        <Typography sx={{ fontSize: '.84rem', color: '#555555' }}>Did you come here for something in particular or just general Riker</Typography>
      </Box>
      {/* BLOGS FOOTER */}
      <Stack direction="column" sx={{ flex: '1', alignItems: { sm: 'center', xs: 'flex-start' } }}>
        <Stack direction="column">
          <Typography
            variant="h1"
            sx={{
              fontSize: '.9rem', color: '#222222', fontWeight: '500', marginBottom: '1rem',
            }}
          >
            Blogs
          </Typography>
          <Link underline="none" href="#navbar" sx={{ fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Travel</Link>
          <Link underline="none" href="#navbar" sx={{ fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Technology</Link>
          <Link underline="none" href="#navbar" sx={{ fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Lifestyle</Link>
          <Link underline="none" href="#navbar" sx={{ fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Fashion</Link>
          <Link underline="none" href="#navbar" sx={{ fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Bussines</Link>
        </Stack>
      </Stack>
      {/* QUICK LINKS */}
      <Stack direction="column" sx={{ flex: '1', alignItems: { sm: 'center', xs: 'flex-start' } }}>
        <Stack direction="column">
          <Typography
            variant="h1"
            sx={{
              fontSize: '.9rem', color: '#222222', fontWeight: '500', marginBottom: '1rem',
            }}
          >
            Quick Links
          </Typography>
          <Link underline="none" href="/faq" sx={{ fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>FAQ</Link>
          <Link underline="none" href="/#" sx={{ fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Terms & conditions</Link>
          <Link underline="none" href="/#" sx={{ fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>support</Link>
          <Link underline="none" href="/#" sx={{ fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>privacy policy</Link>
        </Stack>
      </Stack>
      {/* SUBSCRIBE */}
      <Box sx={{ flex: '1' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '.9rem', color: '#222222', marginBottom: '1.4rem', fontWeight: '500',
          }}
        >
          Subscribe for newsletter
        </Typography>
        <Stack direction="row">
          <input type="email" placeholder="Your Email" className="subscribe-field" />
          <Button
            variant="contained"
            disableElevation
            sx={{
              backgroundColor: '#00AAA1', fontSize: '0.84rem', fontWeight: '400', textTransform: 'capitalize', borderTopLeftRadius: '0', borderBottomLeftRadius: '0',
            }}
          >
            Subscribe
          </Button>
        </Stack>
        <Typography
          variant="h1"
          sx={{
            fontSize: '.9rem', color: '#222222', marginBottom: '1.4rem', fontWeight: '500', marginTop: '1.7rem',
          }}
        >
          Follow On:
        </Typography>
        <Stack direction="row">
          <Link
            underline="none"
            className="homeSocmed"
            href="/#"
            sx={{
              width: '1.7rem', height: '1.7rem', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
            }}
          >
            <i className="fa-brands fa-facebook-f" />
          </Link>
          <Link
            underline="none"
            className="homeSocmed"
            href="/#"
            sx={{
              width: '1.7rem', height: '1.7rem', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
            }}
          >
            <i className="fa-brands fa-twitter" />
          </Link>
          <Link
            underline="none"
            className="homeSocmed"
            href="/#"
            sx={{
              width: '1.7rem', height: '1.7rem', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
            }}
          >
            <i className="fa-brands fa-instagram" />
          </Link>
          <Link
            underline="none"
            className="homeSocmed"
            href="/#"
            sx={{
              width: '1.7rem', height: '1.7rem', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
            }}
          >
            <i className="fa-brands fa-pinterest" />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}
