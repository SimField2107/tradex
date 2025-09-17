import React from 'react';
import TotalBalanceCard from './TotalBalanceCard'; // We'll keep this one for now
import CryptoChart from './CryptoChart';
import CoinListTable from './CoinListTable';
import SummaryCard from './SummaryCard';

const Dashboard = () => {
  // Mock data for the graphs
  const totalCoinData = [40, 35, 45, 30, 50, 42, 55];
  const activeUserData = [10, 15, 8, 20, 12, 18, 25];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      
      <div className="dashboard-content">
        {/* The row for the three summary cards */}
        <div className="top-cards-row">
            <SummaryCard title="Total Users" value="2,742" icon="👥" />
            <SummaryCard title="Active Users Today" value="2,742" icon="📈" />
            <SummaryCard title="Total Coin" value="8,679" icon="🪙" />
        </div>

        {/* The two main charts */}
        <div className="charts-container">
          <CryptoChart title="$40,295.32" data={totalCoinData} labels={labels} />
          <CryptoChart title="Active User Today" data={activeUserData} labels={labels} />
        </div>
        
        {/* The coin list table */}
        <CoinListTable />
      </div>
    </div>
  );
};

export default Dashboard;