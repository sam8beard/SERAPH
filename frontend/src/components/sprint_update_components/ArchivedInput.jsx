import PropTypes from 'prop-types';

function ArchivedInput(props) {
    return (
        <div className="title">
            <div className="archivedTitle">
                <p>Archived</p>
            </div>
            <div className="archived">
                <div className="archivedInput">
                    <input
                        type="checkbox"
                        className="archived"
                        checked={props.archived}
                        onChange={(e) => props.setArchived(e.target.checked)}
                    />
                </div>
            </div>
        </div>
    );
}

ArchivedInput.propTypes = {
    archived: PropTypes.bool.isRequired,
    setArchived: PropTypes.func.isRequired,
};

export default ArchivedInput;
