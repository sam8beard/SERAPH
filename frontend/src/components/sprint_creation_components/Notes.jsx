import './Notes.css';

function Notes() {
    return (
        <div className='title'>
        <div className="notesTitle">
            <p>Notes</p>
        </div>
        <div className="notes">
        <input className="notesInput" placeholder='Input notes'></input>
        </div>
    </div>


    )
}

export default Notes;