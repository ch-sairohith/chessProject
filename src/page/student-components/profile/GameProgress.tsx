import React from 'react'
import './GameProgress.css'

export const GameProgess = () => {
  const monthlyProgress = [
    {
      month: "Sep 2023",
      gamesPlayed: 3,
      rating: 1050,
      winRate: 67,
    },
    {
      month: "Oct 2023",
      gamesPlayed: 5,
      rating: 1085,
      winRate: 60,
    },
    {
      month: "Nov 2023",
      gamesPlayed: 4,
      rating: 1120,
      winRate: 75,
    },
    {
      month: "Dec 2023",
      gamesPlayed: 6,
      rating: 1155,
      winRate: 67,
    },
    {
      month: "Jan 2024",
      gamesPlayed: 6,
      rating: 1180,
      winRate: 50,
    },
    {
      month: "Feb 2024",
      gamesPlayed: 8,
      rating: 1205,
      winRate: 75,
    },
    {
      month: "Mar 2024",
      gamesPlayed: 12,
      rating: 1240,
      winRate: 83,
    },
  ]

  const getRatingTrend = (currentRating: number, previousRating?: number) => {
    if (!previousRating) return "neutral"
    if (currentRating > previousRating) return "up"
    if (currentRating < previousRating) return "down"
    return "neutral"
  }

  const getWinRateColor = (winRate: number) => {
    if (winRate >= 70) return "excellent"
    if (winRate >= 60) return "good"
    if (winRate >= 50) return "average"
    return "poor"
  }

  return (
    <div className="game-progress-container">
      <div className="progress-header">
        <div className="progress-title">
          <span className="trend-icon">📈</span>
          Monthly Progress
        </div>
        <div className="progress-subtitle">Track your chess improvement over time</div>
      </div>

      <div className="progress-list">
        {monthlyProgress.map((month, index) => {
          const previousMonth = index > 0 ? monthlyProgress[index - 1] : null
          const ratingTrend = getRatingTrend(month.rating, previousMonth?.rating)
          const winRateClass = getWinRateColor(month.winRate)

          return (
            <div key={month.month} className="progress-item">
              <div className="progress-left">
                <div className="month-name">{month.month}</div>
                <div className="games-played">
                  {month.gamesPlayed} game{month.gamesPlayed !== 1 ? "s" : ""} played
                </div>
              </div>

              <div className="progress-right">
                <div className="rating-section">
                  <div className={`rating-value ${ratingTrend}`}>
                    {month.rating}
                    {ratingTrend === "up" && <span className="trend-arrow">↗</span>}
                    {ratingTrend === "down" && <span className="trend-arrow">↘</span>}
                  </div>
                </div>
                <div className="winrate-section">
                  <div className={`winrate-value ${winRateClass}`}>{month.winRate}% win rate</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="progress-summary">
        <div className="summary-card">
          <div className="summary-label">Total Improvement</div>
          <div className="summary-value improvement">
            +{monthlyProgress[monthlyProgress.length - 1].rating - monthlyProgress[0].rating} rating
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Best Month</div>
          <div className="summary-value best">
            {monthlyProgress.reduce((best, current) => (current.winRate > best.winRate ? current : best)).month}
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-label">Total Games</div>
          <div className="summary-value total">
            {monthlyProgress.reduce((sum, month) => sum + month.gamesPlayed, 0)} games
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameProgess
