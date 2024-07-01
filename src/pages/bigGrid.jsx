import React from 'react';
import { Grid, Box, Button, Collapse } from '@mui/material';
import LeftColumnContent from './leftCol';
import FlipSwitch from '../components/switch';
import ProjectDetails from '../components/projectDetails';
import { useDisplay } from '../components/displayContext';
import '../components/button.css';
import './grid.css';

const FullScreenGrid = () => {
  const { display, project, showDefault } = useDisplay();

  return (
    <Grid container className="full-screen-grid" spacing={2}>
      <Grid item xs={12} md={6} className="left-pane">
        <Collapse in={display === 'default'} orientation="horizontal">
          <Box sx={{ padding: '20px' }}>
            <LeftColumnContent />
          </Box>
        </Collapse>
        <Collapse in={display === 'projectDetails'} orientation="horizontal">
          <Box sx={{ padding: '20px', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <ProjectDetails project={project} />
            <Button onClick={showDefault} className="button">Close</Button>
          </Box>
        </Collapse>
      </Grid>
      <Grid item xs={12} md={6} className="right-pane">
        <Box sx={{ padding: '20px' }}>
          <FlipSwitch />
        </Box>
      </Grid>
    </Grid>
  );
};

export default FullScreenGrid;