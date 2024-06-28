import './CommittedInput.css';
import PropTypes from 'prop-types'



function CommittedInput(props) {
    return(
        <div className='title'>
                    <div className="commitTitle">
                        <p>Committed Load</p>
                    </div>

                    <div className="committed">
                    <input className="committedInput" placeholder='Input committed load'
                     value={props.committedLoad}
                     onChange={(e) => props.setCommittedLoad(e.target.value)}></input>
                    </div>
                </div>

    )

}
CommittedInput.propTypes = {
    committedLoad: PropTypes.number,
    setCommittedLoad: PropTypes.func,
};

export default CommittedInput;