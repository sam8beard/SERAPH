import React from 'react';
import './SprintInfo.css';
import Graph from "../../assets/SampleGraph.png";
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from "react-chartjs-2" 
const SprintInfo = ({sprint}) => {
    return (
        <>
            <div className="flex-container-parent-SO">
                <Bar
                    data ={{
                        labels: ["Sprint Info"],
                        datasets: [
                            {
                                label: "Velocity", 
                                data: [sprint.velocity],
                            }, 

                            {
                                label: "Capacity",
                                data: [sprint.capacity],
                            },

                            {
                                label: "Commited Load", 
                                data: [sprint.committedLoad],
                            }, 

                            {
                                label: "Uncommited Load", 
                                data: [sprint.uncommittedLoad],
                            },

                            { 
                                label: "Completed",
                                data: [sprint.completed],
                            },
                        ]
                    }}
                />
                {/* <div className="flex-container-child-left-SO">
                    <div className="text-style-normal-SO">{sprint.notes}</div>
                </div>
                <div className="flex-container-child-right-SO">
                    <img src={Graph} />
                </div> */}
            </div>
        </>
    )
}


export default SprintInfo;