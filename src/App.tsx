import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/dashboard/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import WalletPage from './components/dashboard/WalletPage'; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {isMenuOpen && <div className="mobile-menu-overlay" onClick={toggleMenu}></div>}

        <main className="main-content">
          <Routes>
            {/* Main Dashboard Route */}
            <Route path="/" element={<Dashboard toggleMenu={toggleMenu} />} />
            
            {/* Wallet Page Route */}
            <Route path="/wallet" element={<WalletPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;