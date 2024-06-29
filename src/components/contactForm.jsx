import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Box, TextField, Button, Alert, Grid } from '@mui/material';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({ display: false, message: '', type: '' });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      const templateParams = { name, email, subject, message };
      await emailjs.send('service_mvz9zhm', 'template_lj45liz', templateParams, '3pBNtfkPVVbJvUn-t');
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              {...register('name', {
                required: 'Please enter your name',
                maxLength: { value: 30, message: 'Please use 30 characters or less' }
              })}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
              sx={{
                '& .MuiInputLabel-root': { color: 'rgba(106, 27, 154, 1)' },
                '& .MuiInputBase-input': { color: 'white' },
                '& .MuiFormHelperText-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'rgba(106, 27, 154, 1)' },
                  '&:hover fieldset': { borderColor: '#bb86fc' },
                  '&.Mui-focused fieldset': { borderColor: '#bb86fc' },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              {...register('email', {
                required: 'Please enter a valid email address',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please enter a valid email address'
                }
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
              sx={{
                '& .MuiInputLabel-root': { color: 'rgba(106, 27, 154, 1)' },
                '& .MuiInputBase-input': { color: 'white' },
                '& .MuiFormHelperText-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'rgba(106, 27, 154, 1)' },
                  '&:hover fieldset': { borderColor: '#bb86fc' },
                  '&.Mui-focused fieldset': { borderColor: '#bb86fc' },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              {...register('subject', {
                required: 'Please enter a subject',
                maxLength: { value: 75, message: 'Subject cannot exceed 75 characters' }
              })}
              error={!!errors.subject}
              helperText={errors.subject ? errors.subject.message : ''}
              sx={{
                '& .MuiInputLabel-root': { color: 'rgba(106, 27, 154, 1)' },
                '& .MuiInputBase-input': { color: 'white' },
                '& .MuiFormHelperText-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'rgba(106, 27, 154, 1)' },
                  '&:hover fieldset': { borderColor: '#bb86fc' },
                  '&.Mui-focused fieldset': { borderColor: '#bb86fc' },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              {...register('message', { required: 'Please enter a message' })}
              error={!!errors.message}
              helperText={errors.message ? errors.message.message : ''}
              sx={{
                height: '100px',
                '& .MuiInputLabel-root': { color: 'rgba(106, 27, 154, 1)' },
                '& .MuiInputBase-input': { color: 'white' },
                '& .MuiFormHelperText-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'rgba(106, 27, 154, 1)' },
                  '&:hover fieldset': { borderColor: '#bb86fc' },
                  '&.Mui-focused fieldset': { borderColor: '#bb86fc' },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={disabled}
              sx={{
                backgroundColor: 'rgba(106, 27, 154, 1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#bb86fc',
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {alertInfo.display && (
        <Alert
          severity={alertInfo.type}
          onClose={() => setAlertInfo({ display: false, message: '', type: '' })}
          sx={{
            mt: 2,
            backgroundColor: alertInfo.type === 'success' ? '#bb86fc' : 'rgba(106, 27, 154, 1)',
            color: 'white',
          }}
        >
          {alertInfo.message}
        </Alert>
      )}
    </Box>
  );
};

export default ContactForm;