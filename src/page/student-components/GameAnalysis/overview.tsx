import React from 'react';
import './overview.css';

const recentMatches = [
  {
    result: "Win",
    opponent: "Sarah Wilson",
    date: "2024-01-15",
    moves: 42,
    accuracy: 87,
    ratingChange: +15,
    newRating: 1180,
  },
  {
    result: "Loss",
    opponent: "Mike Chen",
    date: "2024-01-14",
    moves: 38,
    accuracy: 82,
    ratingChange: -12,
    newRating: 1165,
  },
  {
    result: "Draw",
    opponent: "Emma Davis",
    date: "2024-01-13",
    moves: 56,
    accuracy: 91,
    ratingChange: +2,
    newRating: 1177,
  },
];

export const Overview = () => {
  return (
    <div className="overview-container">
      <div className="rating-cards">
        <div className="card">
          <h2>1180</h2>
          <p>Current Rating</p>
        </div>
        <div className="card">
          <h2 style={{ color: "#A855F7" }}>1195</h2>
          <p>Peak Rating</p>
        </div>
        <div className="card">
          <h2 style={{ color: "#22C55E" }}>40%</h2>
          <p>Win Rate</p>
        </div>
        <div className="card">
          <h2 style={{ color: "#F97316" }}>85%</h2>
          <p>Avg Accuracy</p>
        </div>
      </div>

      <div className="recent-performance">
        <h3>Recent Performance</h3>
        <div className="performance-list">
          {recentMatches.map((match, idx) => (
            <div className="performance-card" key={idx}>
              <div className={`badge ${match.result.toLowerCase()}`}>{match.result}</div>
              <div className="match-info">
                <p>
                  vs {match.opponent} <br />
                  <span className="subtext">
                    {match.date} • {match.moves} moves • {match.accuracy}% accuracy
                  </span>
                </p>
              </div>
              <div className="rating-info">
                <p className={`change ${match.ratingChange > 0 ? 'gain' : match.ratingChange < 0 ? 'loss' : 'draw'}`}>
                  {match.ratingChange > 0 ? `+${match.ratingChange}` : match.ratingChange}
                </p>
                <p className="new-rating">{match.newRating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Overview;