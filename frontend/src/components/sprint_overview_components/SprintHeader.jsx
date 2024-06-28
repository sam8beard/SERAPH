import React from 'react';
import './SprintHeader.css';

const SprintHeader = ({sprint}) => {
    return (
        <>
            <h1 className="header-1-SO text-style-header-SO">
                <div>Project Name Here</div>
                <div>{sprint.startDate} - {sprint.endDate}</div>
                <div>
                    <div>Committed Load: {sprint.commitedLoad}</div>
                    <div>Uncommitted Load: {sprint.uncommittedLoad}</div>
                    <div>Total Completed: {sprint.completed}</div>
                </div>
            </h1>
        </>
    )
}

export default SprintHeader;