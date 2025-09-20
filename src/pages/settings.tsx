import React from 'react';
import Layout from '../components/Layout';

const SettingsPage = () => {
  return (
    <Layout>
      <div className="dashboard-header">
        <h1 className="header-title">Settings</h1>
      </div>
      <div className="p-4 bg-gray-800 rounded-lg">
        <p>User profile and security settings will be displayed here.</p>
      </div>
    </Layout>
  );
};

export default SettingsPage;