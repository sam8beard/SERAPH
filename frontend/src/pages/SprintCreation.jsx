import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import StartDate from '../components/sprint_creation_components/StartDate.jsx';
import EndDate from '../components/sprint_creation_components/EndDate.jsx';
import CommittedInput from '../components/sprint_creation_components/CommittedInput.jsx';
import Uncommitted from '../components/sprint_creation_components/Uncommitted.jsx';
import Completed from '../components/sprint_creation_components/Completed.jsx';
import Notes from '../components/sprint_creation_components/Notes.jsx';
import ButtonImp from '../components/sprint_creation_components/ButtonImp.jsx';

const SprintCreation = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [committedLoad, setCommittedLoad] = useState(0);
    const [uncommittedLoad, setUncommittedLoad] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [notes, setNotes] = useState("");
    const [projectID, setProjectID] = useState("");

    const styles = {
        parent: {
            display: 'flex',
            justifyContent: 'flex-start',
            height: '100vh',
            width: '100vw',
            flexDirection: 'column',
            paddingLeft: '100px', // Adjusted to move everything over from the left
            paddingRight: '100px',
        },
        input: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: '10vh',
            fontSize: '2rem',
            justifyContent: 'space-evenly',
        },
        date: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-start', // Adjusted to move dates closer together
            marginBottom: '20px', // Added space below the date section
        },
        bottom: {
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-start',
            padding: '20px',
            marginTop: '20px', // Added space above the submit button
            marginBottom: '70px',
        },
        top: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px', // Added space below the title
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            fontSize: '10px',
            justifyContent: 'flex-end',
            padding: '20px',
        },
        submitBtn: {
            border: '2px solid black',
            borderRadius: '10px',
            backgroundColor: 'white',
            padding: '10px',
            cursor: 'pointer',
            marginRight: '20px', // Added space below the date section
        },
        submitBtnHover: {
            backgroundColor: 'azure',
        },
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {
            startDate,
            endDate,
            committedLoad: parseInt(committedLoad),
            uncommittedLoad: parseInt(uncommittedLoad),
            completed: parseInt(completed),
            projectID,
            notes,
        };
        const url = 'http://127.0.0.1:5000/add_sprint';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(url, options);
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.json();
            alert(data.message);
        }
    };

    return (
        <form style={styles.parent} onSubmit={onSubmit}>
            <div style={styles.top}>
                <div style={styles.title}>
                    <h1>Sprint Creation Form</h1>
                </div>
            </div>

            <div style={styles.input}>
                <div style={styles.date}>
                    <StartDate startDate={startDate} setStartDate={setStartDate} />
                    <EndDate endDate={endDate} setEndDate={setEndDate} />
                </div>

                <CommittedInput committedLoad={committedLoad} setCommittedLoad={setCommittedLoad} />

                <Uncommitted uncommittedLoad={uncommittedLoad} setUncommittedLoad={setUncommittedLoad} />

                <Completed completed={completed} setCompleted={setCompleted} />

                <div>
                    <label htmlFor="projectid">Project ID</label>
                    <input
                        type="text"
                        id="projectID"
                        value={projectID}
                        onChange={(e) => setProjectID(e.target.value)}
                        style={{ ...styles.input, width: '100%' }} // Adjusted input width
                    />
                </div>

                <Notes notes={notes} setNotes={setNotes} />

                <ButtonImp />
            </div>
        </form>
    );
};

export default SprintCreation;
