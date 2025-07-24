'use client';
import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import './currentSessProgcard.css';

interface Player {
  name: string;
  section: string;
  rating: number;
  avatarUrl: string;
}

interface Match {
  playerA: Player;
  playerB: Player;
  startedAt: string;
  duration: string;
  status: 'Ongoing' | 'Paused' | 'Finished';
}

interface SessionOverview {
  "Sections Involved": string[];
  "Session Type": string;
  "Total Players": number;
  "Status": string;
  "Start Time": string;
  "Duration": string;
}

interface SessionData {
  sessionOverview: SessionOverview;
  matches: Match[];
}

const CurrentSessProgCard: React.FC = () => {
  const sessionList: SessionData[] = [
    {
      sessionOverview: {
        "Sections Involved": ["6A", "6B"],
        "Session Type": "Clubbed",
        "Total Players": 24,
        "Status": "Ongoing",
        "Start Time": "9:00 AM",
        "Duration": "45 mins"
      },
      matches: [
        {
          playerA: { name: "Riya Sharma", section: "6thA", rating: 1248, avatarUrl: "" },
          playerB: { name: "Rahul Kumar", section: "6thB", rating: 1186, avatarUrl: "" },
          startedAt: "9:12 AM",
          duration: "12 mins",
          status: "Ongoing"
        },
        {
          playerA: { name: "Arjun Patel", section: "6thA", rating: 1156, avatarUrl: "" },
          playerB: { name: "Ananya Joshi", section: "6thB", rating: 1167, avatarUrl: "" },
          startedAt: "9:14 AM",
          duration: "10 mins",
          status: "Paused"
        }
      ]
    },
    {
      sessionOverview: {
        "Sections Involved": ["7A", "7B"],
        "Session Type": "Solo",
        "Total Players": 16,
        "Status": "Completed",
        "Start Time": "10:00 AM",
        "Duration": "40 mins"
      },
      matches: [
        {
          playerA: { name: "Riya Sharma", section: "6thA", rating: 1248, avatarUrl: "" },
          playerB: { name: "Rahul Kumar", section: "6thB", rating: 1186, avatarUrl: "" },
          startedAt: "9:12 AM",
          duration: "12 mins",
          status: "Ongoing"
        },
        {
          playerA: { name: "Arjun Patel", section: "6thA", rating: 1156, avatarUrl: "" },
          playerB: { name: "Ananya Joshi", section: "6thB", rating: 1167, avatarUrl: "" },
          startedAt: "9:14 AM",
          duration: "10 mins",
          status: "Paused"
        },
        {
          playerA: { name: "Kabir Mehta", section: "6thA", rating: 1104, avatarUrl: "" },
          playerB: { name: "Ishika Rani", section: "6thB", rating: 1132, avatarUrl: "" },
          startedAt: "9:15 AM",
          duration: "11 mins",
          status: "Ongoing"
        },
        {
          playerA: { name: "Sneha Verma", section: "7thA", rating: 1215, avatarUrl: "" },
          playerB: { name: "Om Prakash", section: "7thB", rating: 1193, avatarUrl: "" },
          startedAt: "10:05 AM",
          duration: "9 mins",
          status: "Ongoing"
        },
        {
          playerA: { name: "Tanya Bhatt", section: "7thA", rating: 1180, avatarUrl: "" },
          playerB: { name: "Nikhil Rao", section: "7thB", rating: 1175, avatarUrl: "" },
          startedAt: "10:08 AM",
          duration: "8 mins",
          status: "Paused"
        },
        {
          playerA: { name: "Yash Thakur", section: "7thA", rating: 1204, avatarUrl: "" },
          playerB: { name: "Divya Shah", section: "7thB", rating: 1190, avatarUrl: "" },
          startedAt: "10:10 AM",
          duration: "10 mins",
          status: "Finished"
        },
        {
          playerA: { name: "Harshit Sinha", section: "8thA", rating: 1250, avatarUrl: "" },
          playerB: { name: "Sana Sheikh", section: "8thC", rating: 1234, avatarUrl: "" },
          startedAt: "11:02 AM",
          duration: "6 mins",
          status: "Paused"
        },
        {
          playerA: { name: "Neha Das", section: "8thA", rating: 1223, avatarUrl: "" },
          playerB: { name: "Zaid Ali", section: "8thC", rating: 1201, avatarUrl: "" },
          startedAt: "11:05 AM",
          duration: "9 mins",
          status: "Finished"
        },
        {
          playerA: { name: "Rudra Sen", section: "8thA", rating: 1277, avatarUrl: "" },
          playerB: { name: "Aarushi Jain", section: "8thC", rating: 1268, avatarUrl: "" },
          startedAt: "11:10 AM",
          duration: "7 mins",
          status: "Ongoing"
        }
      ]
    },
    {
      sessionOverview: {
        "Sections Involved": ["8A", "8C"],
        "Session Type": "Clubbed",
        "Total Players": 20,
        "Status": "Upcoming",
        "Start Time": "11:00 AM",
        "Duration": "50 mins"
      },
      matches: []
    }
  ];

  const [toggleStates, setToggleStates] = useState<boolean[]>(
    Array(sessionList.length).fill(false)
  );
  const [matchesStates,setMatchesStates]=useState<boolean[]>(
    Array(sessionList.length).fill(false));

  const handleToggleChange = (index: number) => {
    setToggleStates((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };
  const handleLiveMatchesChange = (index: number) => {
    setMatchesStates((prev) => {
      const updated = [...prev];
      if(updated[index]===false){
      updated[index] = !updated[index];
      }
      return updated;
    });
  };
  const handleFinishedMatchesChange = (index: number) => {
    setMatchesStates((prev) => {
      const updated = [...prev];
       if(updated[index]===true){
      updated[index] = !updated[index];
      }
      return updated;
    });
  };

  return (
    <div id="center-card">
        <div id="center-card-header">
         <Trophy id='trophy-icon'/>
         <h2 id="center-card-heading">Ongoing Matches</h2>
        </div>
      <div className="sessionCard">
        <h3 id="sessionCard-header">Current Session Progress</h3>
        {sessionList.map((sessionData, index) => (
          <div key={index}>
            <div id="sessions">
              <div className="sessionOverview">
                {Object.entries(sessionData.sessionOverview).map(([key, value]) => (
                  <div className="sessionOverview-cards" key={key}>
                    <div className="sessionOverview-header">{key}</div>
                    <div className="sessionOverview-footer">
                      {Array.isArray(value) ? value.join(" + ") : value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="accordion-card">
                <div className="accordion-header">
                  <div className="status-icon">▶</div>
                  <div className="session-info">
                    <div className="session-title">
                      {sessionData.sessionOverview["Status"]} :{" "}
                      {sessionData.sessionOverview["Sections Involved"].join(" + ")}
                    </div>
                    <div className="session-details">
                      <span>👥 {sessionData.sessionOverview["Total Players"]}</span>
                      <span>🕒 {sessionData.sessionOverview["Start Time"]}</span>
                      <span className="badge">{sessionData.sessionOverview["Status"]}</span>
                    </div>
                  </div>
                  <div className="accordion-toggle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                      onClick={() => handleToggleChange(index)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>

                {toggleStates[index] && (
                  <div>
                    <div className='Toggle-card-header-buttons'>
                        <button className={matchesStates[index]?"toggle-card-choosen":"toggle-card-unchoosen"} onClick={()=>{handleLiveMatchesChange(index)}}>Live Matches</button>
                        <button className={!matchesStates[index] ?"toggle-card-choosen":"toggle-card-unchoosen"}onClick={()=>{handleFinishedMatchesChange(index)}}>Finised Matches</button>
                    </div>
                    {matchesStates[index]&&<>
                    <div className="Toggle-card-header">
                      <div>Player A</div>
                      <div>Player B</div>
                      <div>Match started At</div>
                      <div>Duration</div>
                      <div>Status</div>
                    </div>
                    <div className="Toggle-card-body">
                      {sessionData.matches.filter((match)=>match.status!=='Finished').map((match, i) => (
                        <div className="Toggle-card-expansion" key={i}>
                          <div>
                            <div className="player-name">
                              {match.playerA.name} ({match.playerA.section})
                            </div>
                            <div className="player-rating">♟ {match.playerA.rating}</div>
                          </div>
                          <div>
                            <div className="player-name">
                              {match.playerB.name} ({match.playerB.section})
                            </div>
                            <div className="player-rating">♟ {match.playerB.rating}</div>
                          </div>
                          <div>{match.startedAt}</div>
                          <div>{match.duration}</div>
                          <div>
                            <span
                              className={`status-badge ${
                                match.status === 'Ongoing'
                                  ? 'status-Ongoing'
                                  : match.status === 'Paused'
                                  ? 'status-paused'
                                  : 'status-finished'
                              }`}
                            >
                              {match.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    </>
                }
                {(!matchesStates[index])&&<>
                    <div className="Toggle-card-header">
                      <div>Winner</div>
                      <div>Opponent</div>
                      <div>Result Time</div>
                      <div>Rating Chnage</div>  
                    </div>
                    <div>
                    {sessionData.matches.filter((match)=>{return match.status=="Finished"}).map((match,index)=>{
                        return (<div className="Toggle-card-expansion" key={index}>
                            <div>
                            <div className="player-name">
                              {match.playerA.name} ({match.playerA.section})
                            </div>
                            <div className="player-rating">♟ {match.playerA.rating}</div>
                          </div>
                          <div>
                            <div className="player-name">
                              {match.playerB.name} ({match.playerB.section})
                            </div>
                            <div className="player-rating">♟ {match.playerB.rating}</div>
                          </div>
                          <div>Result Time</div>
                          <div>Rating Change</div>
                        </div>
                        )
                        })}
                    </div>
                </>

                }
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentSessProgCard;
