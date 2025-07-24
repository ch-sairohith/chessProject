"use client"

import Link from "next/link"
import "./chess-practice-modes.css"

type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced"

interface ChessPracticeMode {
  id: string
  title: string
  description: string
  difficulty: DifficultyLevel
  progress: number
  maxProgress: number
  estimatedTime: string
  rating?: number
  practiceUrl: string
}

const chessPracticeModes: ChessPracticeMode[] = [
  {
    id: "chess-tactics",
    title: "Chess Tactics",
    description: "Solve tactical puzzles: pins, forks, skewers, and discovered attacks",
    difficulty: "Intermediate",
    progress: 45,
    maxProgress: 100,
    estimatedTime: "10-15 min",
    rating: 1680,
    practiceUrl: "/practice/tactics",
  },
  {
    id: "endgame-training",
    title: "Endgame Training",
    description: "Master essential endgames: King & Queen vs King, Rook endgames, pawn promotion",
    difficulty: "Advanced",
    progress: 18,
    maxProgress: 30,
    estimatedTime: "15-20 min",
    practiceUrl: "/practice/endgames",
  },
  {
    id: "opening-repertoire",
    title: "Opening Repertoire",
    description: "Build your opening knowledge: Italian Game, Queen's Gambit, Sicilian Defense",
    difficulty: "Beginner",
    progress: 42,
    maxProgress: 60,
    estimatedTime: "20-25 min",
    practiceUrl: "/practice/openings",
  },
  {
    id: "blitz-games",
    title: "Blitz Games",
    description: "Play fast-paced 5+0 and 3+2 games to improve time management",
    difficulty: "Intermediate",
    progress: 27,
    maxProgress: 40,
    estimatedTime: "5-8 min per game",
    rating: 1420,
    practiceUrl: "/practice/blitz",
  },
  {
    id: "checkmate-patterns",
    title: "Checkmate Patterns",
    description: "Learn essential mate patterns: back rank mate, smothered mate, ladder mate",
    difficulty: "Beginner",
    progress: 8,
    maxProgress: 25,
    estimatedTime: "10-15 min",
    practiceUrl: "/practice/checkmates",
  },
  {
    id: "positional-play",
    title: "Positional Understanding",
    description: "Study pawn structures, piece activity, and strategic planning concepts",
    difficulty: "Advanced",
    progress: 15,
    maxProgress: 35,
    estimatedTime: "20-30 min",
    practiceUrl: "/practice/positional",
  },
]

export function ChessPracticeModes(): JSX.Element {
  const handleStartPractice = (mode: ChessPracticeMode): void => {
    console.log(`Starting practice mode: ${mode.title}`)
  }

  const getDifficultyClass = (difficulty: DifficultyLevel): string => {
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
    <div className="practice-modes">
      <div className="section-header">
        <h2 className="section-title">Chess Practice Modes</h2>
      </div>

      <div className="modes-grid">
        {chessPracticeModes.map((mode) => {
          const progressPercentage: number = (mode.progress / mode.maxProgress) * 100

          return (
            <div key={mode.id} className="mode-card">
              <div className="card-header">
                <div className="mode-info">
                  <div className="mode-icon">🧩</div>
                  <div className="mode-details">
                    <h3 className="mode-title">{mode.title}</h3>
                    <div className="mode-badges">
                      <span className={`difficulty-badge ${getDifficultyClass(mode.difficulty)}`}>
                        {mode.difficulty}
                      </span>
                      {mode.rating && <span className="rating-badge">{mode.rating} rating</span>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <p className="mode-description">{mode.description}</p>

                <div className="progress-section">
                  <div className="progress-header">
                    <span className="progress-label">Progress</span>
                    <span className="progress-value">
                      {mode.progress}/{mode.maxProgress}
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
                  </div>
                </div>

                <div className="card-footer">
                  <span className="time-estimate">{mode.estimatedTime}</span>
                  <Link href={mode.practiceUrl} className="practice-button" onClick={() => handleStartPractice(mode)}>
                    Start Practice
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default ChessPracticeModes