import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import ContactForm from '../components/contactForm';

export default function Contact() {
  return (
    <Container id="contact" sx={{ padding: 2, border: '5px solid', borderImage: 'linear-gradient(to top right, rgba(106, 27, 154, 1) 0%, rgba(106, 27, 154, 0) 50%, rgba(106, 27, 154, 0) 100%) 1', boxSizing: 'border-box', maxWidth: '100%' }}>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={10} md={10} lg={10} xl={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 2, width: '100%' }}>
            <Typography variant="h4" gutterBottom> Contact Me </Typography>
            <Typography variant="body1" paragraph> Feel free to reach out! I'm always interested in networking and hearing about exciting new happenings and opportunities in the field! </Typography>
            <ContactForm />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}