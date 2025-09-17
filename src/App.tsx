// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/dashboard/Sidebar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Conditionally render the sidebar */}
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="mobile-menu-overlay" onClick={toggleMenu}></div>}

      <main className="main-content">
        <Dashboard toggleMenu={toggleMenu} />
      </main>
    </div>
  );
}

export default App;