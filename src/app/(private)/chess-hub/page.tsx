import { Users, Gamepad2, Clock, Trophy, BarChart, Play } from "lucide-react"
import "./dashboard.css"
import Link from "next/link"
import { RecentActivity } from "@/page/Admin-dashboard/RecentActivity"
const Dashboard = () => {
  const activityData = [
  {
    gradeLabel: "6th Grade, 7th Grade",
    description: "6th C + 7th A (Grouped)",
    date: "July 23, 2025",
    time: "15:00",
    matchCount: 1,
    type: "Rapid",
    timeControl: "15+10"
  },
  {
    gradeLabel: "8th Grade, 9th Grade",
    description: "8th A + 9th B (Grouped)",
    date: "July 22, 2025",
    time: "14:00",
    matchCount: 2,
    type: "Blitz",
    timeControl: "5+3"
  },
  {
    gradeLabel: "8th Grade, 9th Grade",
    description: "8th A + 9th B (Grouped)",
    date: "July 22, 2025",
    time: "14:00",
    matchCount: 2,
    type: "Blitz",
    timeControl: "5+3"
  }
];
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🏫 School Chess Hub</h1>
      </header>

      <div className="kpi-section">
        <div className="kpi-card">
          <Users className="kpi-icon" />
          <div>
            <p className="kpi-title">Students This Term</p>
            <p className="kpi-value">124</p>
          </div>
        </div>

        <div className="kpi-card">
          <Gamepad2 className="kpi-icon green" />
          <div>
            <p className="kpi-title">Games This Week</p>
            <p className="kpi-value">47</p>
          </div>
        </div>

        <Link className="kpi-card" href="/chess-hub/tracking-page">
          <Clock className="kpi-icon orange" />
          <div>
            <p className="kpi-title">Ongoing Matches</p>
            <p className="kpi-value">8</p>
          </div>
        </Link>

        <div className="kpi-card">
          <Trophy className="kpi-icon yellow" />
          <div>
            <p className="kpi-title">Top Performer</p>
            <p className="kpi-value">Priya Agarwal</p>
          </div>
        </div>
      </div>

      <div className="link-section">
        <Link className="link-card blue" href="/chess-hub/create-match">
          <Play className="kpi-icon white"  />
          <div>
            <h3>Start Session</h3>
          </div>
        </Link>

        <div className="link-card gold">
          <Trophy className="kpi-icon white" />
          <div>
            <h3>Start Tournament</h3>
          </div>
        </div>

        <Link className="link-card green" href="/chess-hub/Leaderboard">
          <BarChart className="kpi-icon white" />
          <div>
            <h3>Leaderboard</h3>
          </div>
        </Link>
      </div>
      <RecentActivity data={activityData}/>
    </div>
  )
}

export default Dashboard
