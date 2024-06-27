import React from 'react';
import './SprintHeader.css';

const SprintHeader = ({sprint}) => {
    const now = 60;

    return (
        <>
            <h1 className="header-1-SO text-style-header-SO">
                FIX THE PROJECT NAME {sprint.startDate} - {sprint.endDate}
            </h1>

            <div className="progress-bar-container-SO">
                <div className="progress-bar-text-SO">{now}%</div>
                <ProgressBar striped variant="info" className="progress-bar-SO" now={now} />
            </div>
        </>
    )
}

export default SprintHeader;