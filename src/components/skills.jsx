import React from 'react';
import { Box, Card, CardMedia, Tooltip } from '@mui/material';

const images = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
];

// Function to extract skill name from the URL
const getSkillName = (url) => {
  const parts = url.split('/');
  const fileName = parts[parts.length - 1];
  return fileName.split('-')[0]; // Extract skill name before '-original.svg'
};

const CardBelt = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        padding: '10px',
        whiteSpace: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box', // Include padding and border in the element's total width and height
      }}
    >
      {images.map((src, index) => (
        <Tooltip key={index} title={getSkillName(src)} arrow>
          <Card
            sx={{
              flex: '0 0 auto',
              margin: '0 10px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(106, 27, 154, 0.5)',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardMedia
              component="img"
              image={src}
              alt={`icon-${index}`}
              sx={{ maxWidth: '100%' }}
            />
          </Card>
        </Tooltip>
      ))}
    </Box>
  );
};

export default CardBelt;