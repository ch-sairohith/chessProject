'use client';
import React, { useEffect, useState } from 'react';
import './matchPairingCard.css';

const MatchPairingCard = ({
  students,
  //setPairedPlayers
}: {
  students: string[];
  //setPairedPlayers: (value: string[][]) => void;
}) => {
  const [pairedArray, setPairedArray] = useState<string[][]>([]);

  const shuffleArray = (arr: string[]) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const shuffled = shuffleArray(students);
    const pairs: string[][] = [];

    for (let i = 0; i < shuffled.length; i += 2) {
      if (i + 1 < shuffled.length) {
        pairs.push([shuffled[i], shuffled[i + 1]]);
      } else {
        pairs.push([shuffled[i]]); 
      }
    }

    setPairedArray(pairs);
   // setPairedPlayers(pairs);
  }, [students]);

  return (
    <div className="main-pairing-card">
      <div className="pairings-header">
        <h3>Generated Match Pairings</h3>
        <span className="scroll-hint">⬇ Scroll to view all matches</span>
      </div>

      {pairedArray.map((pair, index) => (
        <div key={index} className="pairing-card">
          <div>{pair[0]}</div>
          <span>vs</span>
          <div>{pair[1] || "Bye"}</div>
        </div>
      ))}

      <div className="start-session-btn-wrapper">
        <button className="start-session-btn">▶ Start Match Session</button>
      </div>
    </div>
  );
};

export default MatchPairingCard;
