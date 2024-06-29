// src/components/LeaderboardTable.js
import React from 'react';
import './LeaderboardTable.css';

const LeaderboardTable = ({ players }) => {
  return (
    <div className="leaderboard-table">
      <h2>Basic Backtest</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Calmar Ratio</th>
            <th>Overall Profit</th>
            <th>Avg. Daily Profit</th>
            <th>Win % (Day)</th>
            <th>Price (Rs)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.calmarRatio}</td>
              <td>{player.overallProfit}</td>
              <td>{player.avgDailyProfit}</td>
              <td>{player.winPercentage}</td>
              <td>{player.price !== null ? player.price : '-'}</td>
              <td>{player.price !== null ? <button>Buy</button> : <button>View</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
