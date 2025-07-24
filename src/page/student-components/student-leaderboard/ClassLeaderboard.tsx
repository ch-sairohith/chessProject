import React from 'react';
import { Medal, TrendingUp, TrendingDown } from 'lucide-react';
import "./ClassLeaderboard.css";

interface LeaderboardProps {
  userId: number;
  sampleData: {
    id: number; 
    name: string;
    rating: number; 
    games: number;
    winRate: number;
    change: number;
  }[];
}

const Leaderboard = ({ userId,sampleData }: LeaderboardProps) => {
  const data = sampleData.map(player => ({
    ...player,
    isCurrentUser: player.id === userId,
  }));

  const champions = [...data]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="ClassLeaderboard-container">
      <div className="champions-card">
        <h3>Class Champions</h3>
        <div className="champions-content">
          <div className="secondRanker">
            <div className="secondRanker-icon">
              <Medal size={24} color="#9ca3af" />
            </div>
            <div className="secondRanker-name">{champions[1]?.name}</div>
            <div className="secondRanker-rating">{champions[1]?.rating}</div>
          </div>
          <div className="firstRanker">
            <div className="firstRanker-icon">
              <Medal size={28} color="#f59e0b" />
            </div>
            <div className="firstRanker-name">{champions[0]?.name}</div>
            <div className="firstRanker-rating">{champions[0]?.rating}</div>
          </div>
          <div className="thirdRanker">
            <div className="thirdRanker-icon">
              <Medal size={24} color="#d97706" />
            </div>
            <div className="thirdRanker-name">{champions[2]?.name}</div>
            <div className="thirdRanker-rating">{champions[2]?.rating}</div>
          </div>
        </div>
      </div>

      <div className="ClassLeaderboard">
        <h3>Complete Rankings - Class 10A</h3>
        <div>
          {data.map((entry, index) => (
            <div
              key={entry.id}
              className={`leaderboard-entry ${entry.isCurrentUser ? 'highlight-user' : ''}`}
            >
              <div className="rank">#{index + 1}</div>
              <div className="player-info">
                <div>{entry.name} {entry.isCurrentUser && <span>(You)</span>}</div>
                <div>{entry.games} games • {entry.winRate}% win rate</div>
              </div>
              <div className="rating-section">
                <div className="rating">{entry.rating}</div>
                <div className="rating-change">
                  {entry.change >= 0 ? (
                    <span style={{ color: 'green' }}>
                      <TrendingUp size={12} /> +{entry.change}
                    </span>
                  ) : (
                    <span style={{ color: 'red' }}>
                      <TrendingDown size={12} /> {entry.change}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
