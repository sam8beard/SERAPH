import './ProjectCreation.css';
import { useState } from "react";
import ProjectNameInput from "../components/project_update_components/ProjectNameInput.jsx";
import CustomerNameInput from "../components/project_update_components/CustomerNameInput.jsx";
import TechUsedInput from "../components/project_update_components/TechUsedInput.jsx";
import ArchivedInput from "../components/project_update_components/ArchvedInput.jsx";
import SubmitInput from "../components/project_update_components/SubmitInput.jsx";

const ProjectUpdate = () => { 
    const [projectName, setProjectName] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [techUsed, setTechUsed] = useState("");
    const [archived, setArchived] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            projectName,
            customerName,
            techUsed,
            archived,
        };
        const url = "http://127.0.0.1:5000/update_project";
        const options = {
            method: "PUT",
            headers : {
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
    )
}
export default ProjectUpdate;