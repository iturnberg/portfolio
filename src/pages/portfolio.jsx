import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import list from '../list';
import PortfolioCard from './PortfolioCard';

export default function Portfolio() {
  return (
    <Container
      id="portfolio"
      sx={{
        padding: 2,
        border: '5px solid',
        borderImage:
          'linear-gradient(to bottom left, rgba(106, 27, 154, 1) 0%, rgba(106, 27, 154, 0) 50%, rgba(106, 27, 154, 0) 100%) 1',
        marginBottom: 5,
      }}
    >
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