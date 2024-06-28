import React from 'react'
import './ProjectCard.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ProjectCard = ({projects}) => { 
    return ( 
        <> 
            <div >
                <Container className="card-PC"> 
                       
                    <Row>
                        {projects.map((project) => (
                            
                                <Col className="card-PC"> 
                                    {project.projectID}
                                    <br></br>
                                    {project.customerName}
                                    <br></br>
                                    {project.techUsed}
                                    <br></br>
                                    {project.flightDirectorID}
                                    <br></br>
                                    {project.archived}
                                </Col>
                            
                        
                            
                        ))}
                    </Row>
                </Container> 
            </div>
        </>
    )
}
export default ProjectCard