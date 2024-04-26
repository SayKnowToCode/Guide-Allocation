import React, { useEffect, useState } from 'react';
import TeamMembers from '../TeamMembers/TeamMembers';
import { Link } from 'react-router-dom';
import "./StudentDashboard.css"
import PDFUpload from '../pdfUpload';
import NotificationBox from '../ReqDivs/requests';

const StudentDashboard = ({ socket }) => {

  const [teamData, setTeamData] = useState(JSON.parse(localStorage.getItem('teamData')));
  const teamMembers = teamData.membersList
  const teamName = teamData.teamName

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
    <div className="student-dash-main">
      <div className='main-college1'>
        <div className='college1'>
          <div className='college-logo'></div>
          <div className='college-details'>
            <p className='college-in'>Bhartiya Vidhya Bhavan's</p>
            <p className='college-name'>Sardar Patel Institute of Technology</p>
            <p className='college-in'>Autonomous institute Affiliated to Mumbai University</p>
          </div>
          <header className="head-area2">
            <div className="header-container2">
              {/* <div class="logo-nav1">
                        <h1><span>Faculty</span>Dashboard</h1>
                    </div> */}
              <div className="menu4">
                <div className="menu5">
                  <div className="active">
                    <p><Link>Home</Link></p>
                  </div>
                  <div className="">
                    <p><Link to='/submission'>submissions</Link></p>
                  </div>
                  <div className="">
                    <p><Link to='/preference'>Preference List</Link></p>
                  </div>
                  <div className="">
                    <p><Link>LogOut</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>

      </div>
      <TeamMembers teamMembers={teamMembers} teamName={teamName} />
      <div className='guide-expert'>
        <div className='mt-5'>{teamData.acceptedGuide !== '' ? <p> {teamData.acceptedGuide} has accepted your request</p> : 'Empty'}</div>
        <div className='mt-5'>{teamData.expertAllocated ? <p> {teamData.expertAllocated} is your expert</p> : 'Empty'}</div>
      </div>
      <div className='scrollable-div mt-5' >{teamData.guides.map((guide) => {
        return (
          <div key={guide} className='guide'>
            <p>{guide}</p>
          </div>
        )
      })}
      </div>

      {/* <div className='mt-5'>{teamData.acceptedGuide !== '' ? <p> {teamData.acceptedGuide} has accepted your request</p> : 'Empty'}</div>
      <div className='mt-5'>{teamData.expertAllocated ? <p> {teamData.expertAllocated} is your expert</p> : 'Empty'}</div> */}

      {/* <div className='my-5'>
        <p>Phase 1</p>
        <p>Marks by Guide : {teamData.phase1 ? <span>{teamData.phase1.marksByGuide}</span> : 'Not Graded'}</p>
        <p>Marks by External : {teamData.phase1 ? <span>{teamData.phase1.marksByExternal}</span> : 'Not Graded'}</p>
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
      </div> */}

      {/* <div>
        <PDFUpload />
      </div> */}
      <div className='relative'><NotificationBox /></div>
    </div>
  );
};

export default StudentDashboard;
