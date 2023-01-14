import React from 'react';
import {
  Box, Stack, Typography, Button,
} from '@mui/material';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function Footer() {
  const [email,setEmail] = useState('')
  function subscribe(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    toast("Subscribtion success");
    setEmail('')
  }
  return (
    // BLOG FOOTER DESCRIPTION
    <>
    <ToastContainer/>
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
          <Link href="#navbar"><Typography sx={{ '&:hover':{cursor:'pointer'},fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Travel</Typography></Link>
          <Link href="#navbar"><Typography sx={{ '&:hover':{cursor:'pointer'},fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Technology</Typography></Link>
          <Link href="#navbar"><Typography sx={{ '&:hover':{cursor:'pointer'},fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Lifestyle</Typography></Link>
          <Link href="#navbar"><Typography sx={{ '&:hover':{cursor:'pointer'},fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Fashion</Typography></Link>
          <Link href="#navbar"><Typography sx={{ '&:hover':{cursor:'pointer'},fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Bussines</Typography></Link>
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
          <Link  href="/faq"><Typography sx={{ '&:hover':{cursor:'pointer'},fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>FAQ</Typography></Link>
          <Link  href="/#"><Typography sx={{ '&:hover':{cursor:'pointer'},fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>Terms & conditions</Typography></Link>
          <Link  href="/#"><Typography sx={{ '&:hover':{cursor:'pointer'},fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>support</Typography></Link>
          <Link  href="/#"><Typography sx={{ '&:hover':{cursor:'pointer'},fontSize: '.84rem', color: '#555555', margin: '.2rem 0' }}>privacy policy</Typography></Link>
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
        <form onSubmit={(e)=>{subscribe(e)}}>
        <Stack direction="row">
          <input type="email" required placeholder="Your Email" className="subscribe-field" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <Button
            type='submit'
            variant="contained"
            disableElevation
            sx={{
              '&:hover':{backgroundColor: '#50bdb8'}, backgroundColor: '#00AAA1', fontSize: '0.84rem', fontWeight: '400', textTransform: 'capitalize', borderTopLeftRadius: '0', borderBottomLeftRadius: '0',
            }}
          >
            Subscribe
          </Button>
        </Stack>
        </form>
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
            className="homeSocmed"
            href="/#"
          >
            <Box sx={{
              '&:hover':{color:'#00AAA1', cursor:'pointer', borderColor: '#00AAA1'}, width: '1.7rem', height: '1.7rem',color:'#555', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
            }}>
            <i className="fa-brands fa-facebook-f" />
            </Box>
          </Link>
          <Link
            className="homeSocmed"
            href="/#"
          >
            <Box sx={{
              '&:hover':{color:'#00AAA1', cursor:'pointer', borderColor: '#00AAA1'}, width: '1.7rem', height: '1.7rem',color:'#555', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
            }}>
            <i className="fa-brands fa-twitter" />
            </Box>
          </Link>
          <Link
            className="homeSocmed"
            href="/#"
          >
            <Box sx={{
              '&:hover':{color:'#00AAA1', cursor:'pointer', borderColor: '#00AAA1'}, width: '1.7rem', height: '1.7rem',color:'#555', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
            }}>
            <i className="fa-brands fa-instagram" />
            </Box>
          </Link>
          <Link
            className="homeSocmed"
            href="/#"
          >
            <Box sx={{
              '&:hover':{color:'#00AAA1', cursor:'pointer', borderColor: '#00AAA1'}, width: '1.7rem', height: '1.7rem',color:'#555', border: '1px solid #C4C4C4', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem',
            }}>
            <i className="fa-brands fa-pinterest" />
            </Box>
          </Link>
        </Stack>
      </Box>
    </Box>
    <div
    className="credits"
    style={{
      width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
  >
    <p style={{ borderBottom: '1px dashed black' }}>
      Built by
      {' '}
      <a target="_blank" href="https://irham-maulana.netlify.app" style={{ color: 'blue' }} rel="noreferrer">Irham Maulana </a>
    </p>
  </div>
    </>
  );
}
