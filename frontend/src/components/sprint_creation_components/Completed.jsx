import './Completed.css';
import PropTypes from 'prop-types';

function Completed(props) {
    const completedValue = props.completed !== undefined ? props.completed : '';

    return (
        <div className="title">
            <div className="compTitle">
                <p>Completed Tasks</p>
            </div>
            <div className="completed">
                <input
                    type="number"
                    className="completedInput"
                    placeholder='Input completed tasks'
                    value={completedValue}
                    onChange={(e) => props.setCompleted(parseInt(e.target.value, 10) || 0)}
                />
            </div>
        </div>
    );
}

Completed.propTypes = {
    completed: PropTypes.number,
    setCompleted: PropTypes.func.isRequired,
};

export default Completed;
