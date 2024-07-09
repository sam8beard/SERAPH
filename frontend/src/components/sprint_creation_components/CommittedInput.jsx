import './CommittedInput.css';
import PropTypes from 'prop-types'



function CommittedInput(props) {
    return(
        <div className='title'>
                    <div className="commitTitle">
                        <p>Committed Load</p>
                    </div>

                    <div className="committed">
                    <input type="number" className="committedInput" placeholder='Input committed load'
                     value={props.committedLoad}
                     onChange={(e) => props.setCommittedLoad(parseInt(e.target.value, 10) || 0)}></input>
                    </div>
                </div>

    )

}
CommittedInput.propTypes = {
    committedLoad: PropTypes.number,
    setCommittedLoad: PropTypes.func,
};

export default CommittedInput;