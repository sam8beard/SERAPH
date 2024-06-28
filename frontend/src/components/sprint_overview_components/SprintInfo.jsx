import React from 'react';
import './SprintInfo.css';
import Graph from "../../assets/SampleGraph.png";

const SprintInfo = ({sprint}) => {
    return (
        <>
            <div className="flex-contaner-parent-SO">
                <div className="flex-container-child-left-SO">
                    {sprint.map((sprint) => (
                        <div className="text-style-normal-SO">
                            <div>{sprint.notes}</div>
                        </div>
                    ))}
                </div>
                <div className="flex-container-child-right-SO">
                    <img src={Graph} />
                </div>
            </div>
        </>
    )
}

export default SprintInfo;