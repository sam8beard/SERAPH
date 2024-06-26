import React from 'react'
import './ProjectCard.css'
const ProjectCard = ({projects}) => { 
    return ( 
        <> 
            {projects.map((project) => (
                <div className="card">
                    <div className="card-section"> {project.projectID} </div>
                    <div className="card-section"> {project.customerName} </div>
                    <div className="card-section"> {project.techUsed} </div>
                    <div className="card-section"> {project.flightDirectorID} </div>
                    <div className="card-section"> {project.archived} </div>
               
                </div>    

            ))}
        </>
    )
}
export default ProjectCard