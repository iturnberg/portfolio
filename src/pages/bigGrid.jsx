import React from 'react';
import { Grid, Box, Button, Collapse, useMediaQuery } from '@mui/material';
import About from './about';
import Contact from './contact';
import CardBelt from '../components/skills';
import FlipSwitch from '../components/switch';
import ProjectDetails from '../components/projectDetails';
import { useDisplay } from '../components/displayContext';
import '../components/button.css';
import './grid.css';
import './animations.css';

const FullScreenGrid = () => {
  const { display, project, showDefault } = useDisplay();
  const blackBackgroundStyle = { backgroundColor: 'black' };
  const isSmallScreen = useMediaQuery('(max-width: 900px)');

  return (
    <Grid container className="full-screen-grid" style={{ height: '100vh', overflow: isSmallScreen ? 'auto' : 'hidden' }}>
      <Grid item xs={12} md={6} className="left-pane" style={{ ...blackBackgroundStyle, display: 'flex', flexDirection: 'column', height: '100%', overflow: isSmallScreen ? 'auto' : 'hidden' }}>
        <Collapse
          in={display === 'default'}
          orientation="horizontal"
          style={{ flex: 1 }}
          className={display === 'default' ? 'smooth-collapse-enter' : 'smooth-collapse-exit'}
        >
          <Grid container direction="column" style={{ flex: 1, height: '100%' }}>
            <Grid item xs={12} style={{ flex: '1 1 25%', ...blackBackgroundStyle, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <Box display="flex" justifyContent="center" alignItems="center" flex={1} sx={{ padding: isSmallScreen ? '10px' : '20px' }}>
                <About />
              </Box>
            </Grid>
            <Grid item xs={12} style={{ flex: '1 1 0%', ...blackBackgroundStyle, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingBottom: '5%' }}>
              <Box display="flex" justifyContent="center" alignItems="center" flex={1} sx={{ padding: isSmallScreen ? '10px' : '20px' }}>
                <CardBelt />
              </Box>
            </Grid>
            <Grid item xs={12} style={{ flex: '1 1 55%', ...blackBackgroundStyle, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingTop: '0%' }}>
              <Box display="flex" justifyContent="center" alignItems="center" flex={1} sx={{padding: isSmallScreen ? '0px' : '0px' }}>
                <Contact />
              </Box>
            </Grid>
          </Grid>
        </Collapse>
        <Collapse
          in={display === 'projectDetails'}
          orientation="horizontal"
          style={{ flex: 1, height: '100vh' }}
          className={display === 'projectDetails' ? 'smooth-collapse-enter' : 'smooth-collapse-exit'}
        >
          <Box display="flex" justifyContent="center" alignItems="center" flex={1} style={{ padding: '20px', position: 'relative' }}>
            <ProjectDetails project={project} />
            <Button onClick={showDefault} className="button">Close</Button>
          </Box>
        </Collapse>
      </Grid>
      <Grid item xs={12} md={6} className="right-pane" style={{ ...blackBackgroundStyle, display: 'flex', flexDirection: 'column', overflow: isSmallScreen ? 'auto' : 'hidden' }}>
        <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
          <FlipSwitch />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FullScreenGrid;