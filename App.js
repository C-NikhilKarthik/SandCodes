// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TopPerformers from './components/TopPerformers';
import LeaderboardTable from './components/LeaderboardTable';
import './App.css';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const topPerformers = [
    {
      name: 'Emily Johnson',
      title: 'Senior Sales Specialist',
      deals: 36,
      rank: 1,
    },
    {
      name: 'Michael Anderson',
      title: 'Sales Team Leader',
      deals: 28,
      rank: 2,
    },
    {
      name: 'Alexandra Williams',
      title: 'Top Account Manager',
      deals: 27,
      rank: 3,
    },
  ];

  const players = [
    {
      rank: 1,
      name: 'Emily Johnson',
      calmarRatio: 3.96,
      overallProfit: 381845,
      avgDailyProfit: 319.54,
      winPercentage: 0.65,
      price: null,
    },
    {
      rank: 2,
      name: 'John Smith',
      calmarRatio: 3.62,
      overallProfit: 268872.5,
      avgDailyProfit: 216.31,
      winPercentage: 0.64,
      price: 500,
    },
    {
      rank: 3,
      name: 'Robert Brown',
      calmarRatio: 3.42,
      overallProfit: 255425,
      avgDailyProfit: 208.51,
      winPercentage: 0.64,
      price: null,
    },
    {
      rank: 4,
      name: 'Jessica Miller',
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentage: 0.65,
      price: null,
    },
    {
      rank: 5,
      name: 'Christopher Brown',
      calmarRatio: 3.22,
      overallProfit: 370845,
      avgDailyProfit: 303.47,
      winPercentage: 0.65,
      price: null,
    },
    {
      rank: 6,
      name: 'Olivia Martinez',
      calmarRatio: 3.01,
      overallProfit: 135980,
      avgDailyProfit: 185.77,
      winPercentage: 0.49,
      price: null,
    },
  ];

  return (
    <div className="app">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${isSidebarCollapsed ? 'expanded' : ''}`}>
        <Navbar />
        <Header />
        <TopPerformers performers={topPerformers} />
        <LeaderboardTable players={players} />
      </div>
    </div>
  );
};

export default App;
