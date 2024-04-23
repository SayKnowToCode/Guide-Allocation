import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './FacultyDashboard.css'

const FacultyDashboard = ({ socket }) => {

    const [facultyData, setFacultyData] = useState(JSON.parse(localStorage.getItem('facultyData')));
    const [filename, setFilename] = useState('');

    useEffect(() => {
        setFacultyData(JSON.parse(localStorage.getItem('facultyData')))
    }, [])

    useEffect(() => {
        socket.on(`RequestFor${facultyData.name}`, (data) => {
            setFacultyData(data);
            localStorage.setItem('facultyData', JSON.stringify(data))
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

            <header className="head-area1">
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
            </header>
            <div className='faculty-name'>{facultyData.name}</div>
            {/* <div>{facultyData.email}</div> */}
            <div>{facultyData.department}</div>
            <div>{facultyData.designation}</div>
            <div className='faculty-img'></div>
            {/* <div>{facultyData.count}</div> */}

            {/* <br />

            {(facultyData.domains).map((domain, index) => {
                return <p key={index}>{domain}</p>
            })}

            <br /> */}

            {facultyData.teams && facultyData.teams.length > 0 && (facultyData.teams).map((team) => {
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
        </div>
    )
}


export default FacultyDashboard