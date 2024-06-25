import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const ProjectDetails = ({ project }) => {
  if (!project) {
    return null;
  }

  return (
    <Box sx={{ padding: 2, color: '#fff', backgroundColor: '#140026', height:'90vh' }}>
      <Typography variant="h4">{project.name}</Typography>
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