import { Col, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import editIcon from '../../assets/edit.png';
import './CardGrid.css';

function CardGrid({ projects }) {
    return (
        <Row className="parent-CG">
            {projects.map((project) => (
                <Col lg={4} md={6} sm={12} key={project.projectID} className="mb-4">
                    <Card className="cg-style">
                        <div className="d-flex">
                            <Link to={`/projectview/${project.projectID}`} className="card-link">
                                <div className="d-flex flex-row w-100">
                                    <div className="cg-img-container">
                                        <Card.Img 
                                            variant="left" 
                                            src={project.projectURL} 
                                            alt="Project Icon" 
                                            className="cg-img"
                                        />
                                    </div>
                                    <Card.Body className="d-flex flex-column justify-content-center align-items-center cg-body">
                                        <Card.Title>{project.projectName}</Card.Title>
                                        <Card.Text>{project.customerName}</Card.Text>
                                        <Card.Text>{project.projectID}</Card.Text>
                                    </Card.Body>
                                </div>
                            </Link>
                            <div className="edit-button-container">
                                <Button variant="secondary" as={Link} to={`/projectupdate/${project.projectID}`} className="cg-edit-button">
                                    <img src={editIcon} alt="Edit" className="edit-icon" />
                                </Button>
                            </div>
                        </div>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default CardGrid;
