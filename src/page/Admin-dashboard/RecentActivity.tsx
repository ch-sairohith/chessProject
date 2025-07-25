import React from 'react';
import './RecentActivity.css';
import { CalendarDays, Clock, Users } from 'lucide-react';

type ActivityItem = {
  gradeLabel: string;
  description: string;
  date: string;
  time: string;
  matchCount: number;
  type: string;
  timeControl: string;
};

type RecentActivityProps = {
  data: ActivityItem[];
};

export const RecentActivity: React.FC<RecentActivityProps> = ({ data }) => {
  return (
    <div className="recent-activity-container">
      <h2 className="recent-activity-title">Recent Activity</h2>
      <p className="recent-activity-subtitle">Latest match sessions and results</p>

      <div className="activity-list">
        {data.map((item, index) => (
          <div className="activity-card" key={index}>
            <div className="activity-left">
              <div className="activity-grade">
                <strong>{item.gradeLabel}</strong>
                <span className="grouped-tag">Grouped</span>
              </div>
              <div className="activity-desc">{item.description}</div>
              <div className="activity-meta">
                <div><CalendarDays size={16} /> {item.date}</div>
                <div><Clock size={16} /> {item.time}</div>
                <div><Users size={16} /> {item.matchCount} match{item.matchCount > 1 ? 'es' : ''}</div>
              </div>
            </div>
            <div className="activity-right">
              <div className="match-type">{item.type}</div>
              <div className="match-timing">{item.timeControl}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
