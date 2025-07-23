import React from 'react';
import { Medal, TrendingUp, TrendingDown } from 'lucide-react';
import "./ClassLeaderboard.css";

const sampleData = [
  { id: 1, name: 'Emma Davis', rating: 1285, games: 32, winRate: 69, change: 25 },
  { id: 2, name: 'Alex Johnson', rating: 1250, games: 28, winRate: 64, change: 12 },
  { id: 3, name: 'John Doe', rating: 1180, games: 24, winRate: 63, change: 8 },
  { id: 4, name: 'Sarah Wilson', rating: 1165, games: 26, winRate: 54, change: -5 },
  { id: 5, name: 'Mike Chen', rating: 1142, games: 22, winRate: 55, change: 3 },
  { id: 6, name: 'Lisa Brown', rating: 1128, games: 23, winRate: 52, change: -2 },
  { id: 7, name: 'David Kim', rating: 1075, games: 20, winRate: 50, change: 6 },
  { id: 8, name: 'Nina Patel', rating: 1050, games: 21, winRate: 48, change: -1 },
  { id: 9, name: 'Carlos Rivera', rating: 990, games: 18, winRate: 45, change: 0 },
  { id: 10, name: 'Fatima Zahra', rating: 970, games: 19, winRate: 44, change: 4 },
];

interface LeaderboardProps {
  userId: number;
}

const Leaderboard = ({ userId }: LeaderboardProps) => {
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
