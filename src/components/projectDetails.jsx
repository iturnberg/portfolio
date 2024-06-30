import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const ProjectDetails = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <Box
      sx={{
        padding: 2,
        color: '#fff',
        backgroundColor: '#140026',
        height: '90vh',
        width: '800px', // Set the width to 800px
        minWidth: '800px', // Ensure the minimum width is 800px
        maxWidth: '800px', // Ensure the maximum width is 800px
        margin: '0 auto', // Center the component horizontally
        border: '1px solid #6a1b9a',
      }}
    >
      <Typography variant="h4">{project.name}</Typography>
      {project.demo && (
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <img src={project.demo} alt={`${project.name} demo`} style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
      )}
      <Typography variant="body1" sx={{ mt: 2 }}>
        {project.description}
      </Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>
        {project.bigDescription}
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <Button
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              position: 'relative',
              color: '#c414e7 !important',
              paddingLeft: '10px',
              backgroundColor: 'black',
              borderRadius: '8px',
              transition: 'background-color 0.3s, border-image 0.3s',
              overflow: 'hidden',
              zIndex: 1,
              outline: 'none !important',
              boxShadow: 'none !important',
              '&:focus': {
                outline: 'none !important',
                boxShadow: '0 0 0 3px rgba(106, 27, 154, 0.5) !important',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-3px',
                left: '-3px',
                right: '-3px',
                bottom: '-3px',
                borderRadius: 'inherit',
                background: 'linear-gradient(90deg, rgba(106, 27, 154, 0) 25%, rgba(106, 27, 154, 1) 50%, rgba(106, 27, 154, 0) 75%)',
                backgroundSize: '200% 200%',
                zIndex: -2,
                transition: 'background 0.3s',
                animation: 'rotateGradient 2s linear infinite',
                animationPlayState: 'paused',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '4px',
                left: '4px',
                right: '4px',
                bottom: '4px',
                borderRadius: 'inherit',
                backgroundColor: 'black',
                zIndex: -1,
              },
              '&:hover::before': {
                animationPlayState: 'running',
              },
              '&:hover': {
                backgroundColor: 'black',
              },
            }}
            fullWidth
          >
            View Repo
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              position: 'relative',
              color: '#c414e7 !important',
              paddingLeft: '10px',
              backgroundColor: 'black',
              borderRadius: '8px',
              transition: 'background-color 0.3s, border-image 0.3s',
              overflow: 'hidden',
              zIndex: 1,
              outline: 'none !important',
              boxShadow: 'none !important',
              '&:focus': {
                outline: 'none !important',
                boxShadow: '0 0 0 3px rgba(106, 27, 154, 0.5) !important',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-3px',
                left: '-3px',
                right: '-3px',
                bottom: '-3px',
                borderRadius: 'inherit',
                background: 'linear-gradient(90deg, rgba(106, 27, 154, 0) 25%, rgba(106, 27, 154, 1) 50%, rgba(106, 27, 154, 0) 75%)',
                backgroundSize: '200% 200%',
                zIndex: -2,
                transition: 'background 0.3s',
                animation: 'rotateGradient 2s linear infinite',
                animationPlayState: 'paused',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '4px',
                left: '4px',
                right: '4px',
                bottom: '4px',
                borderRadius: 'inherit',
                backgroundColor: 'black',
                zIndex: -1,
              },
              '&:hover::before': {
                animationPlayState: 'running',
              },
              '&:hover': {
                backgroundColor: 'black',
              },
            }}
            fullWidth
          >
            Live Demo
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectDetails;