'use client'
import React,{useState  }from 'react'
import "./GameAnalysis.css";
import { Overview ,GameHistory} from '@/page/student-components/GameAnalysis'
import  Link  from 'next/link';
export const page = () => {
  const [gameHeading, setGameHeading] = useState("Overview");
  const handleOverview = () => {
    setGameHeading("Overview");
  }
  const handleGameHistory = () => {
    setGameHeading("Game History");
  }
  const handlePerformance = () => {
    setGameHeading("Performance");
  }
  return (
    <div className='game-analysis-page' >
      <div className="fixed-header">
        <div className="header-container">
          <Link href="/chess-hub-student" className="back-link">
            <svg className="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div id="gameHeading">Game Analysis</div>
      <div className='game-analysis-buttons'>
        <div onClick={handleOverview} className={gameHeading=="Overview"?"selected":"disSelected"}>Overview</div>
        <div onClick={handleGameHistory} className={gameHeading=="Game History"?"selected":"disSelected"}>Game History</div>
        <div onClick={handlePerformance} className={gameHeading=="Performance"?"selected":"disSelected"}>Performance</div>
      </div>
      { gameHeading === "Overview" && <Overview />}
      { gameHeading === "Game History" &&<GameHistory />}
      { gameHeading === "Performance" && <div>Performance Content</div>}
    </div>
  )
}
export default page