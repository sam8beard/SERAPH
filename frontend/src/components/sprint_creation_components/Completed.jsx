import './Completed.css';
import PropTypes from 'prop-types'


function Completed(props) {
    return( 
        <div className="title">
        <div className="compTitle">
            <p>Completed Tasks</p>
        </div>
        <div className="completed">
        <input type ="number"className="completedInput" placeholder='Input completed tasks'
          value={props.completed}
          onChange={(e) => props.setCompleted(parseInt(e.target.value,10) || 0)}></input>
        </div>
    </div>




    )


}
Completed.propTypes = {
    completed: PropTypes.number,
    setCompleted: PropTypes.func,
};



export default Completed;