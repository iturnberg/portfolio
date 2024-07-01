import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { useDisplay } from '../components/displayContext';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #6a1b9a',
  backgroundColor: '#140026',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    '& .card-img-custom': {
      opacity: 1,
    },
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  opacity: 0.75,
  transition: 'opacity 0.3s',
}));

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
      sx={{ mb: 2 }}
    >
      <StyledCard className="card-custom">
        <StyledCardMedia
          component="img"
          image={project.img}
          alt={project.name}
          className="card-img-custom"
          sx={{
            height: 200,
            objectFit: 'cover',
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
              className="card-button"
              fullWidth
              onClick={handleDetailsClick}
              sx={{
                color: '#c414e7 !important',
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
            >
              View Details
            </Button>
          </Box>
        </CardContent>
      </StyledCard>
    </Grid>
  );
}

export default PortfolioCard;