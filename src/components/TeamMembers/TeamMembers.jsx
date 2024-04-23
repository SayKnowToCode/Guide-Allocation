// TeamMembers.js
import React from 'react';
import './TeamMembers.css'
// import './TeamMembers.css'; // Import the CSS file

const TeamMembers = ({ teamMembers, teamName }) => {
  return (
    <div className="team-members">
      <h2 className="team-members-heading">Team Members</h2>
      <div className="team-members-list">
        {teamMembers.map((member) => (
          <div key={member.name} className="member-info">
            <p className="member-name">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
