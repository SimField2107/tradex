import React from 'react';

interface DashboardHeaderProps {
  toggleMenu: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ toggleMenu }) => {
  return (
    <header className="dashboard-header">
      <h1 className="header-title">Dashboard</h1>
      <div className="user-profile-actions">
        <span className="icon-button">🔔</span>
        <div className="user-avatar">K</div>
        {/* Mobile menu button */}
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