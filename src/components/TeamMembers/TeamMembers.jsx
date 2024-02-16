// TeamMembers.js
import React from 'react';
import Image from '../../1.jpg'
// import './TeamMembers.css'; // Import the CSS file

const TeamMembers = ({ teamMembers }) => {
  return (
    <div className="team-members bg-gray-100 rounded-lg shadow-md p-8 max-w-3xl mx-96 mt-56">
      <h2 className="team-members-heading text-3xl text-center uppercase font-bold mb-6">Team Members</h2>
      <div className="team-members-list flex flex-wrap justify-center">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member-item text-center mb-10">
            <img
              src={member.image || Image} // Use member's image if provided, otherwise use default image
              alt={member.name}
              className="member-image w-32 h-32 rounded-full mx-auto mb-4"
            />
            <div className="member-info">
              <p className="member-name text-lg font-bold">{member.name}</p>
              <p className="member-designation text-sm text-gray-600">{member.designation}</p>
            </div>
            {member.isLeader}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
