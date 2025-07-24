'use client';

import React, { useEffect, useState } from 'react';
import { Play, Target, Trophy } from 'lucide-react';
import Link from 'next/link';
import './NotificationCard.css';

type MatchInvite = {
  type: 'match_invite';
  opponent: {
    name: string;
    grade: number;
    section: string;
    rating: number;
  };
  time: string;
};

type MatchResult = {
  type: 'match_result';
  opponent: {
    name: string;
    grade: number;
    section: string;
    rating: number;
  };
  result: 'win' | 'loss' | 'draw';
  ratingChange: number;
  time: string;
};

type DailyPuzzle = {
  type: 'daily_puzzle';
  puzzleId: string;
  puzzleType: string;
  time: string;
};

type Notification = MatchInvite | MatchResult | DailyPuzzle;

const NotificationCard = () => {
  const [notifiactons, setNotifications] = useState<{ header: string; content: string; time: string }[]>([]);

  const data: Notification[] = [
    {
      type: 'match_invite',
      opponent: {
        name: 'Ava Thompson',
        grade: 10,
        section: 'B',
        rating: 1145,
      },
      time: '2025-07-17T09:30:00Z',
    },
    {
      type: 'match_result',
      opponent: {
        name: 'Liam Brown',
        grade: 10,
        section: 'C',
        rating: 1200,
      },
      result: 'win',
      ratingChange: 15,
      time: '2025-07-16T18:20:00Z',
    },
    {
      type: 'match_result',
      opponent: {
        name: 'Emma Davis',
        grade: 10,
        section: 'A',
        rating: 1285,
      },
      result: 'loss',
      ratingChange: -10,
      time: '2025-07-15T12:00:00Z',
    },
    {
      type: 'daily_puzzle',
      puzzleId: 'puzzle_98765',
      puzzleType: 'checkmate',
      time: '2025-07-17T06:00:00Z',
    },
    {
      type: 'daily_puzzle',
      puzzleId: 'puzzle_12345',
      puzzleType: 'endgame',
      time: '2025-07-16T06:00:00Z',
    },
  ];

  useEffect(() => {
    let not: { header: string; content: string; time: string }[] = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].type === 'match_invite') {
        const matchInvite = data[i] as MatchInvite;
        const temp = {
          header: 'Match Ready',
          content: `You have been paired with ${matchInvite.opponent.name} (Grade ${matchInvite.opponent.grade} - Section ${matchInvite.opponent.section}, Rating ${matchInvite.opponent.rating})`,
          time: matchInvite.time,
        };
        not = [...not, temp];
      } else if (data[i].type === 'match_result') {
        const matchResult = data[i] as MatchResult;
        const resultText = matchResult.result === 'win' ? 'won' : matchResult.result === 'loss' ? 'lost' : 'drew';
        const temp = {
          header: 'Match Result',
          content: `You ${resultText} against ${matchResult.opponent.name} (Grade ${matchResult.opponent.grade} - Section ${matchResult.opponent.section}, Rating ${matchResult.opponent.rating}). Rating change: ${matchResult.ratingChange}`,
          time: matchResult.time,
        };
        not = [...not, temp];
      } else if (data[i].type === 'daily_puzzle') {
        const dailyPuzzle = data[i] as DailyPuzzle;
        const temp = {
          header: 'Daily Puzzle',
          content: `New ${dailyPuzzle.puzzleType} puzzle available (ID: ${dailyPuzzle.puzzleId})`,
          time: dailyPuzzle.time,
        };
        not = [...not, temp];
      }
    }
    setNotifications(not);
  }, []);

  return (
    <div className='notification-card-container'>
      <h3>Notifications</h3>
      <div className="notification-container">
        {notifiactons.map((notification, index) => (
          <div className="notification-card" key={index}>
            <div className={`notification-icon ${notification.header.replace(/\s/g, '')}`}>
              {notification.header === 'Match Ready' && <Play size={16} color="#4ca054" />}
              {notification.header === 'Match Result' && <Trophy size={16} color="#3662e3" />}
              {notification.header === 'Daily Puzzle' && <Target size={16} color="#9d59ef" />}
            </div>
            <div className="notification-content">
              <strong>{notification.header}</strong>
              <div>{notification.content}</div>
              <small>{new Date(notification.time).toLocaleString()}</small>
            </div>
            <div className={`notification-action ${notification.header.replace(/\s/g, '')}`}>
              <Link href="https://lichess.org/kRUQQP09">
                {notification.header === 'Match Ready' && 'Join '}
                {notification.header === 'Match Result' && 'Analysis'}
                {notification.header === 'Daily Puzzle' && 'Solve Now'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NotificationCard;