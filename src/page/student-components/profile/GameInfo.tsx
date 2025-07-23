'use client'
import React from 'react'
import './GameInfo.css';
import OverView from './OverView';
import Recommendations from './Recommendations';
import GameProgess from './GameProgress';
import Analysis from './Analysis';

export const GameInfo = () => {
    const stats = {
  gamesPlayed: 124,
  gamesThisMonth: 14,
  wins: 70,
  losses: 38,
  draws: 16,
  peakRating: 1580,
  bestRank: 4,
  bestAccuracy: 94,
  averageAccuracy: 83,
};
    const [showOverview, setShowOverview] = React.useState(true);
    const [showAnalysis, setShowAnalysis] = React.useState(false);        
    const [showRecommendations, setShowRecommendations] = React.useState(false);
    const [showGameProgress, setShowGameProgress] = React.useState(false);
    const handleOverviewClick = () => {
        setShowOverview(true);
        setShowAnalysis(false);
        setShowRecommendations(false);
        setShowGameProgress(false);
    };
    const handleAnalysisClick = () => {
        setShowOverview(false);
        setShowAnalysis(true);
        setShowRecommendations(false);
        setShowGameProgress(false);
    };
    const handleRecommendationsClick = () => {
        setShowOverview(false);
        setShowAnalysis(false);
        setShowRecommendations(true);
        setShowGameProgress(false);
    };  
    const handleGameProgressClick = () => {
        setShowOverview(false);
        setShowAnalysis(false);
        setShowRecommendations(false);
        setShowGameProgress(true);
    };
    return (
  <div className="game-info-container">
    <div className="tab-buttons">
      <button onClick={handleOverviewClick} className={`tab-button ${showOverview ? 'active' : ''}`}>Overview</button>
      <button onClick={handleGameProgressClick} className={`tab-button ${showGameProgress ? 'active' : ''}`}>Progress</button>
      <button onClick={handleAnalysisClick} className={`tab-button ${showAnalysis ? 'active' : ''}`}>Analysis</button>
      <button onClick={handleRecommendationsClick} className={`tab-button ${showRecommendations ? 'active' : ''}`}>Recommendations</button>
    </div>
    <div className="tab-content">
      {showOverview && <OverView stats={stats} />}
      {showAnalysis && <Analysis />}  
      {showRecommendations && <Recommendations />}
      {showGameProgress && <GameProgess />}
    </div>
  </div>
);

}
export default GameInfo