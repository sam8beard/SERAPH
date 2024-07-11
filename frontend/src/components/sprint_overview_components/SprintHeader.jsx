import React from 'react';
import './SprintHeader.css';

const SprintHeader = ({sprint, project}) => {
    return (
        <>
            <h1 className="header-1-SO">
                <div className="text-style-header-1-SO">{project.projectName}</div>
                <div className="text-style-header-1-SO">{sprint.startDate} - {sprint.endDate}</div>
                <div className="header-2-SO text-style-header-2-SO">
                    <div className="header-2-content-SO">Committed Load: {sprint.committedLoad}</div>
                    <div className="header-2-content-SO">Uncommitted Load: {sprint.uncommittedLoad}</div>
                    <div className="header-2-content-SO">Total Completed: {sprint.completed}</div>
                </div>
                <div className="text-style-header-1-SO">Notes: {sprint.notes}</div>
            </h1>
        </>
    )
}

export default SprintHeader;