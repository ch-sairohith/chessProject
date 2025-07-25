'use client'
import React, { useState, useEffect } from 'react';
import './RemovePlayer.css';

interface RemovePlayersProps {
  onClose: () => void;
  selectedplayers: string[];
  setSelectedPlayers: (value: string[]) => void;
}

export const RemovePlayers: React.FC<RemovePlayersProps> = ({
  onClose,
  selectedplayers,
  setSelectedPlayers,
}) => {
  const [searchText, setSearchText] = useState('');
  const [matchedNames, setMatchedNames] = useState<string[]>([]);

  useEffect(() => {
    const filtered = selectedplayers.filter(name =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
    setMatchedNames(filtered);
  }, [searchText, selectedplayers]);

  const removePlayer = (name: string) => {
    const remainingPlayers = selectedplayers.filter(player => player !== name);
    setSelectedPlayers(remainingPlayers);
  };

  return (
    <>
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3>Remove Player</h3>
          <div className="modal-close" onClick={onClose}>×</div>
        </div>

        <input
          className="modal-input"
          type="text"
          placeholder="Search player to remove"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />

        <div className="modal-subtext">
          Type to search from {selectedplayers.length} selected students
        </div>
      </div>
    </div>
     <div className="matched-list">
        {searchText.length>0 &&matchedNames.length>0 ? matchedNames.map((player) => (
        <div key={player} className="player-row">
      <div className="player-name">{player}</div>
      <div className="remove-button" onClick={() => removePlayer(player)}>
        Remove
      </div>
    </div>
         )):matchedNames.length==0&&<div className='player-row'>No results found
            </div>}
        </div>
        </>
  );
};

export default RemovePlayers;
