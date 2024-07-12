import React from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardGrid({ sprints }) {
    return (
        <Row lg={7} style={{ gap: "10px" }}>
            {sprints.map((sprint) => (
                <Col className="d-flex" lg={3} md={5} sm={4} style={{ gap: "5px" }} key={sprint.projectID}>
                    <Card className="cg-style" style={{ width: '60rem', borderRadius: '', backgroundColor: "#D9D9D9" }}>
                        <Card.Body>
                            <Card.Title>{sprint.projectID}</Card.Title>
                            <Card.Text>Commited: {sprint.committedLoad}</Card.Text>
                            <Card.Text>Uncommitted: {sprint.uncommittedLoad}</Card.Text>
                            <Card.Text>Completed: {sprint.completed}</Card.Text>
                            <Button variant="primary" className="margin" as={Link} to={`/sprintupdate/${sprint.projectID}/${sprint.startDate}`}>
                                Edit Sprint
                            </Button>
                            <Button variant="primary" className="margin" as={Link} to={`/sprintoverview/${sprint.projectID}/${sprint.startDate}`}>
                                View Sprint
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default CardGrid;
