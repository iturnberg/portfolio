import Resume from './resume';
import CardBelt from '../components/skills';
import { Button, Grid, Container } from '@mui/material';
import React, { useState } from 'react';
import resumeFile from '../assets/Ian_Turnberg_Resume.docx';

const ResumeSection = () => {
  const [showResume, setShowResume] = useState(false);

  const handleToggleResume = () => {
    setShowResume(!showResume);
  };


  const handleDownloadResume = () => {
      const link = document.createElement('a');
      link.href = resumeFile;
      link.download = 'Ian_Turnberg_Resume.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  };

  return (
    <Container
    id="resume"
    sx={{
      padding: 2,
      border: '5px solid',
      borderImage: 'linear-gradient(to top left, rgba(106, 27, 154, 1) 0%, rgba(106, 27, 154, 0) 50%, rgba(106, 27, 154, 0) 100%) 1',
      marginBottom: 5,
    }}>
      <CardBelt />
      <Grid container justifyContent="center">
        <Grid item md={8} style={{ textAlign: 'center', margin: '16px 0' }}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={handleToggleResume}>
                {showResume ? 'Hide Resume' : 'Show Resume'}
              </Button>
              <Button variant="contained" color="secondary" onClick={handleDownloadResume}>
                Download Resume
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {showResume && <Resume />}
    </Container>
  );
};

export default ResumeSection;