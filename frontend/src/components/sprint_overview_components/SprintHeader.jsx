import React from 'react';
import './SprintHeader.css';

const SprintHeader = ({sprints}) => {
    const now = 60;

    return (
        <>
            <h1 className="header-1-SO text-style-header-SO">
                {sprints.map((sprint) => (
                    <div>{sprint.startDate} - {sprint.endDate}</div>
                ))}
            </h1>
        </>
    )
}

export default SprintHeader;