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
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const SprintUpdate = () =>  { 
    const { projectId } = useParams();
    const [currentSprint, setCurrentSprint] = useState({});
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [committedLoad, setCommittedLoad] = useState();
    const [uncommittedLoad, setUncommittedLoad] = useState();
    const [completed, setCompleted] = useState();
    const [notes, setNotes] = useState("");
    const [capacity, setCapacity] = useState();
    const [velocity, setVelocity] = useState();

    useEffect(() => {
        async function fetchSprintDetails() {
            const response = await fetch(`http://127.0.0.1:5000/get_sprint/${projectId}/${startDate}`);
            const data = await response.json();
            setCurrentSprint(data.sprint);
            setStartDate(data.sprint.startDate);
            setEndDate(data.sprint.endDate);    
            setCommittedLoad(data.sprint.committedLoad);
            setUncommittedLoad(data.sprint.uncommittedLoad);
            setCompleted(data.sprint.completed);
            setNotes(data.sprint.notes);
            setCapacity(data.sprint.capacity);
            setVelocity(data.sprint.velocity);

    }
    fetchSprintDetails();
}, [projectId, startDate]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            startDate,
            endDate,
            committedLoad: parseInt(committedLoad) || 0,
            uncommittedLoad: parseInt(uncommittedLoad) || 0 ,
            completed: parseInt(completed) || 0,
            projectID: projectId,
            notes,
            capacity: parseInt(capacity) || 0,
            velocity: parseInt(velocity) || 0,
        };
        const url = `http://127.0.0.1:5000/update_sprint/${projectId}`;
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
        <form onsubmit = {onSubmit}>
        <div className="parent">
            <div className="top">
                <div className="title" style={{ color: 'black', fontSize: '1em', marginTop: '50px'}}>
                    <h1 className="updateTitle">Sprint Update Form</h1>
                </div>
            </div>

            <div className="input">
                <div className="date">
                    <StartDate startDate={startDate} setStartDate={setStartDate}/> 
                    <EndDate endDate={endDate} setEndDate={setEndDate} />
                </div>
                
                <CommittedInput committedLoad={committedLoad} setCommittedLoad={setCommittedLoad} />
                
                <Uncommitted uncommittedLoad={uncommittedLoad} setUncommittedLoad={setUncommittedLoad}/>
                
                <Completed completed={completed} setCompleted={setCompleted}/>
                <div>
                <label htmlFor="capacity">capacity</label>
                <input
                    type="number"
                    id="capacity"
                    value={capacity}
                    onChange={(e) => setCapacity(parseInt(e.target.value, 10) || 0)}
                    />
                </div>

                <div>
                <label htmlFor="velocity">velocity</label>
                <input
                    type="number"
                    id="velocity"
                    value={velocity}
                    onChange={(e) => setVelocity(parseInt(e.target.value, 10) || 0)}
                />
                </div>
               
               <Notes notes={notes} setNotes={setNotes}/>
                
               
            </div>

            <div className="bottom">

            <div className="buttons">
        <button type="submit" className="submitBtn" style={{marginTop: '50px', marginRight: '700px', fontSize: '1.25em'}}>Update</button>
        </div>
                
            </div>

        </div>
        </form>
    )
}
export default SprintUpdate