import React from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import jobs from '../jobs'

const education = [
    {
        institution: "UCF Fullstack Bootcamp",
        year: "2024",
    },
    {
        institution: "The Sourcing Institute",
        year: "2012",
    },
    {
        institution: "Saint Petersburg College",
        location: "Saint Petersburg, FL",
        duration: "2017-2019",
    }
];

const EducationCard = () => {
    return (
        <Card className="mb-4">
            <CardBody>
                <CardTitle tag="h5">Education</CardTitle>
                <CardText>
                    <ul>
                        {education.map((edu, index) => (
                            <li key={index}>
                                <strong>{edu.institution}</strong> {edu.year ? ` - ${edu.year}` : ""}
                                {edu.location ? <span><br />{edu.location}</span> : ""}
                                {edu.duration ? <span><br />{edu.duration}</span> : ""}
                            </li>
                        ))}
                    </ul>
                </CardText>
            </CardBody>
        </Card>
    );
};

const Resume = () => {
    return (
        <Container>
            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <div className="text-center my-4">
                        <h1>Ian Turnberg</h1>
                        <p>Saint Petersburg, FL | 860-849-0825 | ian.r.turnberg@gmail.com</p>
                        <h2>FullStack Developer</h2>
                        <p>Experienced with React, JavaScript, NodeJS, MongoDB, ExpressJS, SQL, NoSQL, HTML, CSS, Bootstrap</p>
                        <h2>Tech Sourcer</h2>
                        <p>Experienced with LinkedIn and Boolean search, along with use of sites and tools including Seekout, GitHub, Indeed and Stack Overflow. Familiar with a variety of ATS: Taleo, Oracle, Bullhorn and Loxo. I’ve also leveraged tools such as tampermonkey scripts and built excel sheets/scripts to scrape, manage and store data.</p>
                    </div>
                    {jobs.map((job, index) => (
                        <Card key={index} className="mb-4">
                            <CardBody>
                                <CardTitle tag="h5">{job.title}</CardTitle>
                                <h6>{job.company} - {job.location}</h6>
                                <h6>{job.duration}</h6>
                                <CardText>
                                    <ul>
                                        {job.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                </CardText>
                            </CardBody>
                        </Card>
                    ))}
                    <EducationCard />
                </Col>
            </Row>
        </Container>
    );
};

export default Resume;
