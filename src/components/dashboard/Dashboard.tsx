// src/components/dashboard/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import DashboardHeader from './DashboardHeader';
import SummaryCard from './SummaryCard';
import CryptoChart from './CryptoChart';
import CoinListTable from './CoinListTable';
import { fetchMarketChart } from '../../services/cryptoService';
import { fetchGlobalData } from '../../services/globalService';

interface DashboardProps {
  toggleMenu: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ toggleMenu }) => {
  const [chartData, setChartData] = useState<number[]>([]);
  const [totalMarketCap, setTotalMarketCap] = useState<number | null>(null);
  const [isLoadingChart, setIsLoadingChart] = useState(true);
  const [isLoadingSummary, setIsLoadingSummary] = useState(true);

  // Fetch Bitcoin chart data for the main graph
  useEffect(() => {
    const getChartData = async () => {
      try {
        const data = await fetchMarketChart('bitcoin', 7); // 7 days of Bitcoin data
        const prices = data.map((item: [number, number]) => item[1]); // Extracting prices
        setChartData(prices);
        setIsLoadingChart(false);
      } catch (err) {
        console.error('Failed to fetch chart data:', err);
        setIsLoadingChart(false);
      }
    };

    getChartData();
  }, []);

  // Fetch global market cap for the main total balance card
  useEffect(() => {
    const getGlobalData = async () => {
      try {
        const data = await fetchGlobalData();
        setTotalMarketCap(data.data.total_market_cap.usd);
        setIsLoadingSummary(false);
      } catch (err) {
        console.error('Failed to fetch global data:', err);
        setIsLoadingSummary(false);
      }
    };
    getGlobalData();
  }, []);

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
    <div className="dashboard-container">
      <DashboardHeader toggleMenu={toggleMenu} />
      
      <div className="dashboard-content">
        <div className="top-cards-row">
          {isLoadingSummary ? (
            <SummaryCard title="Total Users" value="Loading..." />
          ) : (
            <SummaryCard title="Total Users" value="2,742" icon="👥" /> // This data remains mock
          )}
          {isLoadingSummary ? (
            <SummaryCard title="Active Users Today" value="Loading..." />
          ) : (
            <SummaryCard title="Active Users Today" value="2,742" icon="📈" /> // This data remains mock
          )}
          {isLoadingSummary ? (
            <SummaryCard title="Total Market Cap" value="Loading..." />
          ) : (
            <SummaryCard title="Total Market Cap" value={`$${totalMarketCap?.toLocaleString()}`} icon="💰" />
          )}
        </div>

        <div className="charts-container">
          {isLoadingChart ? (
            <div className="chart-card">Loading Chart...</div>
          ) : (
            <CryptoChart 
              title={totalMarketCap ? `$${totalMarketCap.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : 'Loading...'} 
              type="line" 
              data={chartData} 
              labels={chartData.map(() => '')}
            />
          )}
          
          <CryptoChart 
            title="Active User Today" 
            type="progressive" 
            data={progressiveChartData} 
          />
        </div>
        
        <CoinListTable />
      </div>
    </div>
  );
};

export default Dashboard;