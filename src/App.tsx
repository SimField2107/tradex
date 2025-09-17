// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/dashboard/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import WalletPage from './components/dashboard/WalletPage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-container">
          <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          {isMenuOpen && <div className="mobile-menu-overlay" onClick={toggleMenu}></div>}
          <main className="main-content">
            <Routes>
              {/* All routes are now public */}
              <Route path="/" element={<Dashboard toggleMenu={toggleMenu} />} />
              <Route path="/wallet" element={<WalletPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;