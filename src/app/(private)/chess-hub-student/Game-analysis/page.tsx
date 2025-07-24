'use client'

import React, { useState } from 'react'
import { GameHistory } from '@/page/student-components/GameAnalysis'
import { Overview } from '@/page/student-components/GameAnalysis/overview'
import './gameAnalysis.css'
import Link from 'next/link'

export const Page = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'history'>('overview')

  return (
    <div className="game-analysis-container">
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
      <h1 className="page-title">Game Analysis</h1>

      <div className="tab-selector">
        <button
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={activeTab === 'history' ? 'active' : ''}
          onClick={() => setActiveTab('history')}
        >
          Game History
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'overview' && <Overview />}
        {activeTab === 'history' && <GameHistory />}
      </div>
    </div>
  )
}
export default Page;