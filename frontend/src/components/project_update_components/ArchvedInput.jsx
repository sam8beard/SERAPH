import PropTypes from 'prop-types';

function ArchivedInput(props) {
    return (
        <div>
            <div>
                Set Project to be Archived
            </div>

            <div>
                <input type="checkbox"
                checked={props.archived}
                onChange={(e) => props.setArchived(e.target.checked)}></input>
            </div>
        </div>
    )
}

ArchivedInput.propTypes = {
    archived: PropTypes.bool,
    setArchived: PropTypes.func,
};

export default ArchivedInput;