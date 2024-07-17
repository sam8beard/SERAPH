import './SprintInput.css'
import PropTypes from 'prop-types'

function SprintInput(props) {
    return (
        <div className="title">
            <div className="sprintTitle">
                <p>Number of Sprints</p>
            </div>
        
            <div className="sprints">
                <div className="sprintInput">
                    <input className="sprint" placeholder='Input number of sprints'
                        value={props.sprints}
                        onChange={(e) => props.setSprints(e.target.value)}></input>
                </div>
            </div>
        </div>
    )
}

SprintInput.propTypes = {
    sprints: PropTypes.number,
    setSprints: PropTypes.func,
};


export default SprintInput;