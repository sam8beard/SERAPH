import React from 'react';
import './SprintHeader.css';

const SprintHeader = ({sprint}) => {
    return (
        <>
            <h1 className="header-1-SO">
                <div className="text-style-header-1-SO">Project Name Here</div>
                <div className="text-style-header-1-SO">{sprint.startdate} - {sprint.enddate}</div>
                <div className="header-2-SO text-style-header-2-SO">
                    <div className="header-2-content-SO">Committed Load: {sprint.committedload}</div>
                    <div className="header-2-content-SO">Uncommitted Load: {sprint.uncommittedload}</div>
                    <div className="header-2-content-SO">Total Completed: {sprint.completed}</div>
                </div>
            </h1>
        </>
    )
}

export default SprintHeader;