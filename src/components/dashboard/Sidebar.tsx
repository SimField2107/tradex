import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface SidebarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen, toggleMenu }) => {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toggleMenu();
  };

  return (
    <div className={`sidebar ${isMenuOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo-icon">AI</div>
          <span className="logo-text">AI Tradex</span>
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search here" />
        <span className="search-icon">🔍</span>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li className={`nav-item ${router.pathname === '/' ? 'active' : ''}`} onClick={toggleMenu}>
            <Link href="/">
              <span className="nav-icon">🏠</span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`nav-item ${router.pathname === '/wallet' ? 'active' : ''}`} onClick={toggleMenu}>
            <Link href="/wallet">
              <span className="nav-icon">💰</span>
              <span>My Wallet</span>
            </Link>
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

      <div className="sidebar-footer">
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            <span className="logout-icon">⬅️</span>
            <span>Logout</span>
          </button>
        ) : (
          <div className="auth-links">
            <Link href="/login" className="login-btn">
              <span>Login</span>
            </Link>
            <Link href="/register" className="register-btn">
              <span>Register</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;