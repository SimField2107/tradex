import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface WalletHeaderProps {
  totalBalance: number;
  balanceChange: number;
}

const WalletHeader: React.FC<WalletHeaderProps> = ({ totalBalance, balanceChange }) => {
  // Simple mock data for the wallet chart
  const data = [10500, 10700, 10550, 10800, 10900, 10750, 11000];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const chartData = {
    labels,
    datasets: [{
      data,
      borderColor: 'rgba(108, 99, 255, 1)',
      backgroundColor: 'rgba(108, 99, 255, 0.2)',
      tension: 0.4,
      fill: true,
      pointRadius: 0
    }]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { tooltip: { enabled: false }, legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } }
  };

  const isPositive = balanceChange > 0;
  
  return (
    <div className="wallet-header-card">
      <div className="wallet-header-content">
        <h2 className="wallet-title">My Wallet</h2>
        <div className="total-balance">
          <span>${totalBalance.toLocaleString()}</span>
          <span className={`balance-change ${isPositive ? 'positive' : 'negative'}`}>
            ${balanceChange.toFixed(2)} ({((balanceChange / (totalBalance - balanceChange)) * 100).toFixed(2)}%)
          </span>
        </div>
      </div>
      <div className="wallet-chart-container">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default WalletHeader;