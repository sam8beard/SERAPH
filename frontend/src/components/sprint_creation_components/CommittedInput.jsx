import './CommittedInput.css';
import PropTypes from 'prop-types';

function CommittedInput(props) {
    const committedLoadValue = props.committedLoad !== undefined ? props.committedLoad : '';

    return (
        <div className='title'>
            <div className="commitTitle">
                <p>Committed Load</p>
            </div>

            <div className="committed">
                <input
                    type="number"
                    className="committedInput"
                    placeholder="Enter committed load"
                    value={committedLoadValue}
                    onChange={(e) => props.setCommittedLoad(parseInt(e.target.value, 10))}
                />
            </div>
        </div>
    );
}

CommittedInput.propTypes = {
    committedLoad: PropTypes.number,
    setCommittedLoad: PropTypes.func.isRequired,
};

export default CommittedInput;
