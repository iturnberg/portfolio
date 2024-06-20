import React from 'react';
import { Container, Grid, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import jobs from '../jobs';

const education = [
    {
        institution: "UCF Fullstack Bootcamp",
        duration: "March, 2024 - June, 2024",
    },
    {
        institution: "Saint Petersburg College",
        location: "Saint Petersburg, FL",
        duration: "2017-2019",
    },
    {
        institution: "The Sourcing Institute",
        duration: "2012",
    },
];

const EducationCard = () => {
    return (
        <Card sx={{ mb: 4, border: '1px solid #6a1b9a', backgroundColor: '#140026' }}>
            <CardContent>
                <Typography variant="h5">Education</Typography>
                <List sx={{ color: '#BB86F5' }}>
                    {education.map((edu, index) => (
                        <ListItem key={index} disableGutters>
                            <ListItemText
                                primary={
                                    <Typography variant="h5" component="span">
                                        {edu.institution}
                                    </Typography>
                                }
                                secondary={
                                    <Typography component="span" sx={{ color: '#902ded' }}>
                                        {edu.year && ` - ${edu.year}`}
                                        {edu.location && <><br />{edu.location}</>}
                                        {edu.duration && <><br />{edu.duration}</>}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

const Resume = () => {
    return (
        <Container>
            <Grid container justifyContent="center">
                <Grid item md={8}>
                    <div style={{ textAlign: 'center', margin: '16px 0' }}>
                        <Typography variant="h3">Ian Turnberg</Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>Saint Petersburg, FL | 860-849-0825 | ian.r.turnberg@gmail.com</Typography>
                        <Typography variant="h5">FullStack Developer</Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>React, JavaScript, NodeJS, MongoDB, ExpressJS, SQL, NoSQL, HTML, CSS, Bootstrap, Material-UI</Typography>
                        <Typography variant="h5">Tech Sourcer</Typography>
                        <Typography variant="body1">Experienced with LinkedIn and Boolean search, along with use of sites and tools including Seekout, GitHub, Indeed and Stack Overflow. Familiar with a variety of ATS: Taleo, Oracle, Bullhorn and Loxo. I’ve also leveraged tools such as tampermonkey scripts and built excel sheets/scripts to scrape, manage and store data.</Typography>
                    </div>
                    {jobs.map((job, index) => (
                        <Card key={index} sx={{ mb: 4, border: '1px solid #6a1b9a', backgroundColor: '#140026' }}>
                            <CardContent>
                                <Typography variant="h5">{job.title}</Typography>
                                <Typography variant="subtitle1">{job.company} - {job.location}</Typography>
                                <Typography variant="subtitle2">{job.duration}</Typography>
                                <List sx={{ color: '#902ded' }}>
                                    {job.responsibilities.map((resp, i) => (
                                        <ListItem key={i} disableGutters>
                                            <ListItemText primary={resp} />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    ))}
                    <EducationCard />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Resume;