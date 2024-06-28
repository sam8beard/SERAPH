import React from 'react';
import './SprintInfo.css';
import Graph from "../../assets/SampleGraph.png";

const SprintInfo = ({sprint}) => {
    return (
        <>
            <div className="flex-container-parent-SO">
                <div className="flex-container-child-left-SO">
                    <div className="text-style-normal-SO">{sprint.notes}</div>
                </div>
                <div className="flex-container-child-right-SO">
                    <img src={Graph} />
                </div>
            </div>
        </>
    )
}

export default SprintInfo;