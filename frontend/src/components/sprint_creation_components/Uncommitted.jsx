import './Uncommitted.css';
import PropTypes from 'prop-types';

function Uncommitted(props) {
    const uncommittedLoadValue = props.uncommittedLoad !== undefined ? props.uncommittedLoad : '';

    return (
        <div className="title">
            <div className="uncommitTitle">
                <p>Uncommitted Load</p>
            </div>
            <div className="uncommitted">
                <input
                    type="number"
                    className="uncommittedInput"
                    placeholder='Input uncommitted load'
                    value={uncommittedLoadValue}
                    onChange={(e) => props.setUncommittedLoad(parseInt(e.target.value, 10) || 0)}
                />
            </div>
        </div>
    );
}

Uncommitted.propTypes = {
    uncommittedLoad: PropTypes.number,
    setUncommittedLoad: PropTypes.func.isRequired,
};

export default Uncommitted;
