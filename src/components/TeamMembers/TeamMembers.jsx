// TeamMembers.js
import React from 'react';
import './TeamMembers.css'
// import './TeamMembers.css'; // Import the CSS file

const TeamMembers = ({ teamMembers }) => {
  return (
    <div className="team-members rounded-lg p-8 max-w-3xl">
      <h2 className="team-members-heading text-3xl text-center uppercase font-bold mb-12">Team Members</h2>
      <div className="flex justify-center team-members-list">
        {teamMembers.map((member) => (
          <div key={member.UID} className="team-member-item text-center mb-10 mx-12">
            <img
              src={member.image || Image} // Use member's image if provided, otherwise use default image
              alt={member.name}
              className="member-image w-32 h-32 rounded-full mx-auto mb-4"
            />
            <div className="member-info">
              <p className="member-name text-lg font-bold">{member.name}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
