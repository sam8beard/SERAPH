import React, { useState } from 'react';
import './ProjectUpdate.css';
import ProjectNameInput from '../components/sprint_update_components/ProjectNameInput';
import CustomerNameInput from '../components/sprint_update_components/CustomerNameInput';
import TechUsedInput from '../components/sprint_update_components/TechUsedInput';
import ArchivedInput from '../components/sprint_update_components/ArchivedInput';
import Submit from '../components/sprint_update_components/ButtonSubmit';

function ProjectUpdate() {
    const [ customername, setCustomerName ] = useState("");
    const [ techused, setTechUsed ] = useState("");
    const [ projectname, setProjectName ] = useState("");
    const [ archived, setArchived ] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            customername,
            techused,
            projectname,
            archived
        };
        const url = "http://127.0.0.1:5000/update_project";
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
        <form className="parent" onSubmit={onSubmit}>
            <div className="top">
                <div className="title">
                    <h1>Project Update Form</h1>
                </div>
            </div>

            <div className="input">

                <CustomerNameInput customerName={customername} setCustomerName={setCustomerName} />

                <TechUsedInput techUsed={techused} setTechUsed={setTechUsed} />

                <ProjectNameInput projectName={projectname} setProjectName={setProjectName} />

                <ArchivedInput archived={archived} setArchived={setArchived} />

            </div>
        </form>
    )
}

export default ProjectUpdate;