// components/QuickStats.tsx
import React from 'react';
import './QuickStats.css';

const QuickStats = () => {
  return (
    <div className="stats">
      <h3>Quick Stats</h3>
      <ul>
        <li>Games Played: 24</li>
        <li>Win Rate: 63%</li>
        <li>Average Accuracy: 85%</li>
        <li>Favorite Opening: Italian Game</li>
      </ul>
    </div>
  );
};

export default QuickStats;
