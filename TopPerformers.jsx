// src/components/TopPerformers.js
import React from 'react';
import './TopPerformers.css';

const TopPerformers = ({ performers }) => {
  return (
    <div className="top-performers">
      {performers.map((performer, index) => (
        <div className="performer-card" key={index}>
          <div className="performer-photo">
            <img src="https://via.placeholder.com/100" alt={performer.name} />
          </div>
          <div className="performer-details">
            <h3>{performer.name}</h3>
            <p>{performer.title}</p>
            <p><strong>{performer.deals}</strong> Closed Deals</p>
            <p>{performer.rank}<sup>{['st', 'nd', 'rd'][performer.rank - 1] || 'th'}</sup> Rank</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopPerformers;
