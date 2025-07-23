'use client';
import React, { useState, ChangeEvent } from "react";
import "./GradesCard.css";
import { RemovePlayers } from "./removePlayers";

type GradesCardProps = {
  selectedClasses: string[];
  setSelectedClasses: React.Dispatch<React.SetStateAction<string[]>>;
  selectedPlayers:string[];
  setSelectedPlayers:(value :string[])=>void;
};

const GradesCard: React.FC<GradesCardProps> = ({ selectedClasses, setSelectedClasses,selectedPlayers,setSelectedPlayers }) => {
  const [selectedGrade, setGrade] = useState<string>("");
  const [selectedSection, setSection] = useState<string>("");
  const [showRemovePlayers, setShowRemovePlayers] = useState<boolean>(false);

  const sections: Record<string, string[]> = {
    "6": ["Section A", "Section B", "Section C"],
    "7": ["Section A", "Section B", "Section C"],
    "8": ["Section A", "Section B", "Section C"],
    "9": ["Section A", "Section B", "Section C", "Section D"],
    "10": ["Section A", "Section B", "Section C", "Section D", "Section E"],
  };

  const handleChangeGrades = (event: ChangeEvent<HTMLSelectElement>) => {
    setGrade(event.target.value);
    setSection("");
  };

  const handleChangeSections = (event: ChangeEvent<HTMLSelectElement>) => {
    const section = event.target.value;
    if (!selectedGrade || section === "") return;

    const classIdentifier = `Grade ${selectedGrade} ${section}`;
    if (!selectedClasses.includes(classIdentifier)) {
      setSelectedClasses([...selectedClasses, classIdentifier]);
      setGrade("");
      setSection("");
    }
  };

  const removeClass = (cls: string) => {
    setSelectedClasses((prev) => prev.filter((item) => item !== cls));
    setGrade("");
    setSection("");
  };

  const onClose = () => {
    setShowRemovePlayers(false);
  };

  const availableSections = sections[selectedGrade] || [];

  return (
    <>
      <div className="grades-container">
        <div className="grades-heading">
          <span role="img" aria-label="user">👥</span> Select Classes & Sections
        </div>

        <div className="dropdown-column">
          <select onChange={handleChangeGrades} value={selectedGrade} className="dropdown">
            <option value="">Select a grade</option>
            {Object.keys(sections).map((grade) => (
              <option key={grade} value={grade}>
                Grade {grade}
              </option>
            ))}
          </select>

          <select
            onChange={handleChangeSections}
            value={selectedSection}
            disabled={!selectedGrade}
            className="dropdown"
          >
            <option value="">Select a section</option>
            {availableSections.map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
        </div>

        <div className="chips-container">
          {selectedClasses.map((cls) => (
            <div key={cls} className="chip">
              {cls}
              <button className="remove-btn" onClick={() => removeClass(cls)}>×</button>
            </div>
          ))}
        </div>

        {selectedClasses.length > 0 && (
          <div className="remove-btn-container">
            <div id="TotalPlayers">Total Students: {selectedClasses.length}</div>
            <button className="remove-players-btn" onClick={() => setShowRemovePlayers(true)}>
              Remove Players
            </button>
          </div>
        )}
      </div>

      {showRemovePlayers && <RemovePlayers onClose={onClose} selectedplayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/>}
    </>
  );
};

export default GradesCard;
