import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Container } from '@mui/material';
import list from '../list';

export default function Portfolio() {
  return (
    <Container
    id="portfolio" sx={{ 
      padding: 2,
      border: '5px solid',
      borderImage: 'linear-gradient(to bottom left, rgba(106, 27, 154, 1) 0%, rgba(106, 27, 154, 0) 50%, rgba(106, 27, 154, 0) 100%) 1',
      marginBottom: 5}}>
      <Typography variant="h4" align="center" gutterBottom>
        My Portfolio
      </Typography>
      <Grid container spacing={4}>
        {list.map((project) => (
          <PortfolioCard key={project.name} project={project} />
        ))}
      </Grid>
    </Container>
  );
}

function PortfolioCard({ project }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Grid item xs={12} md={6} ref={ref} className={inView ? 'fade-in' : 'fade-out'} sx={{mb:5}}>
      <Card className="card-custom" sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid #6a1b9a', backgroundColor: '#140026', transition: 'transform 0.3s', '&:hover':{transform: 'scale(1.05)',}}}>
        <CardMedia
          component="img"
          image={project.img}
          alt={project.name}
          className="card-img-custom"
        />
        <CardContent className="card-body-custom" sx={{ flexGrow: 1, color: '#902ded' }}>
          <Typography variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="#8b41d1">
            {project.description}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Button
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  backgroundColor:'#5638a8',
                  color:'#000000',
                  '&:hover':{
                    backgroundColor:'#613fbf',
                  }
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
                  backgroundColor:'#5638a8',
                  color:'#000000',
                  '&:hover':{
                    backgroundColor:'#613fbf',
                  }
                }}
                fullWidth
              >
                Live Demo
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}