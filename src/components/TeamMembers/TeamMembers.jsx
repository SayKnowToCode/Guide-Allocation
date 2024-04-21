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
          <div key={member.name} className="member-info">
            <p className="member-name text-lg font-bold">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
