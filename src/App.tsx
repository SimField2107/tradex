import React from 'react';
import './App.css'; // Make sure this is imported
import Sidebar from './components/dashboard/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        {/* We will place a search bar and other top-level UI here later */}
        {/* <Dashboard /> */}
      </main>
    </div>
  );
}

export default App;