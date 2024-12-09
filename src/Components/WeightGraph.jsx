// src/Components/WeightGraph.jsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

const WeightGraph = () => {
  // Hypothetical data for 5 days
  const weightData = [
    { date: '2024-12-01', weight: 70.0 },
    { date: '2024-12-02', weight: 70.12 },
    { date: '2024-12-03', weight: 70.24 },
    { date: '2024-12-04', weight: 70.36 },
    { date: '2024-12-05', weight: 70.48 }
  ];

  // Extracting dates and weights for the graph
  const dates = weightData.map(data => data.date);
  const weights = weightData.map(data => data.weight);

  // Data format for Chart.js
  const data = {
    labels: dates,  // X-axis: Date
    datasets: [
      {
        label: 'Weight (kg)',  // Label for the graph
        data: weights,  // Y-axis: Weight values
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',  // Line color
        tension: 0.1
      }
    ]
  };

  // Options to customize the graph
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Weight Tracking Over 5 Days'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Weight (kg)'
        },
        min: 70,  // Start of Y-axis (optional)
        max: 71  // End of Y-axis (optional)
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-[60%] rounded-2xl  ">
      <Line data={data} options={options} />
    </div>
  );
};

export default WeightGraph;
