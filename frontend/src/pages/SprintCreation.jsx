import './SprintCreation.css'
function SprintCreation() { 
    return (
        <div className="parent">
            <div className="top">
                <div className="title">
                    <h1>Sprint Creation Form</h1>
                </div>
            </div>

            <div className="input">
                <div className="date">
                <div className='title'>
                    <div className="startTitle">
                        <p>Start Date</p>
                    </div>
                    <div className="startDateInput">
                        <input type="text" className="startDate" placeholder='input start date'></input>
                        
                    </div>
                </div>
                    <div className='title'>
                        <div className="endTitle">
                            <p>End Date</p>
                        </div>
                        <div className="endDateInput">
                        <input type="text" className="endDate" placeholder='input end date'></input>
                        </div>
                    </div>
                   
                    
                </div>
                <div className="title">
                    <div className="sprintTitle">
                        <p>Number of Sprints</p>
                    </div>

                    <div className="sprints">
                    <div className="sprintInput">
                        <input className="sprint" placeholder='Input number of sprints'></input>
                    </div>

                    </div>

                </div>
                
                <div className='title'>
                    <div className="commitTitle">
                        <p>Committed Load</p>
                    </div>

                    <div className="committed">
                    <input className="committedInput" placeholder='Input committed load'></input>
                    </div>
                </div>
               
                <div className="title">
                    <div className="uncommitTitle">
                        <p>Uncommitted Load</p>
                    </div>
                    <div className="uncommitted">
                    <input className="uncommittedInput" placeholder='Input uncommitted load'></input>
                    </div>
                </div>
                
                <div className="title">
                    <div className="compTitle">
                        <p>Completed Tasks</p>
                    </div>
                    <div className="completed">
                    <input className="completedInput" placeholder='Input completed tasks'></input>
                    </div>
                </div>
               
                <div className='title'>
                    <div className="notesTitle">
                        <p>Notes</p>
                    </div>
                    <div className="notes">
                    <input className="notesInput" placeholder='Input notes'></input>
                    </div>
                </div>
               
            </div>

            <div className="bottom">
                <div className="buttons">
                    <button type="submit" className="submitBtn">Submit</button>
                </div>

            </div>

        </div>
    )
}
export default SprintCreation