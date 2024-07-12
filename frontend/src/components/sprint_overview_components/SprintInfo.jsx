import React from 'react';
import './SprintInfo.css';
import { Bar } from 'react-chartjs-2';

const SprintInfo = ({ sprint }) => {
    return (
        <div className="chart-container">
            <Bar
                data={{
                    labels: ["Sprint Info"],
                    datasets: [
                        { label: "Velocity", data: [sprint.velocity] },
                        { label: "Capacity", data: [sprint.capacity] },
                        { label: "Committed Load", data: [sprint.committedLoad] },
                        { label: "Uncommitted Load", data: [sprint.uncommittedLoad] },
                        { label: "Completed", data: [sprint.completed] },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
};

export default SprintInfo;
