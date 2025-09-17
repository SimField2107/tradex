// src/components/dashboard/Sidebar.tsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Top section: Logo and user initial */}
      <div className="sidebar-header">
        <div className="logo-container">
          {/* Placeholder for the logo/icon */}
          <div className="logo-icon">AI</div>
          <span className="logo-text">AI Tradex</span>
        </div>
        <div className="user-initial">K</div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search here" />
        {/* Placeholder for a search icon */}
        <span className="search-icon">🔍</span>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-nav">
        <ul>
          {/* Active Navigation Item */}
          <li className="nav-item active">
            {/* Placeholder for a dashboard icon */}
            <span className="nav-icon">🏠</span>
            <span>Dashboard</span>
          </li>
          {/* Other Navigation Items */}
          <li className="nav-item">
            <span className="nav-icon">🖼️</span>
            <span>Logo and Banner</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">📝</span>
            <span>Content</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">👥</span>
            <span>Users</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">📜</span>
            <span>Reward Logs</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">💰</span>
            <span>Coin Adjustments</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">🔧</span>
            <span>Maintenance</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">👑</span>
            <span>Admin</span>
          </li>
          <li className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span>Setting</span>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="sidebar-footer">
        <button className="logout-btn">
          {/* Placeholder for a logout icon */}
          <span className="logout-icon">⬅️</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;