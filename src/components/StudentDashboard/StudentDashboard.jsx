import React, { useEffect, useState } from 'react';
import TeamMembers from '../TeamMembers/TeamMembers';
import { Link } from 'react-router-dom';
import "./StudentDashboard.css"
import WaterDropGrid from '../Landing/landing';
import PDFUpload from '../PDFUpload/pdfUpload';
import NotificationBox from '../ReqDivs/notification';
import Events from '../ReqDivs/Events';
import RevealBento from './UI-Student-Dash/Block';

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
    <div className="student-dash-main overflow-x-hidden">
      {/* <svg className="absolute inset-0 z-0 top-20 overflow-x-hidden" viewBox="0 0 500 200">
        <path d="M 0 150 C 150 50 300 200 500 120 L 500 200 L 0 200" fill="#176B87"></path> */}
        {/* <path d="M 0 150 C 150 50 330 230 500 150 L 500 200 L 0 200" fill="#64CCC5" opacity="0.8"></path> */}
        {/* <path d="M 0 150 C 215 50 250 200 500 100 L 500 200 L 0 200" fill="#DAFFFB" opacity="0.5"></path>x */}

      {/* </svg> */}
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
          {/* <div className='w-fit'><TeamMembers teamMembers={teamMembers} teamName={teamName} /></div>
          <div className='guide-expert'>
            <div className=''>{teamData.acceptedGuide !== '' ? <p className='mt-5 font-sans font-semibold text-lg uppercase tracking-wider'><span className='c1'>Guide: </span>{teamData.acceptedGuide}</p> : 'Empty'}</div>
            <div className=''>{teamData.expertAllocated ? <p className='mt-5 font-sans font-semibold text-lg uppercase tracking-wider'><span className='c1'>Expert: </span>{teamData.expertAllocated}</p> : 'Empty'}</div>
          </div> */}
        {/* <div className='scrollable-div mt-5' >{teamData.guides.map((guide) => {
        return (
          <div key={guide} className='guide'>
            <p>{guide}</p>
          </div>
        )
      })}
      </div> */}

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
        {/* <div className='relative w-fit float-right'><NotificationBox /></div>
        <div className='relative w-fit float-right'><Events/></div> */}

        {/* <div className='absolute inset-0 ml-96 mt-14 overflow-x-hidden'><WaterDropGrid/></div> */}
        <RevealBento teamMembers={teamMembers} teamName={teamName} acceptedGuide={teamData.acceptedGuide} expertAllocated={teamData.expertAllocated}/>
      </div>
  );
};

export default StudentDashboard;
