import React from 'react';
import './App.css'; // Make sure the stylesheet is imported
import Sidebar from './components/dashboard/Sidebar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;