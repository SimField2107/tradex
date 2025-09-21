import React from 'react';
import type { ReactNode } from 'react';
import Sidebar from './dashboard/Sidebar';
import { useUiStore } from '../store/uiStore'; // 1. Import the new store

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // 2. Get the state and the toggle function from the global store
  const { isMenuOpen, toggleMenu } = useUiStore();

  return (
    <>
      {/* The Sidebar now gets its state from the global store */}
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      {/* The overlay also uses the global state and toggle function */}
      {isMenuOpen && <div className="mobile-menu-overlay" onClick={toggleMenu}></div>}
      
      <main className="main-content">
        {children}
      </main>
    </>
  );
};

export default Layout;