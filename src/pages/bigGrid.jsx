import React from 'react';
import { Grid, Box } from '@mui/material';
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import CardBelt from '../components/skills';
import FlipSwitch from '../components/switch';

const FullScreenGrid = () => {
  return (
    <Grid container style={{ height: '100vh', maxHeight: '100vh', overflow: 'hidden' }}>
      <Grid item xs={6} style={{ backgroundColor: 'lightblue', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Grid container direction="column" style={{ flex: 1 }}>
          <Grid item style={{ height: '35%', backgroundColor: 'black', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
            <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
              <About />
            </Box>
          </Grid>
          <Grid item style={{ height: '15%', backgroundColor: 'black', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
            <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
              <CardBelt />
            </Box>
          </Grid>
          <Grid item style={{ height: '50%', backgroundColor: 'black', display: 'flex', flexDirection: 'column'}}>
            <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
              <Contact />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6} style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
          <FlipSwitch />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FullScreenGrid;