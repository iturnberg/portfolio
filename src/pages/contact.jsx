import React from 'react';
import { Container, Typography } from '@mui/material';
import ContactForm from '../components/contactForm';

export default function Contact() {
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Contact Me
            </Typography>
            <Typography variant="body1" paragraph>
                Feel free to reach out! I'm always interested to network and hear about exciting new happenings and opportunities in the field!
            </Typography>
            <ContactForm />
        </Container>
    );
}