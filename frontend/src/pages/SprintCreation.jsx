import './SprintCreation.css';
import StartDate from '../components/sprint_creation_components/StartDate.jsx';
import EndDate from '../components/sprint_creation_components/EndDate.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import CommittedInput from '../components/sprint_creation_components/CommittedInput.jsx';
import Uncommitted from '../components/sprint_creation_components/Uncommitted.jsx';
import Completed from '../components/sprint_creation_components/Completed.jsx';
import Notes from '../components/sprint_creation_components/Notes.jsx';
import ButtonImp from '../components/sprint_creation_components/ButtonImp.jsx';
import { useState } from "react";
import { useParams } from "react-router-dom";

const SprintCreation = () => { 
    const { projectId } = useParams();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [committedLoad, setCommittedLoad] = useState();
    const [uncommittedLoad, setUncommittedLoad] = useState();
    const [completed, setCompleted] = useState();
    const [notes, setNotes] = useState("");
    const [capacity, setCapacity] = useState();
    const [velocity, setVelocity] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            startDate,
            endDate,
            committedLoad: parseInt(committedLoad) || 0,
            uncommittedLoad: parseInt(uncommittedLoad) || 0,
            completed: parseInt(completed) || 0,
            projectID: projectId,
            notes,
            capacity: parseInt(capacity) || 0,
            velocity: parseInt(velocity) || 0,
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
                    <h1 className="Sprinttitle">Sprint Creation Form</h1>
                </div>
            </div>

            <div className="input">
                <div className="date">
                    <div>
                        <label htmlFor="startDate" className="startTitle"></label>
                        <StartDate startDate={startDate} setStartDate={setStartDate} /> 
                    </div>
                    <div>
                        <label htmlFor="endDate" className="endTitle"></label>
                        <EndDate endDate={endDate} setEndDate={setEndDate} />
                    </div>
                </div>
       
                    <div>
                        <label htmlFor="committedLoad" className="commitTitle"></label>
                        <CommittedInput committedLoad={committedLoad} setCommittedLoad={setCommittedLoad} />
                    </div>

                    <div>
                        <label htmlFor="uncommittedLoad" className="uncommitTitle"></label>
                        <Uncommitted uncommittedLoad={uncommittedLoad} setUncommittedLoad={setUncommittedLoad} />
                    </div>
                
                
           
                <div>
                    <label htmlFor="completed" className="compTitle"></label>
                    <Completed completed={completed} setCompleted={setCompleted} />
                </div>
                
                <div>
                    <div className='title'>
                    <div className="commitTitle">
                        <p>Capacity</p>
                    </div>
                    <input
                        placeholder='Input capacity'
                        type="number"
                        id="capacity"
                        value={capacity}
                        onChange={(e) => setCapacity(parseInt(e.target.value, 10) || 0)}
                    />
                </div>
                </div>

                <div>
                    <div className='title'>
                    <div className="commitTitle">
                        <p>Velocity</p>
                    </div>
                    <input
                        placeholder='Input velocity'
                        type="number"
                        id="velocity"
                        value={velocity}
                        onChange={(e) => setVelocity(parseInt(e.target.value, 10) || 0)}
                    />
                    </div>
                </div>

                <Notes notes={notes} setNotes={setNotes} />
                <ButtonImp />
                <div className="bottom">

                </div>
            </div>
        </form>
    );
};

export default SprintCreation;