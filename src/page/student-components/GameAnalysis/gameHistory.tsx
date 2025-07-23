import React from 'react';
import { Eye } from 'lucide-react';
import './gameHistory.css';

interface Game {
    id: number;
    opponent: string;
    result: 'win' | 'loss' | 'draw';
    date: string;
    time: string;
    moves: number;
    accuracy: string;
    ratingChange: number;
    newRating: number;
}

export const GameHistory = () => {
  const games: Game[] = [
    {
      id: 1,
      opponent: 'Sarah Wilson',
      result: 'win',
      date: '1/15/2024',
      time: '10+5',
      moves: 42,
      accuracy: '87%',
      ratingChange: +15,
      newRating: 1180,
    },
    {
      id: 2,
      opponent: 'Mike Chen',
      result: 'loss',
      date: '1/14/2024',
      time: '10+5',
      moves: 38,
      accuracy: '82%',
      ratingChange: -12,
      newRating: 1165,
    },
    {
      id: 3,
      opponent: 'Emma Davis',
      result: 'draw',
      date: '1/13/2024',
      time: '15+10',
      moves: 56,
      accuracy: '91%',
      ratingChange: +2,
      newRating: 1177,
    },
    {
      id: 4,
      opponent: 'Alex Johnson',
      result: 'win',
      date: '1/12/2024',
      time: '10+5',
      moves: 34,
      accuracy: '89%',
      ratingChange: +18,
      newRating: 1175,
    },
    {
      id: 5,
      opponent: 'Lisa Brown',
      result: 'loss',
      date: '1/11/2024',
      time: '10+5',
      moves: 45,
      accuracy: '78%',
      ratingChange: -14,
      newRating: 1157,
    },
  ];

const getResultDotColor = (result: Game['result']): string => {
    switch (result) {
        case 'win': return 'green';
        case 'loss': return 'red';
        case 'draw': return 'goldenrod';
        default: return 'gray';
    }
};

  return (
    <div className="game-history-container">
      <h2>Complete Game History</h2>
      <div className="games-list">
        {games.map(game => (
          <div className="game-card" key={game.id}>
            <div className="game-left">
              <div
                className="result-dot"
                style={{ backgroundColor: getResultDotColor(game.result) }}
              />
              <div className="opponent-info">
                <p><strong>vs {game.opponent}</strong></p>
                <p className="subtext">
                  📅 {game.date} &nbsp; | &nbsp; {game.time} &nbsp; | &nbsp; {game.moves} moves &nbsp; | &nbsp; {game.accuracy} accuracy
                </p>
              </div>
            </div>
            <div className="game-right">
              <div
                className={`rating-change ${game.ratingChange > 0 ? 'gain' : 'loss'}`}
              >
                {game.ratingChange > 0 ? '+' : ''}{game.ratingChange}
              </div>
              <div className="new-rating">{game.newRating}</div>
              <button className="analyze-btn">
                <Eye size={16} style={{ marginRight: 6 }} /> Analyze
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GameHistory;