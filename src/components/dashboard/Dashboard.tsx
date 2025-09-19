import React from 'react';
import DashboardHeader from './DashboardHeader';
import SummaryCard from './SummaryCard';
import CryptoChart from './CryptoChart';
import CoinListTable from './CoinListTable';

interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
}

interface DashboardProps {
  toggleMenu?: () => void;
  totalMarketCap: number | null;
  chartData: number[];
  coins: Coin[];
}

const Dashboard: React.FC<DashboardProps> = ({ toggleMenu, totalMarketCap, chartData, coins }) => {
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

  // Format market cap value
  const formatMarketCap = (value: number | null) => {
    if (!value) return 'Loading...';
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toLocaleString()}`;
  };

  // Check if we have valid data
  const hasValidData = totalMarketCap !== null && chartData.length > 0 && coins.length > 0;

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu || (() => {})} />
      
      <div className="dashboard-content">
        <div className="top-cards-row">
          <SummaryCard title="Total Users" value="2,742" icon="👥" />
          <SummaryCard title="Active Users Today" value="2,742" icon="📈" />
          <SummaryCard 
            title="Total Market Cap" 
            value={formatMarketCap(totalMarketCap)} 
            icon="💰" 
          />
        </div>

        <div className="charts-container">
          <CryptoChart 
            title={hasValidData ? formatMarketCap(totalMarketCap) : 'Loading Market Data...'} 
            type="line" 
            data={chartData} 
            labels={chartData.map((_, index) => `Day ${index + 1}`)} 
          />
          
          <CryptoChart 
            title="Active User Today" 
            type="progressive" 
            data={progressiveChartData} 
          />
        </div>
        
        <CoinListTable coins={coins} />
        
        {!hasValidData && (
          <div className="text-center py-8 text-gray-500">
            <p>Loading cryptocurrency data...</p>
            <p className="text-sm mt-2">This may take a moment</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;