import React from 'react';
import TotalBalanceCard from './TotalBalanceCard';
import CryptoChart from './CryptoChart';
import CoinListTable from './CoinListTable';

const Dashboard = () => {
  // Mock data for the graphs
  const totalCoinData = [40, 35, 45, 30, 50, 42, 55];
  const activeUserData = [10, 15, 8, 20, 12, 18, 25];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="dashboard-container">
      {/* We will build the header with the user profile later */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      
      <div className="dashboard-content">
        {/*
          The screenshot shows the total balance and two other small cards
          at the top, with the two large charts below them. We'll adjust the
          layout to match that.
        */}
        <div className="top-cards-row">
            {/* The small cards for "Total Users" and "Active Users Today" go here.
               For now, we'll just add a placeholder.
            */}
            <div className="placeholder-card">
              <h3>Total Users</h3>
              <p>2,742</p>
            </div>
            <div className="placeholder-card">
              <h3>Active Users Today</h3>
              <p>2,742</p>
            </div>
            <div className="placeholder-card">
              <h3>Total Coin</h3>
              <p>8,679</p>
            </div>
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