import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Grid } from '@mui/material';

const StyledAbout = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '5px solid',
  borderImage: 'linear-gradient(to bottom left, rgba(106, 27, 154, 1) 0%, rgba(106, 27, 154, 0) 50%, rgba(106, 27, 154, 0) 100%) 1',
  boxSizing: 'border-box',
  overflow: 'hidden',
  maxWidth: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}));

const About = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={10} sm={10} md={10} lg={10} xl={12}>
        <StyledAbout sx={{
          padding: '20px',
          wordWrap: 'break-word',
          maxWidth: '100%',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '100%',
            '& > *': {
              width: '100%',
              maxWidth: '100%',
              wordWrap: 'break-word',
            },
          }}>
            <Typography variant="h4" gutterBottom>
              It's me, Ian
            </Typography>
            <Typography variant="body1" paragraph>
              Former technical sourcer, long time computer dweeb. I've always had a love for coding and the online space in general, and I'm excited to finally be starting my adventure as a developer. I've recently taken UCF's Fullstack Coding Bootcamp, and I'm currently looking to grow as either a front end or fullstack developer.
            </Typography>
            <Typography variant="body1" paragraph>
              In my free time I enjoy playing video games, spending time with my cats, and working on projects.
            </Typography>
          </Box>
        </StyledAbout>
      </Grid>
    </Grid>
  );
};

export default About;