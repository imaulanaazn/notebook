import React from 'react';
import {
  Box, Typography, Link, Stack,
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';

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
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}
TabPanel.defaultProps = {
  children: null,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CommentSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className="comment-section" sx={{ marginTop: '3rem' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="0 Comments" {...a11yProps(0)} sx={{ fontSize: '.839rem', textTransform: 'capitalize', color: '#333333' }} />
          <Tab label="Themefisher" {...a11yProps(1)} sx={{ fontSize: '.839rem', textTransform: 'capitalize', color: '#333333' }} />
          <Tab label="Disqus' Privacy Policy" {...a11yProps(2)} sx={{ fontSize: '.839rem', textTransform: 'capitalize', color: '#333333' }} />
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <>
                <Button
                  variant="contained"
                  disableElevation
                  {...bindTrigger(popupState)}
                  sx={{
                    marginLeft: 'auto', backgroundColor: 'transparent', textTransform: 'capitalize', color: '#333333', padding: '0',
                  }}
                >
                  Dashboard
                  {' '}
                  <i className="fa-solid fa-angle-down" style={{ marginLeft: '.2rem' }} />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </PopupState>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Stack direction="row">
          <Link href="/#" underline="none" sx={{ fontSize: '.839rem', color: '#333333', padding: '0 .4rem' }}>
            <i className="fa-regular fa-heart" style={{ color: '#db4437', marginRight: '.3rem' }} />
            Favorite
          </Link>
          <Link
            href="/#"
            underline="none"
            sx={{
              fontSize: '.839rem', margin: '0 .4rem 0 1rem', color: 'white', backgroundColor: '#1DA1F2', padding: '0 .4rem', borderRadius: '3px',
            }}
          >
            <i className="fa-brands fa-twitter" style={{ color: 'white', marginRight: '.3rem' }} />
            Tweet
          </Link>
          <Link
            href="/#"
            underline="none"
            sx={{
              fontSize: '.839rem', color: 'white', backgroundColor: '#4267B2', padding: '0 .4rem', borderRadius: '3px',
            }}
          >
            <i className="fa-brands fa-facebook-f" style={{ color: 'white', marginRight: '.3rem' }} />
            Share
          </Link>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <>
                <Button
                  variant="contained"
                  disableElevation
                  {...bindTrigger(popupState)}
                  sx={{
                    marginLeft: 'auto', backgroundColor: 'transparent', textTransform: 'capitalize', color: '#333333', padding: '0', fontWeight: '400', fontSize: '.8rem',
                  }}
                >
                  Sort By
                  {' '}
                  <i className="fa-solid fa-angle-down" style={{ marginLeft: '.2rem' }} />
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Best</MenuItem>
                  <MenuItem onClick={popupState.close}>oldest</MenuItem>
                  <MenuItem onClick={popupState.close}>newest</MenuItem>
                </Menu>
              </>
            )}
          </PopupState>
        </Stack>
        <Stack direction="row" sx={{ marginTop: '1rem', gap: '.6rem' }}>
          <Avatar sx={{ bgcolor: '#333333', width: '3rem', height: '3rem' }} variant="square">
            N
          </Avatar>
          <TextField
            id="comment-field"
            label="Start The Discussion..."
            variant="outlined"
            sx={{ padding: '0', flex: '1' }}
            InputLabelProps={{
              style: { fontSize: '1rem' },
            }}
          />
        </Stack>
        <Stack direction="row" sx={{ gap: '1rem', flexDirection: { sm: 'row', xs: 'column' } }}>
          <Box sx={{ marginLeft: { sm: '4rem' } }}>
            <Typography sx={{
              fontSize: '.839rem', color: '#777777', fontWeight: '500', margin: '.2rem 0 .4rem',
            }}
            >
              LOG IN WITH
            </Typography>
            <Stack direction="row" sx={{ gap: '.4rem' }}>
              <Link
                href="/#"
                underline="none"
                sx={{
                  width: '2.4rem', height: '2.4rem', backgroundColor: '#4267B2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <i className="fa-brands fa-facebook-f" style={{ color: 'white', fontSize: '1.2rem' }} />
              </Link>
              <Link
                href="/#"
                underline="none"
                sx={{
                  width: '2.4rem', height: '2.4rem', backgroundColor: '#1DA1F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <i className="fa-brands fa-twitter" style={{ color: 'white', fontSize: '1.2rem' }} />
              </Link>
              <Link
                href="/#"
                underline="none"
                sx={{
                  width: '2.4rem', height: '2.4rem', backgroundColor: '#db4437', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <i className="fa-brands fa-google" style={{ color: 'white', fontSize: '1.2rem' }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ flex: '1' }}>
            <Typography sx={{
              fontSize: '.839rem', color: '#777777', fontWeight: '500', margin: '.2rem 0 .4rem',
            }}
            >
              OR SIGN UP WITH DISCUSS
            </Typography>
            <TextField
              id="signup-name"
              label="Name"
              variant="outlined"
              size="small"
              InputLabelProps={{
                style: { fontSize: '.839rem' },
              }}
              sx={{ width: '100%' }}
            />
          </Box>
        </Stack>
        <Typography sx={{
          fontSize: '.839rem', textAlign: 'center', color: '#999999', marginTop: '4rem',
        }}
        >
          Be the first to comment
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>

    </Box>
  );
}
