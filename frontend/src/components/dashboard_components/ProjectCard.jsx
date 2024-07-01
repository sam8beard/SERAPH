import React from 'react'
import './ProjectCard.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ProjectCard = ({projects}) => { 

    return ( 
        <> 
            <div >
                {projects.map((data) => (
                    <Card style={{ width: '18rem', borderRadius: '' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{data.projectName}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                ))}
            
                
            </div>
        </>
    )
}
export default ProjectCard