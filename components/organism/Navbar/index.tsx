/* eslint-disable no-restricted-globals */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useState} from 'react';
import {
  Typography, Box, createTheme, ThemeProvider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import {setSearchedWord} from '../../../redux/slices/searchSlice'; 

type Anchor = 'left';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  marginLeft: 0,
  width: '45%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: '.3rem 1rem',
    backgroundColor: 'white',
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '.9rem',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
      padding: '.5rem 1rem',
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '.3rem 1rem',
    },
  },
}));

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
  },
});

export default function Navbar() {
  const dispatch = useDispatch();
  const [searchTempVal,setSearchTempVal] = useState('');
  const router = useRouter()
  const setSearchValue = (event:React.SyntheticEvent) => {
    router.pathname === '/search-result' ? event.preventDefault() : null;
    const searchvalue = searchTempVal;
    dispatch(setSearchedWord({searchValue : searchvalue}))
  };

  const [currentLanguage, setCurrentLanguage] = useState('En');
  const changeLanguage = (lang:string, event:any) => {
    event.preventDefault();
    setCurrentLanguage(lang);
  };
  
  const [state, setState] = React.useState({
    left: false,
  });

  // eslint-disable-next-line max-len
  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event
      && event.type === 'keydown'
      && ((event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: { sm: 400, xs: '100%' } }}
      role="presentation"
    >
      <List>
        <ListItem sx={{ display: 'block' }}>
          <div>
            <ListItemButton
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <Link href='/'>
                <ListItemText
                  primaryTypographyProps={{ fontSize: { sm: '1.5rem', xs: '1rem' } }}
                  primary="HomePage"
                  />
              </Link>
            </ListItemButton>
            <ListItemButton
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <Link href='/categories'>
              <ListItemText
                primaryTypographyProps={{ fontSize: { sm: '1.5rem', xs: '1rem' } }}
                primary="Categories"
              />
              </Link>
            </ListItemButton>
            <ListItemButton
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <Link href='/about'>
              <ListItemText
                primaryTypographyProps={{ fontSize: { sm: '1.5rem', xs: '1rem' } }}
                primary="About"
              />
              </Link>
            </ListItemButton>
            <ListItemButton
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <Link href='/#'>
              <ListItemText
                primaryTypographyProps={{ fontSize: { sm: '1.5rem', xs: '1rem' } }}
                primary="Pages"
              />
              </Link>
            </ListItemButton>
          </div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" elevation={0} id="navbar">
        <Toolbar sx={{
          backgroundColor: '#E8F3F3',
          height: { md: '4.375rem', sm: '9rem', xs: '8rem' },
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
          padding: {
            lg: '0 5rem', md: '0 3rem',sm:'0 3rem', xs: '0 1.5rem',
          },
        }}
        >
          <Box className="left-menu" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Link href="/"><Typography sx={{ color: '#333333', marginRight: '1rem', fontSize: '0.938rem', '&:hover':{cursor:'pointer'} }}>HomePage</Typography></Link>
            <Link href="/categories" ><Typography sx={{ color: '#333333', margin: { md: '0 1rem', sm: '0 1.7rem' }, fontSize: '0.938rem','&:hover':{cursor:'pointer'} }}>Categories</Typography></Link>
            <Link href="/about"><Typography sx={{ color: '#333333', margin: { md: '0 1rem', sm: '0 1.7rem' }, fontSize: '0.938rem','&:hover':{cursor:'pointer'} }}>About</Typography></Link>
            <Link href="/#"><Typography sx={{ color: '#333333', margin: { md: '0 1rem', sm: '0 1.7rem' }, fontSize: '0.938rem','&:hover':{cursor:'pointer'} }}>Pages</Typography></Link>
          </Box>

          <Link href="/">
          <Box
            className="logo"
            sx={{
              display: 'flex', alignItems: 'flex-end', flex: '1', justifyContent: 'center', '&:hover': {cursor: 'pointer'}
            }}
          >
            <Typography variant="h1" sx={{ backgroundColor: '#00AAA1', fontSize: { md: '1.688rem', sm: '2.5rem', xs: '2rem' }, fontWeight: '600' }}>Note</Typography>
            <Typography
              variant="h1"
              sx={{
                color: '#333333', fontSize: { md: '1.063rem', sm: '1.65rem', xs: '1rem' }, fontWeight: '600', margin: { md: '0 0.05rem 0 0.2rem', xs: '0 0.15rem 0 0.4rem' },
              }}
            >
              Book
            </Typography>
            <Box sx={{
              width: { md: '0.25rem', sm: '0.35rem', xs: '.25rem' }, height: { md: '0.25rem', sm: '0.35rem', xs: '.25rem' }, backgroundColor: '#00AAA1', borderRadius: '50%', transform: 'translateY(-100%)',
            }}
            />
          </Box>
          </Link>

          <Box
            className="right-menu"
            sx={{
              color: '#333333', display: 'flex', flex: { md: '0 1 auto', sm: '1', xs: '1' }, alignItems: 'center', width: {xs:'100%',md:'auto'},
            }}
          >
            <Box sx={{ marginRight: 'auto' }}>
              {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <MenuIcon
                    onClick={toggleDrawer(anchor, true)}
                    className="menu-bar"
                    sx={{
                      fontSize: { sm: '2.1rem', xs: '1.4rem' },
                      color: 'black',
                      display: { md: 'none', sm: 'block' },
                    }}
                  />
                  <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                  >
                    {list(anchor)}
                  </SwipeableDrawer>
                </React.Fragment>
              ))}
            </Box>
            <Search sx={{ margin: { md: '0 1rem', sm: '0 1.3rem', xs: '.6rem' }}}>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(event)=>setSearchTempVal(event.target.value)}
                onKeyDown={(event)=>{event.key === "Enter"? setSearchValue(event) : null; router.push('/search-result')}}
                sx={{color:'lightslategray'}}
              />
              <Link href="/search-result"><Box sx={{ margin: { md: '0 1rem', sm: '0 1.3rem', xs: '.3rem .6rem' } }} onClick={(event) => { setSearchValue(event); }}><img className="search-icon" src="/icon/search.svg" alt="" /></Box></Link>
            </Search>

            <Link href="/write"><Box sx={{ margin: { md: '0 1rem', sm: '0 1.3rem', xs: '.6rem' }, '&:hover': {cursor: 'pointer'} }}><img className="edit-icon" src="/icon/edit.svg" alt="" /></Box></Link>
           <Link href="/contact"><Typography sx={{ margin: { md: '0 1rem', sm: '0 1.6rem', xs: '.6rem' },color: '#333333', fontSize: { sm: '1.4rem', md: '1rem'}, fontWeight: 400, '&:hover': {cursor: 'pointer'} }}> Contact</Typography></Link>
            <Box className="categories-container" sx={{ position: 'relative', display: 'flex', margin: { md: '0 1rem', sm: '0 1.6rem', xs: '.6rem' } }}>
              <Link href="/#"><Typography sx={{ color: '#333333', fontSize: { sm: '1.4rem', md: '0.938rem' }, fontWeight: 400, '&:hover': {cursor: 'pointer'} }}>{currentLanguage}</Typography></Link>
              <img className="dropdown-icon" src="/icon/arrow-down.svg" alt="" />
              <List className="categories-list">
                <ListItem onClick={(event) => { changeLanguage('Ch', event);}} className="categories-item" sx={{ justifyContent:'center', color: '#333333', fontSize:{xs:'.9rem',sm:'1.2rem',md:'0.9rem'},backgroundColor: 'white',padding:'6px 0', '&:hover': {cursor: 'pointer'}}}>Ch</ListItem>
                <ListItem onClick={(event) => { changeLanguage('Id', event); }} className="categories-item" sx={{ justifyContent:'center', color: '#333333', fontSize:{xs:'.9rem',sm:'1.2rem',md:'0.9rem'},backgroundColor: 'white',padding:'6px 0', '&:hover': {cursor: 'pointer'}}}>Id</ListItem>
                <ListItem  onClick={(event) => { changeLanguage('My', event); }} className="categories-item" sx={{ justifyContent:'center', color: '#333333', fontSize:{xs:'.9rem',sm:'1.2rem',md:'0.9rem'},backgroundColor: 'white',padding:'6px 0', '&:hover': {cursor: 'pointer'}}}>My</ListItem>
              </List>
            </Box>
            {/* <Box sx={{ display: 'flex' }}>
              <Box sx={{
                width: { md: '1.5625rem', sm: '2.5rem', xs: '1.5rem' },
                height: { md: '1.3125rem', sm: '2.2rem', xs: '1.2rem' }, display: 'flex',
                alignItems: 'center', justifyContent: 'center', borderRadius: '0.25rem',
              }}
              >
                <img className="sun-icon" src="icon/sun.svg" alt="" />
              </Box>
              <Box sx={{
                width: { md: '1.5625rem', sm: '2.5rem', xs: '1.5rem' },
                height: { md: '1.3125rem', sm: '2.2rem', xs: '1.2rem' }, display: 'flex',
                alignItems: 'center', justifyContent: 'center', borderRadius: '0.25rem',
                backgroundColor: '#00AAA1',
              }}
              >
                <img className="moon-icon" src="icon/moon.svg" alt="" />
              </Box>
            </Box> */}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
