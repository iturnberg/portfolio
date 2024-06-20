import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import maggie1 from '../assets/maggie1.jpg';
import vivian1 from '../assets/vivian1.jpg';

export default function About() {
  return (
    <Container
    id="about"
      sx={{
        padding: 2,
        border: '5px solid',
        borderImage: 'linear-gradient(to top left, rgba(106, 27, 154, 1) 0%, rgba(106, 27, 154, 0) 50%, rgba(106, 27, 154, 0) 100%) 1',
        marginBottom: 5,
      }}
    >
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: 2,
              minHeight: '85vh',
            }}
          >
            <Typography variant="h4" gutterBottom>
              It's me, Ian Turnberg
            </Typography>
            <Typography variant="body1" paragraph>
              Former technical sourcer, long time computer dweeb. I've always had a love for coding and the online space in general, and I'm excited to finally be starting my adventure as a developer. I've recently taken UCF's Fullstack Coding Bootcamp, and I'm currently looking to grow as either a front end or fullstack developer.
            </Typography>
            <Typography variant="body1" paragraph>
              In my free time I enjoy playing video games, spending time with my cats, and working on projects.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={6} textAlign="center">
                <Box component="img" src={maggie1} sx={{ maxWidth: 250, maxHeight: 250 }} />
                <Typography>Maggie!</Typography>
              </Grid>
              <Grid item xs={12} md={6} textAlign="center">
                <Box component="img" src={vivian1} sx={{ maxWidth: 250, maxHeight: 250 }} />
                <Typography>Vivian!</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}