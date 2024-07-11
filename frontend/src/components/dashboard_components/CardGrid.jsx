import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardGrid({ projects, numCols }) {
    const colSize = numCols > 0 ? Math.floor(12 / numCols) : 12;

    return (
        <Row style={{ gap: "10px" }}>
            {projects.map((project) => (
                <Col key={project.projectID} lg={colSize}>
                    <Card className="cg-style" style={{ width: '18rem', borderRadius: '', backgroundColor: "#D9D9D9" }}>
                        <Card.Body>
                            <Card.Text>{project.customerName}</Card.Text>
                            <Card.Img variant="top" src={project.projectURL} alt="Project Icon" style={{ width: "5rem", height: "5rem" }} />
                            <Card.Text>{project.projectID}</Card.Text>
                            <Card.Title>{project.projectName}</Card.Title>
                            <Button variant="primary" as={Link} to={`/projectview/${project.projectID}`}>View Project</Button>
                            <Button variant="primary" as={Link} to={`/projectupdate/${project.projectID}`}>Edit Project</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default CardGrid;
