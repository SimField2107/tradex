import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/useAuth';
import useSWR from 'swr';
import { Combobox } from '@headlessui/react';
import { LayoutDashboard, Wallet, ArrowRightLeft, Settings, LogOut, AreaChart, DatabaseZap, Check, ChevronsUpDown } from 'lucide-react';
import type { SearchCoin } from '../../pages/api/search-coins';

const fetcher = (url: string) => fetch(url).then(res => res.json());

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
  const { data: allCoins } = useSWR<SearchCoin[]>('/api/search-coins', fetcher);
  const [query, setQuery] = useState('');

  const filteredCoins =
    query === ''
      ? []
      : allCoins?.filter((coin) =>
          coin.name.toLowerCase().includes(query.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5) ?? [];

  const handleLinkClick = () => { if (isMenuOpen) toggleMenu(); };
  const handleLogout = () => { logout(); handleLinkClick(); };

  return (
    <div className={`sidebar ${isMenuOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-header">
        <Link href="/" className="cursor-pointer">
          <div className="logo-container"><div className="logo-icon">AI</div><span className="logo-text">AI Tradex</span></div>
        </Link>
      </div>

      <Combobox onChange={(coin: SearchCoin | null) => {
        if (coin) router.push(`/coins/${coin.id}`);
      }}>
        <div className="relative">
          <div className="search-combobox-container">
            <Combobox.Input
              className="search-input"
              placeholder="Search..."
              onChange={(event) => setQuery(event.target.value)}
              autoComplete="off"
            />
            <Combobox.Button className="search-button">
              <ChevronsUpDown size={20} className="text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Combobox.Options className="search-options-container">
            {filteredCoins.length === 0 && query !== '' ? (
              <div className="cursor-default select-none px-4 py-2 text-gray-400">Nothing found.</div>
            ) : (
              filteredCoins.map((coin) => (
                <Combobox.Option
                  key={coin.id}
                  className={({ active }) => `search-option ${active ? 'search-option--active' : ''}`}
                  value={coin}
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${ selected ? 'font-medium' : 'font-normal'}`}>
                        {coin.name} ({coin.symbol.toUpperCase()})
                      </span>
                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-400"><Check size={20} aria-hidden="true" /></span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox>

      <nav className="sidebar-nav mt-4">
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
            <Link href="/login" className="login-btn" onClick={handleLinkClick}><span>Login</span></Link>
            <Link href="/register" className="register-btn" onClick={handleLinkClick}><span>Register</span></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;