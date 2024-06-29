// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Leaderboard for</h1>
            <select>
                <option>July</option>
                <option>August</option>
                <option>September</option>
            </select>
        </div>
    );
};

export default Header;
