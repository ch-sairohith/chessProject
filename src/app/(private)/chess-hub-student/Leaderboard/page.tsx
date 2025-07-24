'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { ClassLeaderboard } from '@/page/student-components/student-leaderboard';
import './LeaderboardPage.css';

export default function Page() {
  const [view, setView] = useState<'class' | 'school'>('class');

  const sampleData = [{ id: 1, name: "Ali Baba", rating: 1150, games: 24, winRate: 63, change: 15 },
  { id: 2, name: "Sara Khan", rating: 1102, games: 20, winRate: 60, change: -12 },
  { id: 3, name: "Ravi Patel", rating: 1088, games: 18, winRate: 55, change: 0 },
  { id: 4, name: "Meera Joshi", rating: 980, games: 12, winRate: 42, change: -5 },
  { id: 5, name: "John D", rating: 1023, games: 16, winRate: 50, change: 8 },
  { id: 6, name: "Kiran Rao", rating: 1125, games: 22, winRate: 61, change: 9 },
  { id: 7, name: "Lakshmi S", rating: 1050, games: 14, winRate: 48, change: 3 },
  { id: 8, name: "Tom Joseph", rating: 1005, games: 10, winRate: 45, change: -4 },
  { id: 9, name: "Neha Varma", rating: 1075, games: 19, winRate: 52, change: 6 },
  { id: 10, name: "Aditya N", rating: 990, games: 11, winRate: 40, change: -7 },
  { id: 11, name: "Reema Das", rating: 970, games: 9, winRate: 38, change: 1 },
  { id: 12, name: "Anil Kumar", rating: 1010, games: 13, winRate: 47, change: 2 },
  { id: 13, name: "Sneha M", rating: 940, games: 8, winRate: 35, change: -2 },
  { id: 14, name: "Arjun R", rating: 1044, games: 15, winRate: 49, change: 4 },
  { id: 15, name: "Priya G", rating: 985, games: 12, winRate: 46, change: -3 },
  { id: 16, name: "Zaid Khan", rating: 1002, games: 11, winRate: 44, change: 5 },
  { id: 17, name: "Vikram S", rating: 960, games: 7, winRate: 33, change: -6 },
  { id: 18, name: "Harsha T", rating: 925, games: 6, winRate: 30, change: 0 },
  { id: 19, name: "Divya I", rating: 895, games: 5, winRate: 28, change: -1 },
  { id: 20, name: "Farhan U", rating: 910, games: 6, winRate: 29, change: 1 }];

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
        <h1 className="leaderboard-title">Leaderboard</h1>
        <p className="leaderboard-subtext">See how you rank against your classmates and school</p>

        <div className="toggle-buttons">
          <button
            className={view === 'class' ? 'active-toggle' : ''}
            onClick={() => setView('class')}
          >
            My Class (10A)
          </button>
          <button
            className={view === 'school' ? 'active-toggle' : ''}
            onClick={() => setView('school')}
          >
            School Wide
          </button>
        </div>

        <div className="leaderboard-content">
          {view === 'class' ? (
            <ClassLeaderboard sampleData={sampleData} userId={8} />
          ) : (
            <div className="school-placeholder">School Leaderboard Coming Soon...</div>
          )}
        </div>
      </div>
    </div>
  );
};
