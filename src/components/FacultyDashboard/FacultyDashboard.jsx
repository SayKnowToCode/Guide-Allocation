import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './FacultyDashboard.css';
import NotificationBox from '../ReqDivs/notification'
const FacultyDashboard = ({ socket }) => {

    const [facultyData, setFacultyData] = useState(JSON.parse(localStorage.getItem('facultyData')));
    const [filename, setFilename] = useState('');
    const [teamData, setTeamData] = useState([]);

    const fetchTeamDataForAllTeams = async () => {
        try {
            // Array to store all promises for fetching team data
            const promises = facultyData.teams.map(async (teamName) => {
                const response = await axios.get(`http://localhost:3500/getTeam`, {
                    params: {
                        teamName
                    }
                });
                return response.data;
            });
            // Wait for all promises to resolve
            const teamDataArray = await Promise.all(promises);
            const unwrappedTeamDataArray = teamDataArray.flat();
            setTeamData(unwrappedTeamDataArray);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        setFacultyData(JSON.parse(localStorage.getItem('facultyData')))
    }, [])

    useEffect(() => {
        fetchTeamDataForAllTeams();
    }, [facultyData])

    useEffect(() => {
        socket.on(`RequestFor${facultyData.name}`, (data) => {
            setFacultyData(data.guide);
            localStorage.setItem('facultyData', JSON.stringify(data))
            setTeamData([...teamData, data.team]);
        })

        socket.on(`expertGuideFor${facultyData.name}`, (data) => {
            setFacultyData(data);
            localStorage.setItem('facultyData', JSON.stringify(data))
        })

        socket.on(`fileUploadedFor${facultyData.name}`, (data) => {
            console.log(data.fileName);
            setFilename(data.fileName);
        })

        socket.on(`TeamAcceptedFor${facultyData.name}`, (data) => {
            console.log("Here");
            console.log(data);
            setFacultyData(data);
            localStorage.setItem('facultyData', JSON.stringify(data))
        })
    }, [facultyData.name, socket])

    const handleViewFile = () => {
        window.open(`http://localhost:3500/uploads/${filename}`, '_blank');
    };

    const handleAccept = async (teamName) => {
        try {
            const response = await axios.post('http://localhost:3500/acceptByGuide', {
                teamName,
                facultyName: facultyData.name
            })
            localStorage.setItem('facultyData', JSON.stringify(response.data))
            setFacultyData(response.data)

        } catch (error) {
            console.log(error.message);
        }
    }

    const handleReject = async (teamName) => {
        try {
            const response = await axios.post('http://localhost:3500/rejectByGuide', {
                teamName,
                facultyName: facultyData.name
            })
            localStorage.setItem('facultyData', JSON.stringify(response.data))
            setFacultyData(response.data)
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div className="Faculty-Dashboard">
            <div className='main-college'>
                <div className='college'>
                    <div className='college-logo'></div>
                    <div className='college-details'>
                        <p className='college-in'>Bhartiya Vidhya Bhavan's</p>
                        <p className='college-name'>Sardar Patel Institute of Technology</p>
                        <p className='college-in'>Autonomous institute Affiliated to Mumbai University</p>
                    </div>
                    <header className="head-area1">
                        <div className="header-container1">
                            {/* <div class="logo-nav1">
                        <h1><span>Faculty</span>Dashboard</h1>
                    </div> */}
                            <div className="menu3">
                                <div className="menu2">
                                    <div className="active">
                                        <p><Link>Home</Link></p>
                                    </div>
                                    <div className="">
                                        <p><Link>Notifications</Link></p>
                                    </div>
                                    <div className="">
                                        <p><Link>Expert</Link></p>
                                    </div>
                                    <div className="">
                                        <p><Link>Evaluation</Link></p>
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

            {/* <header className="head-area1">
                <div className="header-container1">
                    <div class="logo-nav1">
                        <h1><span>Faculty</span>Dashboard</h1>
                    </div>
                    <div className="menu3">
                        <div className="menu2">
                            <div className="active">
                                <p><Link>Home</Link></p>
                            </div>
                            <div className="">
                                <p><Link>Notifications</Link></p>
                            </div>
                            <div className="">
                                <p><Link>Expert</Link></p>
                            </div>
                            <div className="">
                                <p><Link>Evaluation</Link></p>
                            </div>
                            <div className="">
                                <p><Link>LogOut</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </header> */}
            <div className='faculty-name'><div>{facultyData.name}</div><p>({facultyData.designation})</p><p>    {facultyData.department})</p></div>
            {/* <div>{facultyData.email}</div> */}
            {/* <div>{facultyData.department}</div> */}
            {/* <div>{facultyData.designation}</div> */}
            {/* <div className='faculty-img'></div> */}
            {/* <div>{facultyData.count}</div> */}

            {/* <br />

            {(facultyData.domains).map((domain, index) => {
                return <p key={index}>{domain}</p>
            })}

            <br /> */}

            {/* {facultyData.teams && facultyData.teams.length > 0 && (facultyData.teams).map((team) => {
                return (
                    <div key={team}>
                        <p>{team}
                            <button onClick={() => handleAccept(team)}>Accept</button>
                            <button onClick={() => handleReject(team)}>Reject</button>
                        </p>
                    </div>
                )
            })}

            <br />

            {facultyData.acceptedTeams && facultyData.acceptedTeams.length > 0 && (facultyData.acceptedTeams).map((team) => {
                return (
                    <div key={team.teamName}>
                        <Link to={`/evaluation/${team.teamName}/guide`}> <p>{team.teamName}</p></Link>
                    </div>
                )
            })}

            <br />

            {facultyData.teamsAllocatedByMe && facultyData.teamsAllocatedByMe.length > 0 && (facultyData.teamsAllocatedByMe).map((team) => {
                return (
                    <div key={team.teamName}>
                        <p>{team.teamName} allocated to {team.allocatedTo} </p>
                    </div>
                )
            })}
            <br />

            {facultyData.teamsAllocatedToMe && facultyData.teamsAllocatedToMe.length > 0 && (facultyData.teamsAllocatedToMe).map((team) => {
                return (
                    <div key={team.teamName}>
                        <Link to={`/evaluation/${team.teamName}/expert`}><p>{team.teamName} allocated by {team.allocatedBy} </p></Link>
                    </div>
                )
            })}
            <br />
            {filename && (
                <div>
                    <button onClick={handleViewFile}>View File</button>
                    <p>Filename: {filename}</p>
                </div>
            )}
            {teamData && teamData.length > 0 && teamData.map((team) => {
                return (
                    <div key={team.teamName}>
                        <p>Hello</p>
                        <p>{team.teamName}</p>
                        {team.membersList.map((member) => {
                            return (
                                <div key={member}>
                                    <span>{member.name}  </span>
                                    <span>{member.email} </span>
                                    <span>{member.branch} </span>
                                    <span>{member.UID} </span>
                                    {member.isTeamLeader && <span>Team Leader</span>}
                                </div>
                            )
                        }
                        )}
                        <p>
                            <button onClick={() => handleAccept(team.teamName)}>Accept</button>
                            <button onClick={() => handleReject(team.teamName)}>Reject</button>
                        </p>
                    </div>
                )
            })
            } */}
            <div className='flex'>
                <div className="faculty-columns"><NotificationBox/></div>
                <div className="faculty-columns"><NotificationBox/></div>
                <div className="faculty-columns"><NotificationBox/></div>
            </div>
        </div>
    )
}


export default FacultyDashboard