import React from 'react';
import { useUiStore } from '../store/uiStore';
import { Bell } from 'lucide-react';

const Header: React.FC = () => {
  const { pageTitle, toggleMenu } = useUiStore();

  return (
    <header className="dashboard-header">
      <h1 className="header-title">{pageTitle}</h1>
      <div className="user-profile-actions">
      
        <Bell className="icon-button h-6 w-6 text-gray-400 hover:text-white" />
        <div className="user-avatar">K</div>

        {/* This is the mobile menu button that will now appear on every page */}
        <div className="mobile-menu-button md:hidden" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;