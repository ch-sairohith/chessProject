import React from 'react';
import './ProfileCard.css';

type ProfileCardProps = {
  id: string;
};

const ProfileCard = ({ id }: ProfileCardProps) => {
  const user = {
    id: id,
    name: "John Doe",
    class: "10th Grade",
    section: "A",
    rating: 1500,
    avatarUrl: "https://media.craiyon.com/2025-04-21/Bn4d8zVuSm6QJDLwVkGzyw.webp",
    CurrentRank: 15,
    LichessId: "john_doe_123",
    DateOfJoin: "2023-01-15",
  };

  return (
    <div className="ProfileCard">
      <div
        className="ProfileAvatar"
        style={{ backgroundImage: `url(${user.avatarUrl})` }}
      />
      <div className="ProfileDetailsGrid">
        <div className="detail">
          <span className="detail-label">Name</span>
          <span className="detail-value">{user.name}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Class</span>
          <span className="detail-value">
            {user.class} - Section {user.section}
          </span>
        </div>
        <div className="detail">
          <span className="detail-label">Joined</span>
          <span className="detail-value">{user.DateOfJoin}</span>
        </div>
        <div className="detail">
          <span className="detail-label">User ID</span>
          <span className="detail-value">{user.LichessId}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Current Rating</span>
          <span className="detail-value">{user.rating}</span>
        </div>
        <div className="detail">
          <span className="detail-label">Class Rank</span>
          <span className="detail-value">{user.CurrentRank}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
