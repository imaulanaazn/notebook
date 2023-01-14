import React from 'react';
import {
  Box, TextField, Stack, Button,
} from '@mui/material';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [formData,setFormData] = useState({name:'',email:'',subject:'',message:''})
  function submitForm(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    toast("Message sent");
    setFormData({name:'',email:'',subject:'',message:''})
    console.log(formData)
  }
  return (
    <>
    <ToastContainer />
    <Box component="form" sx={{ flex: '1' }} onSubmit={(e)=>{submitForm(e)}}>
      <Stack direction="row" sx={{ gap: '1rem' }}>
        <TextField
          className="contact-input"
          sx={{
            flex: '1', fontSize: '0.938rem', label: { color: '#999999' },
          }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={(e)=>{setFormData({...formData,name:e.target.value})}}
          />
        <TextField
          className="contact-input"
          sx={{
            flex: '1', fontSize: '0.938rem', label: { color: '#999999' },
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={(e)=>{setFormData({...formData,email:e.target.value})}}
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
        value={formData.subject}
        onChange={(e)=>{setFormData({...formData,subject:e.target.value})}}
        />
      <TextField
        className="contact-input"
        id="outlined-multiline-static"
        label="Type your message"
        multiline
        value={formData.message}
        onChange={(e)=>{setFormData({...formData,message:e.target.value})}}
        rows={7}
        sx={{ width: '100%', label: { color: '#999999' } }}
      />
      <Button
        type='submit'
        variant="contained"
        disableElevation
        sx={{
          marginTop: '1rem', backgroundColor: '#00AAA1', fontSize: '0.938rem', textTransform: 'initial', fontWeight: '400', padding: '.6rem 1.5rem',
        }}
      >
        Send message
      </Button>

    </Box>
    </>
  );
}
