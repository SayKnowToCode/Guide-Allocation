import React from 'react';
import TeamMembers from '../TeamMembers/TeamMembers';
import PhaseList from '../PhaseList/PhaseList';
import ProjectAbstract from '../Abstract/Abstract';
import "./StudentDashboard.css"
import Navbar from '../../utils/Navbar/Navbar'

const StudentDashboard = () => {

  const teamData = JSON.parse(localStorage.getItem('teamData'));
  const teamMembers = teamData.membersList

  return (
    <div className="relative z-10">

      <h1 >Student Dashboard</h1>
      <div className="flex items-center">
        <nav className='mr-8'>
          <Navbar />
        </nav>
      </div>
      <PhaseList />
      <TeamMembers teamMembers={teamMembers} />
      <PhaseList />
      <ProjectAbstract />

    </div>
  );
};

export default StudentDashboard;
