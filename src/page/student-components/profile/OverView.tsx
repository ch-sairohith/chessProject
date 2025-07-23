import React from 'react';
import './Overview.css';

type OverViewProps = {
  stats: {
    gamesPlayed: number;
    gamesThisMonth: number;
    wins: number;
    losses: number;
    draws: number;
    peakRating: number;
    bestRank: number;
    bestAccuracy: number;
    averageAccuracy: number;
  };
};

export const OverView = ({ stats }: OverViewProps) => {
  const overviewItems = [
    { label: 'Games Played', value: stats.gamesPlayed },
    { label: 'This Month', value: stats.gamesThisMonth },
    { label: 'Wins', value: stats.wins },
    { label: 'Losses', value: stats.losses },
    { label: 'Draws', value: stats.draws },
    { label: 'Peak Rating', value: stats.peakRating },
    { label: 'Best Rank', value: stats.bestRank },
    { label: 'Best Accuracy', value: `${stats.bestAccuracy}%` },
    { label: 'Avg Accuracy', value: `${stats.averageAccuracy}%` },
  ];

  return (
    <div className="overview-container">
      {overviewItems.map((item) => (
        <div className="overview-card" key={item.label}>
          <div className="overview-label">{item.label}</div>
          <div className="overview-value">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default OverView;
