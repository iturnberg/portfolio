import React from 'react';
import { Grid, Box } from '@mui/material';
import About from './about';
import Contact from './contact';
import CardBelt from '../components/skills';
import './leftColStyle.css';

const LeftColumnContent = () => {
  return (
    <Grid container className="left-column" spacing={2} direction="column" justifyContent="center">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ padding: '10px' }}>
          <About />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ padding: '10px' }}>
          <CardBelt />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Box sx={{ padding: '10px' }}>
          <Contact />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LeftColumnContent;