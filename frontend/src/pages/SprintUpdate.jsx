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
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SprintUpdate = () => {
    const { projectId, startDate: paramStartDate } = useParams(); 
    const [currentSprint, setCurrentSprint] = useState({});
    const [formStartDate, setFormStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [committedLoad, setCommittedLoad] = useState(0);
    const [uncommittedLoad, setUncommittedLoad] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [notes, setNotes] = useState("");
    const [capacity, setCapacity] = useState("");
    const [velocity, setVelocity] = useState("");

    useEffect(() => {
        async function fetchSprintDetails() {
            const response = await fetch(`http://127.0.0.1:5000/get_sprint/${projectId}/${paramStartDate}`);
            const data = await response.json();
            setCurrentSprint(data.sprint);
            setFormStartDate(data.sprint.startDate || "");
            setEndDate(data.sprint.endDate || "");
            setCommittedLoad(parseInt(data.sprint.committedLoad) || 0);
            setUncommittedLoad(parseInt(data.sprint.uncommittedLoad) || 0);
            setCompleted(parseInt(data.sprint.completed) || 0);
            setNotes(data.sprint.notes || "");
            setCapacity(data.sprint.capacity || "");
            setVelocity(data.sprint.velocity || "");
        }
        fetchSprintDetails();
    }, [projectId, paramStartDate]);

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            startDate: formStartDate,
            endDate,
            committedLoad,
            uncommittedLoad,
            completed,
            projectID: projectId,
            notes,
            capacity: parseInt(capacity) || 0,
            velocity: parseInt(velocity) || 0,
        };
        const url = `http://127.0.0.1:5000/update_sprint/${projectId}/${paramStartDate}`;
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, options);
        if (response.status !== 200) {
            const errorData = await response.json();
            alert(errorData.message);
        }
    };
    

    return (
        <form onSubmit={onSubmit}>
            <div className="parent">
                <div className="top">
                    <div className="title" style={{ color: 'black', fontSize: '1em', marginTop: '50px'}}>
                        <h1 className="updateTitle">Sprint Update Form</h1>
                    </div>
                </div>

                <div className="input">
                    <div className="date">
                        <StartDate startDate={formStartDate} setStartDate={setFormStartDate}/> 
                        <EndDate endDate={endDate} setEndDate={setEndDate} />
                    </div>
                    
                    <CommittedInput committedLoad={committedLoad} setCommittedLoad={setCommittedLoad} />
                    
                    <Uncommitted uncommittedLoad={uncommittedLoad} setUncommittedLoad={setUncommittedLoad}/>
                    
                    <Completed completed={completed} setCompleted={setCompleted}/>
                    
                    <div>
                        <label htmlFor="capacity">Capacity</label>
                        <input
                            type="number"
                            id="capacity"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="velocity">Velocity</label>
                        <input
                            type="number"
                            id="velocity"
                            value={velocity}
                            onChange={(e) => setVelocity(e.target.value)}
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
    );
}

export default SprintUpdate;
