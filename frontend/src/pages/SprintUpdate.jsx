import './SprintUpdate.css';

import StartDate from '../components/sprint_creation_components/StartDate.jsx';
import EndDate from '../components/sprint_creation_components/EndDate.jsx';
import SprintInput from '../components/sprint_creation_components/SprintInput.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import CommittedInput from '../components/sprint_creation_components/CommittedInput.jsx';
import Uncommitted from '../components/sprint_creation_components/Uncommitted.jsx';
import Completed from '../components/sprint_creation_components/Completed.jsx';
import Notes from '../components/sprint_creation_components/Notes.jsx';
import ButtonImp from '../components/sprint_creation_components/ButtonImp.jsx';
import { useState, useEffect } from "react";

const SprintUpdate = () => { 
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [committedLoad, setCommittedLoad] = useState(0);
    const [uncommittedLoad, setUncommittedLoad] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [notes, setNotes] = useState("");

    useEffect(() => {
        async function fetchSprintDetails() {
            const response = await fetch('http://127.0.0.1:5000/get_sprint/P001');
            const data = await response.json();
            setStartDate(data.startDate);
            setProjectName(data.project.projectName);
            setCustomerName(data.project.customerName);
            setTechUsed(data.project.techUsed);
            setArchived(data.project.archived);
        }
        fetchSprintDetails();
    }, []);
    return (
        <div className="parent">
            <div className="top">
                <div className="title">
                    <h1>Sprint Update Form</h1>
                </div>
            </div>

            <div className="input">
                <div className="date">
                    <StartDate/> 
                    <EndDate/>
                </div>

                
                <CommittedInput/>
                
               <Uncommitted/>
                
                <Completed/>
               
               <Notes/>
                
               
            </div>

            <div className="bottom">

            <div className="buttons">
        <button type="submit" className="submitBtn">Update</button>
    </div>
                
            </div>

        </div>
    )
}
export default SprintUpdate