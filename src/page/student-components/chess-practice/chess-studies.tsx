"use client"

import Link from "next/link"
import "./chess-studies.css"

type StudyCategory = "Opening" | "Endgame" | "Middlegame" | "Tactics"
type StudyDifficulty = "Beginner" | "Intermediate" | "Advanced"

interface ChessStudy {
  id: string
  name: string
  description: string
  chapters: number
  likes: number
  author: string
  category: StudyCategory
  difficulty: StudyDifficulty
  studyUrl: string
}

const featuredChessStudies: ChessStudy[] = [
  {
    id: "ruy-lopez-basics",
    name: "Ruy Lopez Opening",
    description: "Learn the Spanish Opening: main lines, ideas, and typical plans",
    chapters: 12,
    likes: 1247,
    author: "GMChessmaster",
    category: "Opening",
    difficulty: "Beginner",
    studyUrl: "/study/ruy-lopez-basics",
  },
  {
    id: "king-pawn-endgames",
    name: "King & Pawn Endgames",
    description: "Essential K+P vs K positions, opposition, and breakthrough techniques",
    chapters: 8,
    likes: 892,
    author: "EndgameWizard",
    category: "Endgame",
    difficulty: "Intermediate",
    studyUrl: "/study/king-pawn-endgames",
  },
  {
    id: "tactical-patterns",
    name: "Essential Tactical Patterns",
    description: "Master pins, forks, skewers, discovered attacks, and deflection",
    chapters: 15,
    likes: 2156,
    author: "TacticsExpert",
    category: "Tactics",
    difficulty: "Intermediate",
    studyUrl: "/study/tactical-patterns",
  },
  {
    id: "middlegame-strategy",
    name: "Middlegame Planning",
    description: "Learn pawn structures, piece coordination, and strategic planning",
    chapters: 10,
    likes: 743,
    author: "StrategicMaster",
    category: "Middlegame",
    difficulty: "Advanced",
    studyUrl: "/study/middlegame-strategy",
  },
]

export function ChessStudies(): JSX.Element {
  const handleOpenStudy = (study: ChessStudy): void => {
    console.log(`Opening study: ${study.name}`)
  }

  const getCategoryClass = (category: StudyCategory): string => {
    switch (category) {
      case "Opening":
        return "category-opening"
      case "Endgame":
        return "category-endgame"
      case "Middlegame":
        return "category-middlegame"
      case "Tactics":
        return "category-tactics"
      default:
        return "category-opening"
    }
  }

  const getDifficultyClass = (difficulty: StudyDifficulty): string => {
    switch (difficulty) {
      case "Beginner":
        return "difficulty-beginner"
      case "Intermediate":
        return "difficulty-intermediate"
      case "Advanced":
        return "difficulty-advanced"
      default:
        return "difficulty-beginner"
    }
  }

  return (
    <div className="chess-studies">
      <div className="section-header">
        <h2 className="section-title">Chess Studies</h2>
      </div>

      <div className="studies-list">
        {featuredChessStudies.map((study) => (
          <div key={study.id} className="study-card">
            <div className="study-header">
              <div className="study-info">
                <div className="study-icon">📚</div>
                <div className="study-details">
                  <h3 className="study-title">{study.name}</h3>
                  <p className="study-author">by {study.author}</p>
                </div>
              </div>
            </div>

            <div className="study-content">
              <p className="study-description">{study.description}</p>

              <div className="study-badges">
                <span className={`category-badge ${getCategoryClass(study.category)}`}>{study.category}</span>
                <span className={`difficulty-badge ${getDifficultyClass(study.difficulty)}`}>{study.difficulty}</span>
              </div>

              <div className="study-footer">
                <div className="study-stats">
                  <span className="stat-item">
                    <svg className="book-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    {study.chapters} chapters
                  </span>
                  <span className="stat-item">
                    <svg className="users-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    {study.likes} likes
                  </span>
                </div>
                <Link href={study.studyUrl} className="study-button" onClick={() => handleOpenStudy(study)}>
                  <svg className="play-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                  Study
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="quick-actions">
        <div className="actions-card">
          <h3 className="actions-title">Chess Learning</h3>
          <div className="actions-list">
            <Link href="/studies" className="action-button">
              <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              Browse Chess Studies
            </Link>
            <Link href="/courses/basics" className="action-button">
              <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              Chess Basics Course
            </Link>
            <Link href="/practice/positions" className="action-button">
              <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              Practice Positions
            </Link>
          </div>
        </div>
      </div>

      <div className="progress-card">
        <h3 className="progress-title">Learning Progress</h3>
        <div className="progress-stats">
          <div className="progress-item">
            <span className="progress-label">Studies Completed</span>
            <span className="progress-value">8</span>
          </div>
          <div className="progress-item">
            <span className="progress-label">Chapters Studied</span>
            <span className="progress-value">67</span>
          </div>
          <div className="progress-item">
            <span className="progress-label">Study Time</span>
            <span className="progress-value">18h 45m</span>
          </div>
          <div className="progress-item">
            <span className="progress-label">Favorite Topic</span>
            <span className="progress-value">Tactics</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ChessStudies