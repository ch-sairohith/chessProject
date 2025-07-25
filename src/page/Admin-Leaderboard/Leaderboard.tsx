'use client'
import React, { useState, useEffect, useRef } from 'react';
import {
  Trophy,
  Search,
  Filter,
  ChevronDown,
  X,
  Medal,
  Crown,
  Award,
  Users,
  Target,
  TrendingUp
} from 'lucide-react';
import './AdminLeaderboard.css';
import Link from 'next/link';

interface Student {
  id: string;
  name: string;
  lichessUsername: string;
  avatar: string;
  rating: number;
  grade: string;
  section: string;
}

// Define a new interface for the structure of mockStudentsByGradeSection
interface StudentsByGradeSection {
  [key: string]: Student[]; // This is the index signature
}

interface LeaderboardStudent extends Student {
  wins: number;
  losses: number;
  draws: number;
  gamesPlayed: number;
  winRate: number;
  recentRatingChange: number;
}

interface FilterState {
  selectedGrades: Set<number>;
  selectedSections: { [grade: number]: Set<string> };
}

interface LeaderboardProps {
  onBackToDashboard?: () => void;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ }) => {
  const mockStudentsByGradeSection: StudentsByGradeSection = {
    '6A': [
      {
        id: 'STU001',
        name: 'Riya Sharma',
        lichessUsername: 'riya_chess',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1248,
        grade: '6th',
        section: 'A'
      },
      {
        id: 'STU002',
        name: 'Arjun Patel',
        lichessUsername: 'arjun_knight',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1156,
        grade: '6th',
        section: 'A'
      },
      {
        id: 'STU003',
        name: 'Sneha Gupta',
        lichessUsername: 'sneha_queen',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1203,
        grade: '6th',
        section: 'A'
      },
      {
        id: 'STU004',
        name: 'Karan Singh',
        lichessUsername: 'karan_rook',
        avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1189,
        grade: '6th',
        section: 'A'
      }
    ],
    '6B': [
      {
        id: 'STU005',
        name: 'Rahul Kumar',
        lichessUsername: 'rahul_king',
        avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1186,
        grade: '6th',
        section: 'B'
      },
      {
        id: 'STU006',
        name: 'Ananya Joshi',
        lichessUsername: 'ananya_bishop',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1167,
        grade: '6th',
        section: 'B'
      }
    ],
    '6C': [
      {
        id: 'STU007',
        name: 'Vikram Reddy',
        lichessUsername: 'vikram_master',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1234,
        grade: '6th',
        section: 'C'
      },
      {
        id: 'STU008',
        name: 'Meera Shah',
        lichessUsername: 'meera_castle',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1198,
        grade: '6th',
        section: 'C'
      }
    ],
    '7A': [
      {
        id: 'STU009',
        name: 'Deepak Singh',
        lichessUsername: 'deepak_master',
        avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1333,
        grade: '7th',
        section: 'A'
      },
      {
        id: 'STU010',
        name: 'Kavya Nair',
        lichessUsername: 'kavya_tactical',
        avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1289,
        grade: '7th',
        section: 'A'
      }
    ],
    '7B': [
      {
        id: 'STU011',
        name: 'Varun Patel',
        lichessUsername: 'varun_chess',
        avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1300,
        grade: '7th',
        section: 'B'
      },
      {
        id: 'STU012',
        name: 'Ishita Agarwal',
        lichessUsername: 'ishita_strategic',
        avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1276,
        grade: '7th',
        section: 'B'
      }
    ],
    '8A': [
      {
        id: 'STU013',
        name: 'Priya Agarwal',
        lichessUsername: 'priya_queen',
        avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1412,
        grade: '8th',
        section: 'A'
      },
      {
        id: 'STU014',
        name: 'Rohan Mehta',
        lichessUsername: 'rohan_grandmaster',
        avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
        rating: 1387,
        grade: '8th',
        section: 'A'
      }
    ]
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filterState, setFilterState] = useState<FilterState>({
    selectedGrades: new Set(),
    selectedSections: {}
  });
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardStudent[]>([]);
  const [filteredData, setFilteredData] = useState<LeaderboardStudent[]>([]);

  const filterRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const grades = [6, 7, 8, 9, 10];
  const sections = ['A', 'B', 'C', 'D'];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Generate mock leaderboard data
  useEffect(() => {
    const allStudents: LeaderboardStudent[] = [];

    Object.entries(mockStudentsByGradeSection).forEach(([key, students]) => {
      students.forEach(student => {
        const gamesPlayed = Math.floor(Math.random() * 25) + 5;
        const wins = Math.floor(Math.random() * gamesPlayed * 0.7);
        const losses = Math.floor(Math.random() * (gamesPlayed - wins));
        const draws = gamesPlayed - wins - losses;
        const winRate = gamesPlayed > 0 ? (wins / gamesPlayed) * 100 : 0;
        const recentRatingChange = Math.floor(Math.random() * 60) - 30; // -30 to +30

        allStudents.push({
          ...student,
          wins,
          losses,
          draws,
          gamesPlayed,
          winRate,
          recentRatingChange
        });
      });
    });

    // Sort by rating (highest first)
    allStudents.sort((a, b) => b.rating - a.rating);
    setLeaderboardData(allStudents);
    setFilteredData(allStudents);
  }, []);

  // Handle search
  useEffect(() => {
    let filtered = leaderboardData;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.lichessUsername.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        `${student.grade}${student.section}`.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply grade/section filters
    if (filterState.selectedGrades.size > 0) {
      filtered = filtered.filter(student => {
        const gradeNum = parseInt(student.grade);
        if (!filterState.selectedGrades.has(gradeNum)) return false;

        // Check if specific sections are selected for this grade
        const sectionsForGrade = filterState.selectedSections[gradeNum];
        if (sectionsForGrade && sectionsForGrade.size > 0) {
          return sectionsForGrade.has(student.section);
        }

        return true;
      });
    }

    setFilteredData(filtered);
  }, [searchQuery, filterState, leaderboardData]);

  const selectGradeSection = (grade: number, section: string) => {
    const newSelectedGrades = new Set(filterState.selectedGrades);
    const newSelectedSections = { ...filterState.selectedSections };

    // Add grade
    newSelectedGrades.add(grade);

    // Add section
    if (!newSelectedSections[grade]) {
      newSelectedSections[grade] = new Set();
    }
    newSelectedSections[grade].add(section);

    setFilterState({
      selectedGrades: newSelectedGrades,
      selectedSections: newSelectedSections
    });
  };

  const selectEntireGrade = (grade: number) => {
    const newSelectedGrades = new Set(filterState.selectedGrades);
    const newSelectedSections = { ...filterState.selectedSections };

    newSelectedGrades.add(grade);
    // Don't add specific sections - this means entire grade is selected

    setFilterState({
      selectedGrades: newSelectedGrades,
      selectedSections: newSelectedSections
    });
  };

  const clearAllFilters = () => {
    setFilterState({
      selectedGrades: new Set(),
      selectedSections: {}
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    filterState.selectedGrades.forEach(grade => {
      const sectionsForGrade = filterState.selectedSections[grade];
      if (sectionsForGrade && sectionsForGrade.size > 0) {
        count += sectionsForGrade.size;
      } else {
        count += 1; // Entire grade selected
      }
    });
    return count;
  };

  const getFilterBadges = () => {
    const badges: string[] = [];

    filterState.selectedGrades.forEach(grade => {
      const sectionsForGrade = filterState.selectedSections[grade];
      if (sectionsForGrade && sectionsForGrade.size > 0) {
        sectionsForGrade.forEach(section => {
          badges.push(`${grade}${section}`);
        });
      } else {
        badges.push(`Grade ${grade}`);
      }
    });

    return badges;
  };

  const removeFilterBadge = (badge: string) => {
    const newSelectedGrades = new Set(filterState.selectedGrades);
    const newSelectedSections = { ...filterState.selectedSections };

    if (badge.startsWith('Grade ')) {
      const grade = parseInt(badge.replace('Grade ', ''));
      newSelectedGrades.delete(grade);
      delete newSelectedSections[grade];
    } else {
      const grade = parseInt(badge.charAt(0));
      const section = badge.charAt(1);

      if (newSelectedSections[grade]) {
        newSelectedSections[grade].delete(section);
        if (newSelectedSections[grade].size === 0) {
          delete newSelectedSections[grade];
          newSelectedGrades.delete(grade);
        }
      }
    }

    setFilterState({
      selectedGrades: newSelectedGrades,
      selectedSections: newSelectedSections
    });
  };

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="rank-icon rank-icon-gold" />;
      case 1:
        return <Medal className="rank-icon rank-icon-silver" />;
      case 2:
        return <Award className="rank-icon rank-icon-bronze" />;
      default:
        return <span className="rank-icon-default">#{index + 1}</span>;
    }
  };

  const getRankBadgeClass = (index: number) => {
    switch (index) {
      case 0:
        return 'rank-badge-gold';
      case 1:
        return 'rank-badge-silver';
      case 2:
        return 'rank-badge-bronze';
      default:
        return 'rank-badge-default';
    }
  };

  const handleStudentClick = (student: LeaderboardStudent) => {
    console.log('Navigate to student profile:', student);
    alert(`Opening profile for ${student.name} (${student.id})`);
  };

  const getSearchSuggestions = () => {
    if (!searchQuery.trim()) return [];

    return leaderboardData
      .filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.lichessUsername.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5);
  };

  return (
    <div className="leaderboard-container">
         <div className="fixed-header">
        <div className="header-container">
          <Link href="/chess-hub" className="back-link">
            <svg className="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
      </div>
      <div className="leaderboard-content-wrapper">
        {/* Header */}
        <div className="leaderboard-header-section">
          <div className="leaderboard-header-left">
            {/* Removed the Back button */}
            <div>
              <h1 className="leaderboard-title-group">
                <Trophy className="leaderboard-trophy-icon" />
                School Leaderboard
              </h1>
              <p className="leaderboard-subtitle">Track top players across all grades and sections</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="search-bar-container" ref={searchRef}>
            <div className="search-input-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search by Name, Section, or Lichess Username"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearch(true)}
              />
            </div>

            {/* Search Suggestions */}
            {showSearch && searchQuery.trim() && getSearchSuggestions().length > 0 && (
              <div className="search-suggestions-dropdown">
                {getSearchSuggestions().map((student, index) => (
                  <div
                    key={student.id}
                    className="search-suggestion-item"
                    onClick={() => handleStudentClick(student)}
                  >
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="search-suggestion-avatar"
                    />
                    <div className="search-suggestion-info">
                      <div className="search-suggestion-name">{student.name}</div>
                      <div className="search-suggestion-details">
                        {student.grade}{student.section} • @{student.lichessUsername} • ♟ {student.rating}
                      </div>
                    </div>
                    <div className="search-suggestion-rank">#{index + 1}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar-container">
          <div className="filter-dropdown-wrapper" ref={filterRef}>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="filter-button"
            >
              <Filter className="filter-icon" />
              <span>Filter: {getActiveFiltersCount() > 0 ? `${getActiveFiltersCount()} Selected` : 'All Classes'}</span>
              <ChevronDown className={`filter-chevron ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Modern Filter Dropdown */}
            {showFilters && (
              <div className="filter-dropdown-content">
                <div className="filter-dropdown-header">
                  <h3 className="filter-dropdown-title">Filter by Class & Section</h3>
                  {getActiveFiltersCount() > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="clear-filters-button"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                <div className="filter-grades-sections">
                  {grades.map(grade => (
                    <div key={grade} className="filter-grade-group">
                      <button
                        onClick={() => selectEntireGrade(grade)}
                        className={`filter-grade-button ${
                          filterState.selectedGrades.has(grade) && !filterState.selectedSections[grade]
                            ? 'filter-grade-button-selected'
                            : ''
                        }`}
                      >
                        <span className="filter-grade-name">Grade {grade}</span>
                      </button>

                      <div className="filter-sections-grid">
                        {sections.map(section => {
                          const sectionKey = `${grade}${section}`;
                          // Type assertion here to tell TypeScript that sectionKey will be a valid key
                          const hasStudents = (mockStudentsByGradeSection as StudentsByGradeSection)[sectionKey]?.length > 0;
                          const isSelected = filterState.selectedSections[grade]?.has(section) || false;

                          return (
                            <button
                              key={section}
                              onClick={() => hasStudents && selectGradeSection(grade, section)}
                              disabled={!hasStudents}
                              className={`filter-section-button ${
                                isSelected
                                  ? 'filter-section-button-selected'
                                  : hasStudents
                                    ? ''
                                    : 'filter-section-button-disabled'
                              }`}
                            >
                              {section}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Active Filter Badges */}
          {getFilterBadges().length > 0 && (
            <div className="active-filters-badges">
              {getFilterBadges().map((badge, index) => (
                <span
                  key={index}
                  className="filter-badge"
                >
                  {badge}
                  <button
                    onClick={() => removeFilterBadge(badge)}
                    className="filter-badge-remove-button"
                  >
                    <X className="filter-badge-remove-icon" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="leaderboard-stats">
            <div className="leaderboard-stat-item">
              <Users className="leaderboard-stat-icon" />
              <span>{filteredData.length} students</span>
            </div>
            <div className="leaderboard-stat-item">
              <Target className="leaderboard-stat-icon" />
              <span>Avg Rating: {Math.round(filteredData.reduce((sum, s) => sum + s.rating, 0) / filteredData.length) || 0}</span>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="leaderboard-table-container">
          <div className="leaderboard-table-header">
            <h2 className="leaderboard-table-title">Rankings</h2>
            <p className="leaderboard-table-subtitle">Sorted by chess rating (highest to lowest)</p>
          </div>

          {filteredData.length > 0 ? (
            <div className="leaderboard-table-wrapper">
              <table className="leaderboard-table">
                <thead className="leaderboard-table-head">
                  <tr>
                    <th className="leaderboard-table-th">Rank</th>
                    <th className="leaderboard-table-th">Student Name</th>
                    <th className="leaderboard-table-th">Grade</th>
                    <th className="leaderboard-table-th">Lichess Username</th>
                    <th className="leaderboard-table-th">Chess Rating</th>
                    <th className="leaderboard-table-th">Record (W-L-D)</th>
                    <th className="leaderboard-table-th">Games Played</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((student, index) => (
                    <tr
                      key={student.id}
                      className={`leaderboard-table-row ${
                        index < 3 ? 'leaderboard-table-row-top3' : ''
                      }`}
                      onClick={() => handleStudentClick(student)}
                    >
                      <td className="leaderboard-table-td">
                        <div className="rank-display">
                          {getRankIcon(index)}
                          <span className={`rank-badge ${getRankBadgeClass(index)}`}>
                            #{index + 1}
                          </span>
                        </div>
                      </td>
                      <td className="leaderboard-table-td">
                        <div className="student-info-cell">
                          <img
                            src={student.avatar}
                            alt={student.name}
                            className="student-avatar"
                          />
                          <div>
                            <div className="student-name">{student.name}</div>
                            <div className="student-id">{student.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="leaderboard-table-td">
                        <span className="grade-section-badge">
                          {student.grade}{student.section}
                        </span>
                      </td>
                      <td className="leaderboard-table-td">
                        <span className="lichess-username">@{student.lichessUsername}</span>
                      </td>
                      <td className="leaderboard-table-td">
                        <div className="rating-info">
                          <span className="chess-rating">♟ {student.rating}</span>
                          {student.recentRatingChange !== 0 && (
                            <div className={`rating-change ${
                              student.recentRatingChange > 0 ? 'rating-change-positive' : 'rating-change-negative'
                            }`}>
                              <TrendingUp className={`rating-change-icon ${student.recentRatingChange < 0 ? 'icon-rotated' : ''}`} />
                              {student.recentRatingChange > 0 ? '+' : ''}{student.recentRatingChange}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="leaderboard-table-td">
                        <div className="record-info">
                          <span className="record-wins">{student.wins}W</span>
                          <span className="record-separator">-</span>
                          <span className="record-losses">{student.losses}L</span>
                          <span className="record-separator">-</span>
                          <span className="record-draws">{student.draws}D</span>
                          <div className="win-rate">{student.winRate.toFixed(1)}% win rate</div>
                        </div>
                      </td>
                      <td className="leaderboard-table-td">
                        <span className="games-played">{student.gamesPlayed}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="no-results-message">
              <div className="no-results-icon-wrapper">
                <Trophy className="no-results-icon" />
              </div>
              <h3 className="no-results-title">No Results Found</h3>
              <p className="no-results-text">
                {searchQuery.trim()
                  ? `No students found matching "${searchQuery}"`
                  : 'No students match the selected filters'
                }
              </p>
              {(searchQuery.trim() || getActiveFiltersCount() > 0) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    clearAllFilters();
                  }}
                  className="clear-all-filters-button"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>

        {/* Top 3 Highlight Cards (Mobile Friendly) */}
        {filteredData.length >= 3 && (
          <div className="top3-cards-grid">
            {filteredData.slice(0, 3).map((student, index) => (
              <div
                key={student.id}
                className={`top3-card ${
                  index === 0 ? 'top3-card-gold' :
                  index === 1 ? 'top3-card-silver' :
                  'top3-card-bronze'
                }`}
                onClick={() => handleStudentClick(student)}
              >
                <div className="top3-card-header">
                  {getRankIcon(index)}
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="top3-card-avatar"
                  />
                  <div className="top3-card-info">
                    <h3 className="top3-card-name">{student.name}</h3>
                    <p className="top3-card-grade-section">{student.grade}{student.section}</p>
                  </div>
                </div>
                <div className="top3-card-details">
                  <div className="top3-card-detail-row">
                    <span className="top3-card-label">Rating</span>
                    <span className="top3-card-value">♟ {student.rating}</span>
                  </div>
                  <div className="top3-card-detail-row">
                    <span className="top3-card-label">Win Rate</span>
                    <span className="top3-card-value top3-card-winrate">{student.winRate.toFixed(1)}%</span>
                  </div>
                  <div className="top3-card-detail-row">
                    <span className="top3-card-label">Games</span>
                    <span className="top3-card-value">{student.gamesPlayed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;