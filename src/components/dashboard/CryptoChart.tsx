import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface CryptoChartProps {
  title: string;
  data: number[];
  labels: string[];
}

const CryptoChart: React.FC<CryptoChartProps> = ({ title, data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        fill: true,
        data,
        borderColor: 'rgb(108, 99, 255)',
        backgroundColor: 'rgba(108, 99, 255, 0.4)',
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },
  };

  return (
    <div className="chart-card">
      <div className="chart-title">{title}</div>
      <div className="chart-wrapper">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CryptoChart;