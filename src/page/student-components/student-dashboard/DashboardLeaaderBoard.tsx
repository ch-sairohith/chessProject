'use client';
import React from 'react';
import './DashboardLeaderBoard.css';
import Link from 'next/link';

type Student = {
  id: number;
  name: string;
  grade: number;
  section: string;
  rating: number;
  rank?: number;
  isYou?: boolean;
};

type Props = {
  id: number;
};

const DashboardLeaderBoard: React.FC<Props> = ({ id }) => {
  const classLeaderboard: Student[] = [
    { id: 1, name: 'James Lee', grade: 10, section: 'A', rating: 1055 },
    { id: 2, name: 'Olivia Green', grade: 10, section: 'A', rating: 1100 },
    { id: 3, name: 'Emma Davis', grade: 10, section: 'A', rating: 1285 },
    { id: 4, name: 'Noah Clark', grade: 10, section: 'C', rating: 1085 },
    { id: 5, name: 'Sarah Wilson', grade: 10, section: 'A', rating: 1165 },
    { id: 6, name: 'Sophia White', grade: 10, section: 'C', rating: 1045 },
    { id: 7, name: 'John Doe', grade: 10, section: 'A', rating: 1180 },
    { id: 8, name: 'Ava Thompson', grade: 10, section: 'B', rating: 1070 },
    { id: 9, name: 'Liam Brown', grade: 10, section: 'B', rating: 1140 },
    { id: 10, name: 'Alex Johnson', grade: 10, section: 'A', rating: 1250 },
  ];

  const rankedLeaderboard: Student[] = [...classLeaderboard]
    .sort((a, b) => b.rating - a.rating)
    .map((student, index) => ({
      ...student,
      rank: index + 1,
      isYou: student.id === id,
    }));

  const getLeaderboardSlice = (sorted: Student[], id: number): Student[] => {
    const index = sorted.findIndex(student => student.id === id);
    if (index === -1) return [];

    const topTwo = [0, 1];
    let additional: number[] = [];

    if (index < 3) {
      additional = [2, 3];
    } else if (index === sorted.length - 1) {
      additional = [index - 1, index];
    } else {
      additional = [index, index + 1];
    }

    const resultIndices = Array.from(new Set([...topTwo, ...additional]));
    return resultIndices.map(i => sorted[i]);
  };

  const result = getLeaderboardSlice(rankedLeaderboard, id);

  return (
    <div className="leaderboard-container">
      <h3 className="leaderboard-title">Class Ranking</h3>
      <div className="leaderboard-list">
        {result.map((student) => (
          <div
            key={student.id}
            className={`leaderboard-item ${student.isYou ? 'you' : ''}`}
          >
            <div className="rank">{student.rank}</div>
            <div className="info">
              <div className="student-logo">
                {student.name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase()}
              </div>
              <div className="meta-info">
                <div className="name">{student.name}</div>
                <div className="meta">
                  Grade {student.grade}, Section {student.section}
                </div>
              </div>
            </div>
            <div className="rating">
              <div className="points">{student.rating}</div>
              <div className="label">Rating</div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-full-link">
        <Link href="/chess-hub-student/Leaderboard">View Full Leaderboard</Link>
      </div>
    </div>
  );
};

export default DashboardLeaderBoard;
