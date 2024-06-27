import React from 'react'
import './ProjectCard.css'
const ProjectCard = ({projects}) => { 
    return ( 
        <> 
            <div className="cards-container-PC">
                {projects.map((project) => (
                    <div className="card-PC">
                        <div className="card-info-PC"> {project.projectID} </div>
                        <div className="card-info-PC"> {project.customerName} </div>
                        <div className="card-info-PC"> {project.techUsed} </div>
                        <div className="card-info-PC"> {project.flightDirectorID} </div>
                        <div className="card-info-PC"> {project.archived} </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ProjectCard