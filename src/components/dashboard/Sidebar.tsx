import React from 'react';

interface SidebarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`sidebar ${isMenuOpen ? 'mobile-open' : ''}`}>
      {/*
        The close button (the 'X') is removed from here.
        Closing will be handled by clicking the hamburger again or the new overlay.
      */}

      {/* Top section: Logo and user initial */}
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">AI</div>
          <span className="logo-text">AI Tradex</span>
        </div>
        {/*
          Removing the user initial from the sidebar header on mobile when
          it's meant to slide out. The mobile menu won't need this.
          It's already in the DashboardHeader for desktop.
        */}
        {/* <div className="user-initial">K</div> */}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search here" />
        <span className="search-icon">🔍</span>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item active" onClick={toggleMenu}> {/* Added onClick to close menu on nav */}
            <span className="nav-icon">🏠</span>
            <span>Dashboard</span>
          </li>
          <li className="nav-item" onClick={toggleMenu}>
            <span className="nav-icon">🖼️</span>
            <span>Logo and Banner</span>
          </li>
          <li className="nav-item" onClick={toggleMenu}>
            <span className="nav-icon">📝</span>
            <span>Content</span>
          </li>
          <li className="nav-item" onClick={toggleMenu}>
            <span className="nav-icon">👥</span>
            <span>Users</span>
          </li>
          <li className="nav-item" onClick={toggleMenu}>
            <span className="nav-icon">📜</span>
            <span>Reward Logs</span>
          </li>
          <li className="nav-item" onClick={toggleMenu}>
            <span className="nav-icon">💰</span>
            <span>Coin Adjustments</span>
          </li>
          <li className="nav-item" onClick={toggleMenu}>
            <span className="nav-icon">🔧</span>
            <span>Maintenance</span>
          </li>
          <li className="nav-item" onClick={toggleMenu}>
            <span className="nav-icon">👑</span>
            <span>Admin</span>
          </li>
          <li className="nav-item" onClick={toggleMenu}>
            <span className="nav-icon">⚙️</span>
            <span>Setting</span>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={toggleMenu}> {/* Added onClick to close menu on logout */}
          <span className="logout-icon">⬅️</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;