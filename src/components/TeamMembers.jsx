// TeamMembers.js
import React from 'react';
import Image from '../Image.jpg'
import '../TeamMembers.css'; // Import the CSS file

const TeamMembers = ({ teamMembers }) => {
  return (
    <div className="team-members">
      <h2 className="team-members-heading">Team Members</h2>
      <div className="team-members-list">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member-item">
            <img
              src={member.image || Image} // Use member's image if provided, otherwise use default image
              alt={member.name}
              className="member-image"
            />
            <div className="member-info">
              <p className="member-name">{member.name}</p>
              <p className="member-designation">{member.designation}</p>
            </div>
            {member.isLeader}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
