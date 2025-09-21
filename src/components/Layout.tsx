import React from 'react';
import type { ReactNode } from 'react';
import Sidebar from './dashboard/Sidebar';
import Header from './Header'; 
import { useUiStore } from '../store/uiStore';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isMenuOpen, toggleMenu } = useUiStore();

  return (
    <>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="main-content">
        <Header />
        <div>{children}</div> 
      </main>

      {isMenuOpen && <div className="mobile-menu-overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Layout;