'use client';
import React, { useEffect, useState } from 'react';
import { GradesCard } from '@/page/match-session';
import { MatchSettingsCard } from '@/page/match-session';
import { MatchPairingCard } from '@/page/match-session';

export default function Page() {
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [generatePairings, setGeneratepairings] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState<string[]>([]);
  const [pairedPlayers, setPairedPlayers] = useState<string[][]>([]);

  const studentsData: Record<string, Record<string, string[]>> = {
    "Grade 6": {
      "Section A": ["Alice", "Ben", "Cara", "Dan"],
      "Section B": ["Eva", "Finn", "Gina", "Harry"],
      "Section C": ["Ivy", "Jack", "Kia", "Liam"]
    },
    "Grade 7": {
      "Section A": ["Maya", "Nate", "Olive", "Paul"],
      "Section B": ["Queenie", "Ravi", "Sia", "Tom"],
      "Section C": ["Uma", "Victor", "Wendy", "Xavier"]
    },
    "Grade 8": {
      "Section A": ["Yash", "Zara", "Aarav", "Bianca"],
      "Section B": ["Chris", "Diya", "Ethan", "Farah"],
      "Section C": ["Gautam", "Hannah", "Ishan", "Jiya"]
    },
    "Grade 9": {
      "Section A": ["Karan", "Lea", "Manav", "Nina"],
      "Section B": ["Om", "Pia", "Quinn", "Rhea"],
      "Section C": ["Sam", "Tara", "Uday", "Vani"],
      "Section D": ["Will", "Xena", "Yuvan", "Zoe"]
    },
    "Grade 10": {
      "Section A": ["Anya", "Bhavik", "Chloe", "Dev"],
      "Section B": ["Esha", "Faiz", "Gia", "Harsh"],
      "Section C": ["Ira", "Jay", "Kim", "Lara"],
      "Section D": ["Mihir", "Nidhi", "Omkar", "Priti"],
      "Section E": ["Ravi", "Sara", "Tina", "Utkarsh"]
    }
  };

  useEffect(() => {
    let studentsToAggregate: string[] = [];

    for (let cls of selectedClasses) {
      const parts = cls.split(" ");
      const grade = `${parts[0]} ${parts[1]}`;
      const section = `${parts[2]} ${parts[3]}`;
      const studentsFromSection = studentsData[grade]?.[section] || [];
      studentsToAggregate = [...studentsToAggregate, ...studentsFromSection];
    }

    setSelectedPlayers(studentsToAggregate);
  }, [selectedClasses]);

  return (
    <div>
      <GradesCard
        selectedClasses={selectedClasses}
        setSelectedClasses={setSelectedClasses} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}
      />

      {selectedClasses.length > 0 && (
        <MatchSettingsCard setGeneratepairings={setGeneratepairings} />
      )}

      {generatePairings && (
        <MatchPairingCard
          students={selectedPlayers}
          setPairedPlayers={setPairedPlayers}
        />
      )}
    </div>
  );
}
