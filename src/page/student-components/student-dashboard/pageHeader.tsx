'use client';

import React from 'react';
import { Bell, User } from 'lucide-react';
import Link from 'next/link';
import './pageHeader.css';

interface PageHeaderProps {
  name: string;
  grade: number | string;
  section: string;  
}

 const PageHeader: React.FC<PageHeaderProps> = ({ name, grade, section }) => {
  const temp = `${grade}th Grade - Section ${section}`;

  return (
    <div className="header-container">
      <div className="header-title">Chess Hub Dashboard</div>
      <div className="header-right">
        <div className="header-icon-wrapper">
          <Bell size={20} className="header-icon" color="black" />
          <span className="notification-badge">3</span>
        </div>
        <div className="profile-link">
          <Link href="/chess-hub-student/profile">
            <User size={20} className="header-icon" color="black"/> <span>Profile</span>
          </Link>
        </div>
        <div className='user-info-container'>
          <div className="user-info">
          <div className="user-name">{name}</div>
          <div className="user-grade">{temp}</div>
        </div>
          <div className='user-icon'>
            {name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase()}
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default PageHeader;
