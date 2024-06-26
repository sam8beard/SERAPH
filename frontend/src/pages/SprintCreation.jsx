import './SprintCreation.css';
import StartDate from '../components/sprint_creation_components/StartDate.jsx';
import EndDate from '../components/sprint_creation_components/EndDate.jsx';
import SprintInput from '../components/sprint_creation_components/SprintInput.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import CommittedInput from '../components/sprint_creation_components/CommittedInput.jsx';
import Uncommitted from '../components/sprint_creation_components/Uncommitted.jsx';
import Completed from '../components/sprint_creation_components/Completed.jsx';
import Notes from '../components/sprint_creation_components/Notes.jsx';
import ButtonImp from '../components/sprint_creation_components/ButtonImp.jsx';
import { useState } from "react";

const SprintCreation = () => { 
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [sprints, setSprints] = useState("");
    const [committedLoad, setCommittedLoad] = useState("");
    const [uncommittedLoad, setUncommittedLoad] = useState("");
    const [completed, setCompleted] = useState("");
    const [notes, setNotes] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            startDate,
            endDate,
            sprints, 
            committedLoad,
            uncommittedLoad,
            completed,
            notes
        };
        const url = "http://127.0.0.1:5000/add_sprint";
        const options = {
            method: "POST",
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
                    <h1>Sprint Creation Form</h1>
                </div>
            </div>

            <div className="input">
                <div className="date">
                    <StartDate startDate={startDate} setStartDate={setStartDate}/> 
                    <EndDate endDate={endDate} setEndDate={setEndDate}/>
                </div>

                <SprintInput sprints={sprints} setSprints={setSprints}/>
                
                <CommittedInput committedLoad={committedLoad} setCommittedLoad={setCommittedLoad} />
                
                <Uncommitted uncommittedLoad={uncommittedLoad} setUncommittedLoad={setUncommittedLoad}/>
                
                <Completed completed={completed} setCompleted={setCompleted}/>
               
                <Notes notes={notes} setNotes={setNotes}/>
                
                <div className="bottom">
                    <ButtonImp/>
                </div>
            </div>
        </form>
    );
};

export default SprintCreation;