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
import {setSearchedType} from '../../../redux/slices/searchSlice'; 

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
  const [searchedValue,setSearchedValue] = useState('');
  const router = useRouter()
  const setSearchValue = (event:React.SyntheticEvent) => {
    router.pathname === '/search-result' ? event.preventDefault() : null;
    dispatch(setSearchedType({searchedType : 'word',searchedWord: searchedValue}))
  };

  const [currentLanguage, setCurrentLanguage] = useState('En');
  const changeLanguage = (lang:string, event:React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault();
    setCurrentLanguage(lang);
  };
  
  const [state, setState] = React.useState({
    left: false,
  });

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

  // LIST MENU WHEN MOBILE NAVBAR IS ON
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: { sm: 400, xs: '100%' } }}
      role="presentation"
    >
      <List>
        <ListItem sx={{ display: 'block' }}>
          <Box>
            <ListItemButton
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <Link href='/'>
                <ListItemText
                  primaryTypographyProps={{ fontSize: { sm: '1.5rem', xs: '1.1rem' } }}
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
                primaryTypographyProps={{ fontSize: { sm: '1.5rem', xs: '1.1rem' } }}
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
                primaryTypographyProps={{ fontSize: { sm: '1.5rem', xs: '1.1rem' } }}
                primary="About"
              />
              </Link>
            </ListItemButton>
            <ListItemButton
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <Link href='/write'>
              <ListItemText
                primaryTypographyProps={{ fontSize: { sm: '1.5rem', xs: '1.1rem' } }}
                primary="Write Blog"
              />
              </Link>
            </ListItemButton>
          </Box>
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

        {/* NAVBAR LEFT MENU */}
          <Box className="left-menu" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Link href="/">
              <Typography sx={{ color: '#333333', marginRight: '1rem', fontSize: '0.938rem', '&:hover':{cursor:'pointer'} }}>HomePage</Typography>
            </Link>
            <Link href="/categories" >
              <Typography sx={{ color: '#333333', margin: { md: '0 1rem', sm: '0 1.7rem' }, fontSize: '0.938rem','&:hover':{cursor:'pointer'} }}>Categories</Typography>
            </Link>
            <Link href="/about">
              <Typography sx={{ color: '#333333', margin: { md: '0 1rem', sm: '0 1.7rem' }, fontSize: '0.938rem','&:hover':{cursor:'pointer'} }}>About</Typography>
            </Link>
          </Box>


        {/* NAVBAR LOGO */}
          <Link href="/">
            <Box className="logo"
              sx={{
                display: 'flex', 
                alignItems: 'flex-end', 
                flex: '1', 
                justifyContent: 'center', 
                '&:hover': {cursor: 'pointer'}
              }}
            >
              <Typography variant="h1" sx={{ 
                backgroundColor: '#00AAA1', 
                fontSize: { md: '1.688rem', sm: '2.5rem', xs: '2.1rem' }, 
                fontWeight: '600' }}>
                  Note
              </Typography>
              <Typography variant="h1"
                sx={{
                  color: '#333333', 
                  fontSize: { md: '1.063rem', sm: '1.65rem', xs: '1.3rem' }, 
                  fontWeight: '600', 
                  margin: { md: '0 0.05rem 0 0.2rem', xs: '0 0.15rem 0 0.4rem' },
                }}
              >
                Book
              </Typography>
              <Box sx={{
                width: { md: '0.25rem', sm: '0.35rem', xs: '.25rem' }, 
                height: { md: '0.25rem', sm: '0.35rem', xs: '.25rem' },
                backgroundColor: '#00AAA1', 
                borderRadius: '50%', 
                transform: 'translateY(-100%)',
              }}
              />
            </Box>
          </Link>

          {/* NAVBAR RIGHT MENU */}
          <Box className="right-menu" sx={{
              color: '#333333', 
              display: 'flex', 
              flex: { md: '0 1 auto', sm: '1', xs: '1' }, 
              alignItems: 'center', 
              width: {xs:'100%',md:'auto'},
            }}
          >
            {/* MENU ICON WHEN MOBILE */}
            <Box sx={{ marginRight: 'auto' }}>
              {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <MenuIcon
                    onClick={toggleDrawer(anchor, true)}
                    className="menu-bar"
                    sx={{
                      fontSize: { sm: '2.1rem', xs: '1.6rem' },
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

            {/* SEARCH BAR */}
            <Search sx={{ margin: { md: '0 1rem', sm: '0 1.3rem', xs: '.6rem' }}}>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(event)=>setSearchedValue(event.target.value)}
                onKeyDown={(event)=>{event.key === "Enter"? setSearchValue(event) : null; event.key === "Enter"? router.push('/search-result') : null}}
                sx={{color:'lightslategray', height: "2.3rem"}}
              />
              <Link href="/search-result">
                <Box sx={{ margin: { md: '0 1rem', sm: '0 1.3rem', xs: '.3rem .6rem' } }} onClick={(event) => { setSearchValue(event); }}>
                  <img className="search-icon" src="/icon/search.svg" alt="search-icon" />
                </Box>
              </Link>
            </Search>

            <Link href="/write">
              <Box sx={{ 
                margin: { md: '0 1rem', sm: '0 1.3rem', xs: '.6rem' }, 
                '&:hover': {cursor: 'pointer'},
                display: {xs: 'none', md: 'block'}
                }}>
                <img className="edit-icon" src="/icon/edit.svg" alt="" />
              </Box>
            </Link>

            {/* CONTACT */}
            <Link href="/contact">
              <Typography sx={{ 
                display: {xs: 'none', md: 'block'},
                margin: { md: '0 1rem', sm: '0 1.6rem', xs: '.6rem' }, 
                color: '#333333', 
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1rem'}, 
                fontWeight: 400, '&:hover': {cursor: 'pointer'} 
              }}> 
                Contact
              </Typography>
            </Link>

            {/* LANGUAGES */}
            <Box className="categories-container" sx={{ position: 'relative', display: 'flex', margin: { md: '0 1rem', sm: '0 1.6rem', xs: '.6rem' } }}>
              <Link href="/#">
                <Typography sx={{ color: '#333333', fontSize: { sm: '1.4rem', md: '0.938rem' }, fontWeight: 400, '&:hover': {cursor: 'pointer'} }}>{currentLanguage}</Typography>
              </Link>
              <img className="dropdown-icon" src="/icon/arrow-down.svg" alt="" />
              <List className="languages-list">
                <ListItem onClick={(event) => { changeLanguage('Ch', event);}} 
                className="categories-item" 
                sx={{ 
                  justifyContent:'center', 
                  color: '#333333', 
                  fontSize:{xs:'1.1rem', sm:'1.2rem',md:'0.9rem'},
                  backgroundColor: 'white',
                  padding:'6px 0', 
                  '&:hover': {cursor: 'pointer'}
                  }}>
                    Ch
                  </ListItem>
                <ListItem onClick={(event) => { changeLanguage('Id', event); }} 
                className="categories-item" 
                sx={{ 
                  justifyContent:'center', 
                  color: '#333333', 
                  fontSize:{xs:'1.1rem', sm:'1.2rem',md:'0.9rem'},
                  backgroundColor: 'white',
                  padding:'6px 0', 
                  '&:hover': {cursor: 'pointer'}
                  }}>
                    Id
                  </ListItem>
                <ListItem  onClick={(event) => { changeLanguage('My', event); }} 
                className="categories-item" 
                sx={{ 
                  justifyContent:'center', 
                  color: '#333333', 
                  fontSize:{xs:'1.1rem', sm:'1.2rem',md:'0.9rem'},
                  backgroundColor: 'white',
                  padding:'6px 0', 
                  '&:hover': {cursor: 'pointer'}
                  }}>
                    My
                  </ListItem>
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
