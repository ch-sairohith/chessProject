import "./Analysis.css"

export const Analysis = () => {
  // Mock data for analysis
  const monthlyGames = [
    { month: "Sep", games: 3, rating: 1050 },
    { month: "Oct", games: 5, rating: 1085 },
    { month: "Nov", games: 4, rating: 1120 },
    { month: "Dec", games: 6, rating: 1155 },
    { month: "Jan", games: 6, rating: 1180 },
    { month: "Feb", games: 8, rating: 1205 },
    { month: "Mar", games: 12, rating: 1240 },
  ]

  const gameResults = [
    { type: "Wins", count: 70, percentage: 56.5, color: "#059669" },
    { type: "Losses", count: 38, percentage: 30.6, color: "#dc2626" },
    { type: "Draws", count: 16, percentage: 12.9, color: "#d97706" },
  ]

  const ratingProgression = [
    { game: 1, rating: 1000 },
    { game: 10, rating: 1020 },
    { game: 20, rating: 1050 },
    { game: 30, rating: 1085 },
    { game: 40, rating: 1120 },
    { game: 50, rating: 1155 },
    { game: 60, rating: 1180 },
    { game: 70, rating: 1205 },
    { game: 80, rating: 1240 },
  ]
  const timeControlStats = [
    { control: "Blitz (5+0)", games: 45, winRate: 62, avgAccuracy: 85 },
    { control: "Rapid (10+0)", games: 35, winRate: 57, avgAccuracy: 88 },
    { control: "Classical (30+0)", games: 20, winRate: 65, avgAccuracy: 92 },
    { control: "Bullet (1+0)", games: 24, winRate: 54, avgAccuracy: 78 },
  ]

  const maxGames = Math.max(...monthlyGames.map((m) => m.games))
  const maxRating = Math.max(...ratingProgression.map((r) => r.rating))
  const minRating = Math.min(...ratingProgression.map((r) => r.rating))

  return (
    <div className="analysis-container">
      <div className="analysis-header">
        <div className="analysis-title">
          <span className="analysis-icon">🔍</span>
          Game Analysis & Insights
        </div>
        <div className="analysis-subtitle">Deep dive into your chess performance</div>
      </div>

      {/* Games Over Months Chart */}
      <div className="chart-section">
        <div className="chart-header">
          <h3>Games Played Over Months</h3>
          <span className="chart-subtitle">Monthly activity tracking</span>
        </div>
        <div className="bar-chart">
          {monthlyGames.map((month, index) => (
            <div key={month.month} className="bar-item">
              <div
                className="bar"
                style={{
                  height: `${(month.games / maxGames) * 100}%`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <span className="bar-value">{month.games}</span>
              </div>
              <span className="bar-label">{month.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rating Progression Chart */}
      <div className="chart-section">
        <div className="chart-header">
          <h3>Rating Progression</h3>
          <span className="chart-subtitle">Rating improvement over games played</span>
        </div>
        <div className="line-chart">
          <div className="chart-grid">
            {[1200, 1150, 1100, 1050, 1000].map((rating) => (
              <div key={rating} className="grid-line">
                <span className="grid-label">{rating}</span>
              </div>
            ))}
          </div>
          <svg className="line-svg" viewBox="0 0 400 200">
            <polyline
              points={ratingProgression
                .map(
                  (point, index) =>
                    `${(index / (ratingProgression.length - 1)) * 380 + 10},${200 - ((point.rating - minRating) / (maxRating - minRating)) * 180 - 10}`,
                )
                .join(" ")}
              className="rating-line"
            />
            {ratingProgression.map((point, index) => (
              <circle
                key={index}
                cx={(index / (ratingProgression.length - 1)) * 380 + 10}
                cy={200 - ((point.rating - minRating) / (maxRating - minRating)) * 180 - 10}
                r="4"
                className="rating-point"
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="chart-section">
        <div className="chart-header">
          <h3>Game Results Distribution</h3>
          <span className="chart-subtitle">Win/Loss/Draw breakdown</span>
        </div>
        <div className="pie-chart-container">
          <div className="pie-chart-svg">
            <svg width="200" height="200" viewBox="0 0 200 200">
              {gameResults.map((result, index) => {
                const total = gameResults.reduce((sum, r) => sum + r.percentage, 0)
                const angle = (result.percentage / total) * 360
                const prevAngles = gameResults.slice(0, index).reduce((sum, r) => sum + (r.percentage / total) * 360, 0)

                const startAngle = prevAngles - 90 // Start from top
                const endAngle = startAngle + angle

                const startAngleRad = (startAngle * Math.PI) / 180
                const endAngleRad = (endAngle * Math.PI) / 180

                const largeArcFlag = angle > 180 ? 1 : 0

                const x1 = 100 + 80 * Math.cos(startAngleRad)
                const y1 = 100 + 80 * Math.sin(startAngleRad)
                const x2 = 100 + 80 * Math.cos(endAngleRad)
                const y2 = 100 + 80 * Math.sin(endAngleRad)

                const pathData = [`M 100 100`, `L ${x1} ${y1}`, `A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2}`, `Z`].join(
                  " ",
                )

                return (
                  <path
                    key={result.type}
                    d={pathData}
                    fill={result.color}
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="pie-slice-svg"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                )
              })}
              <circle cx="100" cy="100" r="30" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
              {/* Center text */}
              <text
                x="100"
                y="95"
                textAnchor="middle"
                className="pie-center-text"
                fill="#1e293b"
                fontSize="12"
                fontWeight="600"
              >
                Total
              </text>
              <text
                x="100"
                y="110"
                textAnchor="middle"
                className="pie-center-number"
                fill="#3b82f6"
                fontSize="16"
                fontWeight="700"
              >
                {gameResults.reduce((sum, r) => sum + r.count, 0)}
              </text>
            </svg>
          </div>
          <div className="pie-legend">
            {gameResults.map((result) => (
              <div key={result.type} className="legend-item">
                <div className="legend-color" style={{ backgroundColor: result.color }} />
                <span className="legend-label">{result.type}</span>
                <span className="legend-value">
                  {result.count} ({result.percentage}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Time Control Analysis */}
      <div className="chart-section">
        <div className="chart-header">
          <h3>Performance by Time Control</h3>
          <span className="chart-subtitle">Win rates and accuracy across different formats</span>
        </div>
        <div className="time-control-grid">
          {timeControlStats.map((control, index) => (
            <div key={control.control} className="time-control-card">
              <div className="control-header">
                <h4>{control.control}</h4>
                <span className="games-count">{control.games} games</span>
              </div>
              <div className="control-stats">
                <div className="stat-item">
                  <span className="stat-label">Win Rate</span>
                  <span className="stat-value win-rate">{control.winRate}%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Avg Accuracy</span>
                  <span className="stat-value accuracy">{control.avgAccuracy}%</span>
                </div>
              </div>
              <div className="control-progress">
                <div
                  className="progress-bar"
                  style={{
                    width: `${control.winRate}%`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Analysis
