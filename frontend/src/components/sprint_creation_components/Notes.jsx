import './Notes.css';
import PropTypes from 'prop-types'


function Notes(props) {
    return (
        <div className='title'>
        <div className="notesTitle">
            <p>Notes</p>
        </div>
        <div className="notes">
        <input type="text" className="notesInput" placeholder='Input notes'
        value={props.notes}
        onChange={(e) => props.setNotes(e.target.value)}></input>
        </div>
    </div>


    )
}
Notes.propTypes = {
    notes: PropTypes.string,
    setNotes: PropTypes.func,
};

export default Notes;