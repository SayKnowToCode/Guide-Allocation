import React, { useState } from 'react';
import TeamMembers from '../TeamMembers/TeamMembers';
import PhaseList from '../PhaseList/PhaseList';
import ProjectAbstract from '../Abstract/Abstract';
import "./StudentDashboard.css"
import Navbar from '../../utils/Navbar/Navbar'

const App = () => {
  // const [teamMembers, setTeamMembers] = useState([
  //   { id: 1, name: 'Member 1' },
  //   { id: 2, name: 'Member 2' },
  //   { id: 3, name: 'Team Leader', isLeader: true },
  // ]);

  
  const teamData = JSON.parse(localStorage.getItem('teamData'));
  const teamMembers = teamData.membersList

  return (
    <div className="app relative z-10">
      {/* <div className="flex-grow">
      <h1 className="z-10 relative text-3xl ml-8 py-3 text-blue">Student Dashboard</h1>
      </div> */}
      <h1 className="title z-10 relative">Student Dashboard</h1>
      <div className="flex items-center">
      <nav className='mr-8'>
        <Navbar />
      </nav>
      </div>
      <PhaseList />
      <TeamMembers teamMembers={teamMembers} />
      <PhaseList/>
      <ProjectAbstract/>
      
      {/* <AbstractForm
        isLeader={teamMembers.find((member) => member.isLeader)}
        onPostAbstract={handlePostAbstract}
        onEditAbstract={handleEditAbstract}
      />
      <PreferenceList
        isLeader={teamMembers.find((member) => member.isLeader)}
        onSelectPreference={handleSetProfessorsPreference}
      />
      <EvaluationResults
        evaluationResults={evaluationResults}
      />

      <EvaluationForm /> */}
      
    </div>
  );
};

export default App;