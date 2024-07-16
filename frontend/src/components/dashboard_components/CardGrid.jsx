import { Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardGrid({ projects }) {
    return (
        <Row lg={7} style={{ gap: "10px" }}>
            {projects.map((project) => (
                <Col className="d-flex" lg={3} md={5} sm={4} style={{ gap: "5px" }} key={project.projectID}>
                    <Card className="cg-style" style={{ width: '60rem', borderRadius: '', backgroundColor: "#D9D9D9" }}>
                    <Card.Body>
                            <Card.Text>{project.customerName}</Card.Text>
                            <Card.Img variant="top" src={project.projectURL} alt="Project Icon" style={{ width: "5rem", height: "5rem" }} />
                            <Card.Text>{project.projectID}</Card.Text>
                            <Card.Title>{project.projectName}</Card.Title>
                            <Button className="cg-button" variant="primary" as={Link} to={`/projectview/${project.projectID}`} style={{ margin: "1rem"}}>View Project</Button>
                            <Button className="cg-button" variant="primary" as={Link} to={`/projectupdate/${project.projectID}`}style={{ margin: "1rem"}}>Edit Project</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default CardGrid;