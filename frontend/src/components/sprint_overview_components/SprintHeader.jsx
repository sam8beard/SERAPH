import React from 'react';
import './SprintHeader.css';

const SprintHeader = ({ sprint, project }) => {
    return (
        <div className="header-container">
            <div className="project-name">{project.projectName}</div>
            <div className="header-section">
                <div className="date-range">{`${sprint.startDate} - ${sprint.endDate}`}</div>
            </div>
            <div className="header-section">
                <div className="info-label">Velocity:</div>
                <div className="info-value">{sprint.velocity}</div>
            </div>
            <div className="header-section">
                <div className="info-label">Capacity:</div>
                <div className="info-value">{sprint.capacity}</div>
            </div>
            <div className="header-section">
                <div className="info-label">Committed Load:</div>
                <div className="info-value">{sprint.committedLoad}</div>
            </div>
            <div className="header-section">
                <div className="info-label">Uncommitted Load:</div>
                <div className="info-value">{sprint.uncommittedLoad}</div>
            </div>
            <div className="header-section">
                <div className="info-label">Total Completed:</div>
                <div className="info-value">{sprint.completed}</div>
            </div>
            <div className="notes-section">
                <div className="notes-label">Notes:</div>
                <div className="notes-text">{sprint.notes}</div>
            </div>
        </div>
    );
}

export default SprintHeader;
