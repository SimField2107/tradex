import React from 'react';
import Layout from '../components/Layout';

const TransactionsPage = () => {
  return (
    <Layout>
      <div className="dashboard-header">
        <h1 className="header-title">Transaction History</h1>
      </div>
      <div className="p-4 bg-gray-800 rounded-lg">
        <p>Transaction history will be displayed here.</p>
      </div>
    </Layout>
  );
};

export default TransactionsPage;