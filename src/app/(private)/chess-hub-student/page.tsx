import React from 'react';
import { Kpi, PageHeader,DashboardLeaderBoard,NotificationCard } from '@/page/student-components/student-dashboard';
import { Trophy, Calendar, LucideMedal, Target } from 'lucide-react';
import Link from 'next/link';
import './mainPage.css';
function Page() {

  return (
    <div>
        <PageHeader name="ali baba" grade="4" section="a" />
      <div style={{ backgroundColor: "#f9fafb", paddingTop: "100px" }}>
        <div className="kpi-container">
          <Kpi
            headder="Current Rating"
            fotter="Your chess rating"
            content="1150"
            image={<Trophy color="#3662e3" size={24} />}
          />
          <Kpi
            headder="Games This Week"
            fotter="Last 7 days"
            content="5"
            image={<Calendar color="#4ca054" size={24} />}
          />
          <Kpi
            headder="Win/Loss Record"
            fotter="W/L/D (63% win rate)"
            content={
              <div>
                <span id="kpi-content-wins" style={{ color: '#4ca054' }}>15</span> /
                <span id="kpi-content-losses" style={{ color: '#d94848' }}>7</span> /
                <span id="kpi-content-draws" style={{ color: '#c27c0e' }}>2</span>
              </div>
            }
            image={<Trophy color="#3662e3" size={24} />}
          />
          <Kpi
            headder="Class Rank"
            fotter="Out of 25 students"
            content="#3"
            image={<LucideMedal color="#e3b341" size={24} />}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '20px',
            flexWrap: 'wrap',
            marginTop: '40px',
            padding: '0px 155px',
          }}
        >
          <Link href="/chess-hub-student/chess-practice" className="kpi-button" style={{ backgroundColor: '#9d59ef' }}>
            <Target size={14} /> Practice Mode
          </Link>
          <Link href="/chess-hub-student/Game-analysis" className="kpi-button" style={{ backgroundColor: '#5ec269' }}>
            📊 View Analysis
          </Link>
        </div>
        <div className='notification-leaderboard-container'>
          <NotificationCard />
          <DashboardLeaderBoard id={6}/>
        </div>
      </div>
    </div>
  );
}

export default Page;
