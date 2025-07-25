import React from 'react';
import './kpi.css';

interface KpiProps {
  headder: string;
  content: React.ReactNode;
  image?: React.ReactNode;
}

export const Kpi: React.FC<KpiProps> = ({ headder, content, image }) => {
  return (
    <div className="Kpi">
      <div className="Kpi-left">
        <div className="Kpi-header">{headder}</div>
        <div className="Kpi-content-text">{content}</div>
      </div>
      {image && <div className="Kpi-icon">{image}</div>}
    </div>
  );
};
export default Kpi;