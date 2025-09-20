import React, { useState, ReactNode } from 'react';
import Sidebar from './dashboard/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      {/* This overlay is for closing the mobile menu when clicking outside */}
      {isMenuOpen && <div className="mobile-menu-overlay" onClick={toggleMenu}></div>}
      
      <main className="main-content">
        {children}
      </main>
    </>
  );
};

export default Layout;