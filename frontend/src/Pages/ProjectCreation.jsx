import React from "react";
import './ProjectCreation.css'; 

import plussign from '../assets/Plus_Sign.png';
import seraph_logo from '../assets/seraph_logo.png';

function ProjectCreation() {
    return (
            <div className="project-creation">
                <div className="div">
                    {/*Div for the Nav Bar*/}
                    <div className="div-2">
                        <div className="text-wrapper-1">Welcome User</div>
                        <div className="p">S E R A P H</div>
                        <img className="image" alt="Image" src={seraph_logo} />
			            <div className="text-wrapper-2">Project Creation</div>
                    </div>

                    {/* */}
                    <div className="div-3">
                        <div className="text-wrapper-3">Title</div>
                        <div className="rectangle-1" />
                        <div className="text-wrapper-4">Team Members</div>
                        
                        <div className="rectangle-2" style={{ left: '33px' }} />
                        <div className="rectangle-2" style={{ left: '294px' }} />
                        <div className="rectangle-2" style={{ left: '555px' }} />
                        <div className="rectangle-2" style={{ left: '816px' }} />


                        <div className="text-wrapper-5">Customer</div>
                        <div className="rectangle-3" />
                        <div className="text-wrapper-6">Technologies Used</div>
                        
                        <div className="rectangle-4" style={{ left: '33px' }} />
                        <div className="rectangle-4" style={{ left: '294px' }} />
                        <div className="rectangle-4" style={{ left: '555px' }} />
                        <div className="rectangle-4" style={{ left: '816px' }} />

                        <div className="text-wrapper-7">Training Requests</div>
                        <div className="rectangle-5" />
                        <div className="text-wrapper-8">Element Chief</div>
                        <div className="rectangle-6" />

                        <div className="text-wrapper-9">Create</div>
                        <div className="rectangle-7" />

                        <img className="plus-sign-1" alt="Group" src={plussign} />
                        <img className="plus-sign-2" alt="Group" src={plussign} />

                    </div>

                </div>
            </div>
    ); 
}

export default ProjectCreation;
