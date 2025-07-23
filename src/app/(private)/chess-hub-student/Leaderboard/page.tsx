'use client'
import React, { useState } from 'react'
import { ClassLeaderboard} from '@/page/student-components/student-leaderboard'
import './Leaderboardpage.css'
import Link from 'next/link'

 const page = () => {
    const [leaderboardState, setLeaderboardState] = useState(true);
    function handleClassLeaderboard() {
        setLeaderboardState(true);  
    }
    function handleSchoolLeaderboard() {
        setLeaderboardState(false);
    }            
    
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

  return (
    <div>
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
        <div className="leaderboard-wrapper">
            <h1>Leaderboard</h1>
            <p>See how you rank against your classmates and school</p>

            <div className="toggle-buttons">
                <button className={`toggle-button ${leaderboardState ? 'active' : ''}`} onClick={handleClassLeaderboard}>
                My Class (10A)
                </button>
                <button className={`toggle-button ${!leaderboardState ? 'active' : ''}`} onClick={handleSchoolLeaderboard}>
                School Wide
                </button>
            </div>

            {leaderboardState ? (
                <ClassLeaderboard userId={5} sampleData={sampleData}/>
            ) : (
                <div><ClassLeaderboard userId={5} sampleData={sampleData}/></div>
            )}
            </div>
    </div>
    

  )
}
export default page