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
              backgroundColor: '#5638a8',
              color: '#000000',
              '&:hover': {
                backgroundColor: '#613fbf',
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
              backgroundColor: '#5638a8',
              color: '#000000',
              '&:hover': {
                backgroundColor: '#613fbf',
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