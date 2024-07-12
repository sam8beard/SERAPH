import React from 'react';
import './SprintNotes.css';

const SprintNotes = ({ sprint }) => {
    return (
        <div className="notes-container">
            <div className="notes-label">Notes:</div>
            <div className="notes-text">{sprint.notes}</div>
        </div>
    );
}

export default SprintNotes;