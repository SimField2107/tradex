import React from 'react';

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <h1 className="header-title">Dashboard</h1>
      <div className="user-profile-actions">
        {/* Placeholder for notification bell icon */}
        <span className="icon-button">🔔</span>
        {/* Placeholder for user avatar with initials */}
        <div className="user-avatar">K</div>
      </div>
    </header>
  );
};

export default DashboardHeader;