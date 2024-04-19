import React, { useEffect, useState } from 'react';
import TeamMembers from '../TeamMembers/TeamMembers';
import PhaseList from '../PhaseList/PhaseList';
import ProjectAbstract from '../Abstract/Abstract';
import "./StudentDashboard.css"
import Navbar from '../../utils/Navbar/Navbar'

const StudentDashboard = ({ socket }) => {

  const [teamData, setTeamData] = useState(JSON.parse(localStorage.getItem('teamData')));
  const teamMembers = teamData.membersList

  useEffect(() => {
    socket.on(`AcceptFor${teamData.teamName}`, (data) => {
      setTeamData(data);
      localStorage.setItem('teamData', JSON.stringify(data))
    })

    socket.on(`expertGuideFor${teamData.teamName}`, (data) => {
      console.log("Here");
      console.log(data);
      setTeamData(data);
      localStorage.setItem('teamData', JSON.stringify(data))
    })
  }, [socket, teamData.teamName])

  useEffect(() => {
    setTeamData(JSON.parse(localStorage.getItem('teamData')))
  }, [])

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



      <div className='mt-5' >{teamData.guides.map((guide) => {
        return (
          <div key={guide} className='guide'>
            <p>{guide}</p>
          </div>
        )
      })}
      </div>

      <div className='mt-5'>{teamData.acceptedGuide !== '' ? <p> {teamData.acceptedGuide} has accepted your request</p> : 'Empty'}</div>
      <div className='mt-5'>{teamData.expertAllocated ? <p> {teamData.expertAllocated} is your expert</p> : 'Empty'}</div>



    </div>
  );
};

export default StudentDashboard;
