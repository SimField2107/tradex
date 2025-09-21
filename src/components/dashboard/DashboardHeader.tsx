import React from 'react';
import { useUiStore } from '../../store/uiStore'; 
const DashboardHeader: React.FC = () => {
  const { toggleMenu } = useUiStore();

  return (
    <header className="dashboard-header">
      <h1 className="header-title">Dashboard</h1>
      <div className="user-profile-actions">
        <span className="icon-button">🔔</span>
        <div className="user-avatar">K</div>
        {/* The onClick now uses the function from our global store */}
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;