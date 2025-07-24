// File: app/profile/page.tsx
import React from 'react'
import ProfileCard from '@/page/student-components/profile/ProfileCard'
import { GameInfo } from '@/page/student-components/profile/GameInfo'
import Link from 'next/link'
import './ProfilePage.css';

function ProfilePage() {
  return (
  <div className="profile-page-container">
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
    <div className="p-6 space-y-6">
      <ProfileCard id="7" />
      <GameInfo />
      </div>
      </div>
  )
}

export default ProfilePage
