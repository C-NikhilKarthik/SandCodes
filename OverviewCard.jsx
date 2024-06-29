// src/components/OverviewCard.js
import React from 'react';
import './OverviewCard.css';

const OverviewCard = ({ overview }) => {
  return (
    <div className="overview-card">
      <img src={overview.image} alt={overview.name} />
      <h3>{overview.name}</h3>
      <p>{overview.position}</p>
      <div className="overview-details">
        <div>
          <span>Total Deals</span>
          <span>{overview.totalDeals}</span>
        </div>
        <div>
          <span>Average Value</span>
          <span>{overview.averageValue}</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
