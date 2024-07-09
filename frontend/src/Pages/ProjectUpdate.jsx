<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ProjectNameInput from "../components/project_update_components/ProjectNameInput.jsx";
import CustomerNameInput from "../components/project_update_components/CustomerNameInput.jsx";
import TechUsedInput from "../components/project_update_components/TechUsedInput.jsx";
import ArchivedInput from "../components/project_update_components/ArchvedInput.jsx";
import SubmitInput from "../components/project_update_components/SubmitInput.jsx";

const ProjectUpdate = () => {
    const { projectId } = useParams();
    const [currentProject, setCurrentProject] = useState({});
    const [projectName, setProjectName] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [techUsed, setTechUsed] = useState("");
    const [archived, setArchived] = useState(false);

    useEffect(() => {
        async function fetchProjectDetails() {
            const response = await fetch(`http://127.0.0.1:5000/get_project/${projectId}`);
            const data = await response.json();
            setCurrentProject(data.project);
            setProjectName(data.project.projectName);
            setCustomerName(data.project.customerName);
            setTechUsed(data.project.techUsed);
            setArchived(data.project.archived);
        }
        fetchProjectDetails();
    }, [projectId]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            customerName,
            techUsed,
            projectid: currentProject.projectid,
            projectName,
            elementchiefid: currentProject.elementchiefid,
            flightdirectorid: currentProject.flightdirectorid,
            archived: archived ? 1 : 0,
            projecturl: currentProject.projecturl,
        };
        const url = `http://127.0.0.1:5000/update_project/${projectId}`;
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, options);
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json();
            alert(data.message);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h1>Project Update Form</h1>
            </div>

            <div>
                <ProjectNameInput projectName={projectName} setProjectName={setProjectName} />
                <CustomerNameInput customerName={customerName} setCustomerName={setCustomerName} />
                <TechUsedInput techUsed={techUsed} setTechUsed={setTechUsed} />
                <ArchivedInput archived={archived} setArchived={setArchived} />
            </div>
            <SubmitInput onSubmit={onSubmit} />
        </form>
    );
};

export default ProjectUpdate;
=======
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


>>>>>>> Jason-11
