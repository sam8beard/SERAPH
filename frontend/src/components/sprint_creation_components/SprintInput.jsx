import './SprintInput.css'

function SprintInput() {
    return (

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
    )


}


export default SprintInput;