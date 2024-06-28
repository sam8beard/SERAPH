import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from './ProjectCard'
function CardGrid({projects}) { 
    return ( 
        
                    <Row lg={7} style={{gap: "13px"}}> 
                        {projects.map((project) => { 
                            return ( 
                                <Col className="d-flex" lg={3} md={5} sm={4} style={{gap: "5px"}}> 
                           
                                
                            
                                    <Card  style={{ width: '60rem', borderRadius: '' , backgroundColor: "#D9D9D9", }}>
                                        
                                        <Card.Body>
                                            <Card.Text>{project.customerName}</Card.Text>
                                            <Card.Img variant="top"  src="holder.js/100px180" style={{ width: "5rem", height: "5rem"}} />
                                            <Card.Text>{project.projectID}</Card.Text>
                                            <Card.Title>{project.projectName}</Card.Title>
                                        <Card.Text>
                                        
                                        </Card.Text>
                                        <Button variant="primary" style={{}}>View Project</Button>
                                        </Card.Body>
                                    </Card>
                                
                                
                           
                                </Col>
                            )
                        })}
                        {/* {projects.map((project) => (
                            
                                <Col className="card-PC"> 
                                    
                                </Col>
                            
                            
                            
                        ))} */}
                        
                    </Row>
         
        
    )
}
export default CardGrid