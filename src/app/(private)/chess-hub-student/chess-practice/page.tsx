"use client"

import { JSX, useState } from "react"
import Link from "next/link"
import { ChessPracticeModes } from "@/page/student-components/chess-practice"
import { ChessStudies } from "@/page/student-components/chess-practice"
import "./practice.css"
import { Target } from "lucide-react"
type TabType = "practice" | "studies"

export default function ChessPracticePage(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>("practice")

  const handleTabChange = (tab: TabType): void => {
    setActiveTab(tab)
  }

  return (
    <div className="practice-page">
      {/* Fixed Header */}
      <div className="fixed-header">
        <div className="header-container">
          <Link href="/chess-hub-student" className="back-link">
            <svg className="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-container">
          {/* Page Header */}
          <div className="page-header">
            <h1 className="page-title">Chess Practice Center</h1>
            <p className="page-subtitle">Improve your chess skills with targeted practice sessions</p>
          </div>

          {/* Toggle Tabs */}
          <div className="tabs-container">
            <div className="tabs-wrapper">
              <button
                className={`tab-button ${activeTab === "practice" ? "active" : ""}`}
                onClick={() => handleTabChange("practice")}
                type="button"
              >
                Practice Modes
              </button>
              <button
                className={`tab-button ${activeTab === "studies" ? "active" : ""}`}
                onClick={() => handleTabChange("studies")}
                type="button"
              >
                Chess Studies
              </button>
            </div>
          </div>

          {/* Tab Content - Full Width */}
          <div className="content-grid">
            <div className="main-section">
              {activeTab === "practice" && <ChessPracticeModes />}
              {activeTab === "studies" && <ChessStudies />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
