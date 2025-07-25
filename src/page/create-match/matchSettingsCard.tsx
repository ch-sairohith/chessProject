'use client';
import React from 'react';
import './matchSettingsCard.css';

interface MatchSettingsCardProps {
  setGeneratepairings: (value: boolean) => void;
}

const MatchSettingsCard: React.FC<MatchSettingsCardProps> = ({ setGeneratepairings }) => {
  const handleClick = () => {
    setGeneratepairings(true);
  };

  return (
    <div className="MainCard">
      <div className="CardHeadings">Match Settings</div>
      <div>
        <div className="Heading1">Automate Pairing Type</div>
        <select className="dropdown">
          <option>Randomize</option>
        </select>

        <div className="Heading2">Time Control</div>
        <select>
          <option>15+10</option>
        </select>

        <button className="mainButton" onClick={handleClick}>
          Generate Pairings
        </button>
      </div>
    </div>
  );
};

export default MatchSettingsCard;
