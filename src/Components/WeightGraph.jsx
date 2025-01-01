import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Filler);

const WeightGraph = () => {
  // Hypothetical data for 5 days
  const weightData = [
    { date: '2024-12-01', weight: 70.9 },
    { date: '2024-12-02', weight: 70.45 },
    { date: '2024-12-03', weight: 70.5 },
    { date: '2024-12-04', weight: 70.73 },
    { date: '2024-12-05', weight: 70.7 },
    { date: '2024-12-06', weight: 70.1 },
    { date: '2024-12-07', weight: 70.3 },
    { date: '2024-12-08', weight: 70.36 },
    { date: '2024-12-09', weight: 70.65 },
    { date: '2024-12-10', weight: 70.51 },
    { date: '2024-12-11', weight: 70.71 },
    { date: '2024-12-12', weight: 70.32 },
    { date: '2024-12-13', weight: 70.47 },
    { date: '2024-12-14', weight: 70.37 },
    { date: '2024-12-15', weight: 70.17 },
    { date: '2024-12-16', weight: 70.79 },
    { date: '2024-12-17', weight: 70.54 },
    { date: '2024-12-18', weight: 70.01 },
    { date: '2024-12-19', weight: 70.03 },
    { date: '2024-12-20', weight: 70.02 },
    { date: '2024-12-21', weight: 70.37 },
    { date: '2024-12-22', weight: 70.17 },
    { date: '2024-12-23', weight: 70.59 },
    { date: '2024-12-24', weight: 70.41 },
    { date: '2024-12-25', weight: 70.23 },
    { date: '2024-12-26', weight: 70.65 },
    { date: '2024-12-27', weight: 70.75 },
    { date: '2024-12-28', weight: 70.29 },
    { date: '2024-12-29', weight: 70.16 },
    { date: '2024-12-30', weight: 70.55 },
  ];
  

  // Extracting dates and weights for the graph
  const dates = weightData.map(data => data.date);
  const weights = weightData.map(data => data.weight);

  // Data format for Chart.js with gradient and styling
  const data = {
    labels: dates,
    datasets: [
      {
        label: '',
        data: weights,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: (context) => {
          const chart = context.chart;
          const {ctx, chartArea} = chart;

          if (!chartArea) return null;
          
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(75, 192, 192, 0.4)');
          gradient.addColorStop(1, 'rgba(75, 192, 192, 0.05)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverRadius: 8,
        pointHoverBackgroundColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 3,
        shadowColor: 'rgba(75, 192, 192, 0.4)',
        shadowBlur: 10
      }
    ]
  };

  // Enhanced options with grid lines removed
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'My Weight Journey',
        font: {
          size: 18,
          weight: 'bold'
        },
        color: '#333'
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleColor: 'white',
        bodyColor: 'lightblue'
      },
      legend: {
        labels: {
          font: {
            size: 14
          },
          color: '#666'
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          color: '#666',
          font: {
            size: 12
          }
        },
        grid: {
          display: false  // Remove x-axis grid lines
        }
      },
      y: {
        title: {
          display: true,
          text: 'Weight (kg)',
          color: '#666',
          font: {
            size: 12
          }
        },
        min: 69.8,
        max: 71.2,
        grid: {
          display: false  // Remove y-axis grid lines
        },
        ticks: {
          stepSize: 0.2
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    }
  };

  return (
    <div className="h-full w-full">
      <Line 
        data={data} 
        options={{
          ...options,
          maintainAspectRatio: false,
          responsive: true
        }} 
      />
    </div>
  );
};

export default WeightGraph;