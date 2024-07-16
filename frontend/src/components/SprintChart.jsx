import React from 'react';
import { Bar } from 'react-chartjs-2';

const SprintChart = ({ data }) => {
    return (
        <div className="chart">
            <Bar
                data={{
                    labels: data.labels,
                    datasets: data.datasets.map((dataset) => ({
                        ...dataset,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                    })),
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                }}
            />
        </div>
    );
};

export default SprintChart;
