import React, { useState } from 'react';
import { Box, Switch, Collapse, FormControlLabel, Button } from '@mui/material';
import Portfolio from '../pages/portfolio';
import ResumeSection from '../pages/resume';
import { styled } from '@mui/system';

// Custom styles for the scrollbar
const CustomScrollbarBox = styled(Box)({
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'none',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(106, 27, 154, 1)',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#bb86fc',
  },
});

const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/uc?export=download&id=0BxI5e0l4YXWDekRDZ2IwVDg1OEdTY3NvUmF5RUhKWkhENDZN';
  link.download = 'Ian_Turnberg_Resume.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const FlipSwitch = () => {
  const [showPortfolio, setShowPortfolio] = useState(true);

  const handleSwitchChange = (event) => {
    setShowPortfolio(event.target.checked);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <FormControlLabel
        control={
          <Switch
            checked={showPortfolio}
            onChange={handleSwitchChange}
            sx={{
              '& .MuiSwitch-switchBase.Mui-checked': {
                color: showPortfolio ? '#bb86fc' : 'rgba(106, 27, 154, 1)',
              },
              '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                backgroundColor: showPortfolio ? '#bb86fc' : 'rgba(106, 27, 154, 1)',
              },
              '& .MuiSwitch-thumb': {
                color: showPortfolio ? '#bb86fc' : 'rgba(106, 27, 154, 1)',
              },
              '& .MuiSwitch-track': {
                backgroundColor: showPortfolio ? '#bb86fc' : 'rgba(106, 27, 154, 1)',
              },
            }}
          />
        }
        label={showPortfolio ? "Show Resume" : "Show Portfolio"}
      />
      <Box>
        <Collapse in={showPortfolio}>
          <Portfolio />
        </Collapse>
        <Collapse in={!showPortfolio}>
          <CustomScrollbarBox sx={{ overflow: 'auto', maxHeight: '80vh' }}>
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
              <Button variant="contained" color="secondary" onClick={handleDownloadResume}>
                Download Resume
              </Button>
            </Box>
            <ResumeSection />
          </CustomScrollbarBox>
        </Collapse>
      </Box>
    </Box>
  );
};

export default FlipSwitch;