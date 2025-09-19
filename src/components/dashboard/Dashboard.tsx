import React from 'react';
import DashboardHeader from './DashboardHeader';
import SummaryCard from './SummaryCard';
import CryptoChart from './CryptoChart';
import CoinListTable from './CoinListTable';

interface DashboardProps {
  toggleMenu?: () => void;
  totalMarketCap: number | null;
  chartData: number[];
}

const Dashboard: React.FC<DashboardProps> = ({ toggleMenu, totalMarketCap, chartData }) => {
  // Mock data for the progressive chart (as there's no direct API for it)
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
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      
      <div className="dashboard-content">
        <div className="top-cards-row">
          <SummaryCard title="Total Users" value="2,742" icon="👥" />
          <SummaryCard title="Active Users Today" value="2,742" icon="📈" />
          <SummaryCard 
            title="Total Market Cap" 
            value={totalMarketCap ? `$${totalMarketCap.toLocaleString()}` : 'Loading...'} 
            icon="💰" 
          />
        </div>

        <div className="charts-container">
          <CryptoChart 
            title={totalMarketCap ? `$${totalMarketCap.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : 'Loading...'} 
            type="line" 
            data={chartData} 
            labels={chartData.map(() => '')}
          />
          
          <CryptoChart 
            title="Active User Today" 
            type="progressive" 
            data={progressiveChartData} 
          />
        </div>
        
        <CoinListTable />
      </div>
    </>
  );
};

export default Dashboard;