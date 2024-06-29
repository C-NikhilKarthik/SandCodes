// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>⋮</button>
      <div className="logo-section">
        <img src="https://via.placeholder.com/50" alt="Logo" />
        <span>Ver 2.3.4</span>
      </div>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Leaderboard</li>
          <li>Sales</li>
          <li>Reports</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
