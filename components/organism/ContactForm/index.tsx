import React from 'react';
import {
  Box, TextField, Stack, Button,
} from '@mui/material';

export default function ContactForm() {
  return (
    <Box component="form" sx={{ flex: '1' }}>
      <Stack direction="row" sx={{ gap: '1rem' }}>
        <TextField
          className="contact-input"
          sx={{
            flex: '1', fontSize: '0.938rem', label: { color: '#999999' },
          }}
          id="outlined-basic"
          label="Name"
          variant="outlined"

        />
        <TextField
          className="contact-input"
          sx={{
            flex: '1', fontSize: '0.938rem', label: { color: '#999999' },
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
      </Stack>
      <TextField
        className="contact-input"
        sx={{
          flex: '1', fontSize: '0.938rem', width: '100%', margin: '1rem 0', label: { color: '#999999' },
        }}
        id="outlined-basic"
        label="Subject"
        variant="outlined"
      />
      <TextField
        className="contact-input"
        id="outlined-multiline-static"
        label="Type your message"
        multiline
        rows={7}
        sx={{ width: '100%', label: { color: '#999999' } }}
      />
      <Button
        variant="contained"
        disableElevation
        sx={{
          marginTop: '1rem', backgroundColor: '#00AAA1', fontSize: '0.938rem', textTransform: 'initial', fontWeight: '400', padding: '.6rem 1.5rem',
        }}
      >
        Send message
      </Button>

    </Box>
  );
}
