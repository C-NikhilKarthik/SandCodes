// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="https://via.placeholder.com/50" alt="Logo" className="logo" />
        <div className="nav-item">LeaderBoard</div>
        <div className="nav-item">Historical Trading</div>
        <div className="nav-item">Historical Chart</div>
        <div className="nav-item">Scanners</div>
        <div className="nav-item">Alerts</div>
        <div className="nav-item">Basic Backtest</div>
        <div className="nav-item">Advanced Backtest</div>
        <div className="nav-item">Pricing</div>
        <div className="nav-item">My Earnings</div>
      </div>
      <div className="navbar-right">
        <button className="bell-icon">
          <img src="https://via.placeholder.com/20" alt="Notifications" />
        </button>
        <button className="coin-icon">
          <img src="https://via.placeholder.com/20" alt="Coins" />
          <span>0</span>
        </button>
        <button className="profile-icon">
          <img src="https://via.placeholder.com/20" alt="Profile" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
