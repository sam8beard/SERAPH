import './Uncommitted.css';
import PropTypes from 'prop-types'


function Uncommitted(props) {
    return(
        <div className="title">
        <div className="uncommitTitle">
            <p>Uncommitted Load</p>
        </div>
        <div className="uncommitted">
        <input className="uncommittedInput" placeholder='Input uncommitted load'
        value={props.uncommittedLoad}
        onChange={(e) => props.setUncommittedLoad(e.target.value)}></input>
        </div>
    </div>


    )
}
Uncommitted.propTypes = {
    uncommittedLoad: PropTypes.number,
    setUncommittedLoad: PropTypes.func,
};

export default Uncommitted;