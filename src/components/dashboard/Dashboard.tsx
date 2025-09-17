import React from 'react';
import DashboardHeader from './DashboardHeader';
import SummaryCard from './SummaryCard';
import CryptoChart from './CryptoChart';
import CoinListTable from './CoinListTable';

interface DashboardProps {
  toggleMenu: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ toggleMenu }) => {
  // Mock data for the line charts
  const totalCoinData = [40, 45, 42, 50, 55, 52, 60]; 
  const activeUserData = [25, 23, 20, 18, 15, 12, 10]; 
  const lineLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Mock data for the progressive chart
  const generateProgressiveData = (initialValue: number, count: number) => {
    let prev = initialValue;
    const data = [];
    for (let i = 0; i < count; i++) {
      prev += 5 - Math.random() * 10;
      data.push({ x: i, y: prev });
    }
    return data;
  };
  
  const progressiveChartData = {
    datasets: [{
      borderColor: 'rgba(108, 99, 255, 1)', 
      backgroundColor: 'rgba(108, 99, 255, 0.4)',
      data: generateProgressiveData(100, 150),
      radius: 0
    },
    {
      borderColor: 'rgba(255, 99, 132, 1)', 
      backgroundColor: 'rgba(255, 99, 132, 0.4)',
      data: generateProgressiveData(80, 150),
      radius: 0
    }]
  };

  return (
    <div className="dashboard-container">
      <DashboardHeader toggleMenu={toggleMenu} />
      
      <div className="dashboard-content">
        <div className="top-cards-row">
          <SummaryCard title="Total Users" value="2,742" icon="👥" />
          <SummaryCard title="Active Users Today" value="2,742" icon="📈" />
          <SummaryCard title="Total Coin" value="8,679" icon="🪙" />
        </div>

        <div className="charts-container">
          <CryptoChart title="$40,295.32" type="line" data={totalCoinData} labels={lineLabels} />
          
          <CryptoChart title="Active User Today" type="progressive" data={progressiveChartData} />
        </div>
        
        <CoinListTable />
      </div>
    </div>
  );
};

export default Dashboard;