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

const SprintUpdate = () =>  { 
    return (
        <div className="parent">
            <div className="top">
                <div className="title" style={{ color: 'black', fontSize: '1em', marginTop: '50px'}}>
                    <h1 className="updateTitle">Sprint Update Form</h1>
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
                <div>
                <label htmlFor="capacity">capacity</label>
                <input
                    type="number"
                    id="capacity"

                    />
                </div>

                <div>
                <label htmlFor="velocity">velocity</label>
                <input
                    type="number"
                    id="velocity"
                />
                </div>
               
               <Notes/>
                
               
            </div>

            <div className="bottom">

            <div className="buttons">
        <button type="submit" className="submitBtn" style={{marginTop: '50px', marginRight: '700px', fontSize: '1.25em'}}>Update</button>
        </div>
                
            </div>

        </div>
    )
}
export default SprintUpdate