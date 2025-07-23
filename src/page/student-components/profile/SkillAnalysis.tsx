// components/SkillAnalysis.tsx
import React from 'react';
import  './SkillAnalysis.css';

const skills = [
  { name: 'Opening Knowledge', score: 78 },
  { name: 'Tactical Vision', score: 92 },
  { name: 'Positional Play', score: 65 },
  { name: 'Endgame Technique', score: 58 },
  { name: 'Time Management', score: 73 },
];

const SkillAnalysis = () => {
  return (
    <div className="container">
      <h3>Skill Analysis</h3>
      {skills.map(skill => (
        <div key={skill.name} className="skill">
          <span>{skill.name}</span>
          <div className="barBackground">
            <div
              className="barFill"
              style={{ width: `${skill.score}%` }}
            />
          </div>
          <span className="score">{skill.score}/100</span>
        </div>
      ))}
    </div>
  );
};

export default SkillAnalysis;
