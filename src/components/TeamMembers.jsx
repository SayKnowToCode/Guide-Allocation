// TeamMembers.js

import React from 'react';

const TeamMembers = ({ teamMembers }) => {
  return (
    <div className="team-members">
      <h2>Team Members</h2>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            {member.name} {member.isLeader && '(Leader)'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;
