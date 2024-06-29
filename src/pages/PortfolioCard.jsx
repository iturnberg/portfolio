import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useDisplay } from '../components/displayContext';

function PortfolioCard({ project }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { showProjectDetails } = useDisplay();

  const handleDetailsClick = () => {
    showProjectDetails(project);
  };

  return (
    <Grid
      item
      xs={12}
      md={6}
      ref={ref}
      className={inView ? 'fade-in' : 'fade-out'}
      sx={{ mb: 2 }} // Adjust margin bottom to reduce gap
    >
      <Card
        className="card-custom"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #6a1b9a',
          backgroundColor: '#140026',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'scale(1.05)' },
        }}
      >
        <CardMedia
          component="img"
          image={project.img}
          alt={project.name}
          className="card-img-custom"
          sx={{
            height: 200, // Set a fixed height for the image
            objectFit: 'cover', // Ensure the image covers the area without distortion
          }}
        />
        <CardContent className="card-body-custom" sx={{ flexGrow: 1, color: '#902ded' }}>
          <Typography variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="#8b41d1">
            {project.description}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#5638a8',
                color: '#000000',
                '&:hover': {
                  backgroundColor: '#613fbf',
                },
              }}
              fullWidth
              onClick={handleDetailsClick}
            >
              View Details
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PortfolioCard;