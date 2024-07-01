import React from 'react';
import { Box, Card, CardMedia, Tooltip, Grid } from '@mui/material';

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

const getSkillName = (url) => {
  const parts = url.split('/');
  const fileName = parts[parts.length - 1];
  return fileName.split('-')[0];
};

const CardBelt = () => {
  return (
    <Grid container justifyContent="center" spacing={1}>
      {images.map((src, index) => (
        <Grid item key={index} xs="auto">
          <Tooltip title={getSkillName(src)} arrow>
            <Card
              sx={{
                margin: '5px',
                padding: 0,
                border: 'none',
                width: '35px',
                height: '35px',
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
        </Grid>
      ))}
    </Grid>
  );
};

export default CardBelt;