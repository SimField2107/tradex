import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';
import { LayoutDashboard, Wallet, ArrowRightLeft, Settings, Search, LogOut, AreaChart, DatabaseZap } from 'lucide-react';

interface SidebarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const navLinks = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/market', label: 'Market', icon: AreaChart },
  { href: '/portfolio', label: 'Portfolio', icon: Wallet },
  { href: '/transactions', label: 'Transactions', icon: ArrowRightLeft },
  { href: '/staking', label: 'Staking', icon: DatabaseZap },
  { href: '/settings', label: 'Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen, toggleMenu }) => {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
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
        <Search className="search-icon" size={18} />
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            const Icon = link.icon;

            return (
              <li key={link.href} onClick={handleLinkClick}>
                <Link href={link.href} className={`nav-item ${isActive ? 'active' : ''}`}>
                    <Icon className="nav-icon" size={20} />
                    <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut className="logout-icon" size={18} />
            <span>Logout</span>
          </button>
        ) : (
          <div className="auth-links">
            <Link href="/login" className="login-btn" onClick={handleLinkClick}>
              <span>Login</span>
            </Link>
            <Link href="/register" className="register-btn" onClick={handleLinkClick}>
              <span>Register</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;