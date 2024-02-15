// TeamMembers.js
import React from 'react';
import '../Members.css'; // Import the CSS file

const TeamMembers = ({ teamMembers }) => {
  return (
    <div className="team-members">
      <h2 className="team-members-heading">Team Members</h2>
      <ul className="team-members-list">
        {teamMembers.map((member) => (
          <li key={member.id} className="team-member-item">
            {member.name} {member.isLeader && <span className="leader-tag">(Leader)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;
