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
      setTeamData(data);
      localStorage.setItem('teamData', JSON.stringify(data))
    })

    socket.on(`EvaluationFor${teamData.teamName}`, (data) => {
      console.log(data);
      setTeamData(data);
      localStorage.setItem('teamData', JSON.stringify(data))
    })
  }, [socket, teamData.teamName])

  useEffect(() => {
    setTeamData(JSON.parse(localStorage.getItem('teamData')))
  }, [])

  return (
    <div className="relative student-dash-main">

      <h1 className='title-studash'>Student Dashboard</h1>
      <div className="flex items-center">
        <nav className='mr-8'>
          <Navbar />
        </nav>
      </div>
      <PhaseList />
      <TeamMembers teamMembers={teamMembers} />
      <PhaseList />




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

      <div className='my-5'>
        <p>Phase 1</p>
        <p>Marks by Guide : {teamData.phase1.marksByGuide && <span>{teamData.phase1.marksByGuide}</span>}</p>
        <p>Marks by External : {teamData.phase1.marksByExternal && <span>{teamData.phase1.marksByExternal}</span>}</p>
      </div>

      <div className='my-5'>
        <p>Phase 2</p>
        <p>Marks by Guide : {teamData.phase2 ? <span>{teamData.phase2.marksByGuide}</span> : 'Not Graded'}</p>
        <p>Marks by External : {teamData.phase2 ? <span>{teamData.phase2.marksByExternal}</span> : 'Not Graded'}</p>
      </div>

      <div className='my-5'>
        <p>Phase 3</p>
        <p>Marks by Guide : {teamData.phase3 ? <span>{teamData.phase3.marksByGuide}</span> : 'Not graded'}</p>
        <p>Marks by External : {teamData.phase3 ? <span>{teamData.phase3.marksByExternal}</span> : 'Not graded'}</p>
      </div>


    </div>
  );
};

export default StudentDashboard;
