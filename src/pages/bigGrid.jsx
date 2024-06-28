import React from 'react';
import { Grid, Box, Button, Collapse } from '@mui/material';
import About from './about';
import Contact from './contact';
import CardBelt from '../components/skills';
import FlipSwitch from '../components/switch';
import ProjectDetails from '../components/projectDetails';
import { useDisplay } from '../components/displayContext';
import '../components/button.css';


const FullScreenGrid = () => {
  const { display, project, showDefault } = useDisplay();
  const blackBackgroundStyle = { backgroundColor: 'black' };

  return (
    <Grid container style={{ height: '100vh', maxHeight: '100vh', overflow: 'hidden' }}>
      <Grid item xs={6} style={{ backgroundColor: 'black', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Collapse in={display === 'default'} orientation="horizontal" style={{ flex: 1 }}>
          <Grid container direction="column" style={{ flex: 1 }}>
            <Grid item style={{ height: '30%', ...blackBackgroundStyle, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
                <About />
              </Box>
            </Grid>
            <Grid item style={{ height: '15%', ...blackBackgroundStyle, display: 'flex', flexDirection: 'column', overflow: 'auto', paddingBottom: '5%', }}>
              <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
                <CardBelt />
              </Box>
            </Grid>
            <Grid item style={{ height: '50%', ...blackBackgroundStyle, display: 'flex', flexDirection: 'column' }}>
              <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
                <Contact />
              </Box>
            </Grid>
          </Grid>
        </Collapse>
        <Collapse in={display === 'projectDetails'} orientation="horizontal" style={{ flex: 1, height: '100vh' }}>
          <Box display="flex" justifyContent="center" alignItems="center" flex={1} style={{ padding: '20px', position: 'relative', }}>
            <ProjectDetails project={project} />
            <Button
              onClick={showDefault}
              className="button"
            >
              Close
            </Button>
          </Box>
        </Collapse>
      </Grid>
      <Grid item xs={6} style={{ ...blackBackgroundStyle, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
          <FlipSwitch />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FullScreenGrid;