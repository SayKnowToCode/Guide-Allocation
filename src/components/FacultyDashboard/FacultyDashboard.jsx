import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './FacultyDashboard.css';
import './FaculyDashboard1.css';
import Events from '../ReqDivs/Events1';

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
            console.log(teamDataArray);
            // const unwrappedTeamDataArray = teamDataArray.flat();
            // console.log(unwrappedTeamDataArray);
            setTeamData(teamDataArray);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        setFacultyData(JSON.parse(localStorage.getItem('facultyData')));
    }, []);

    useEffect(() => {
        fetchTeamDataForAllTeams();
    }, [facultyData]);

    useEffect(() => {
        socket.on(`RequestFor${facultyData.name}`, (data) => {
            setFacultyData(data.guide);
            localStorage.setItem('facultyData', JSON.stringify(data));
            // setTeamData([...teamData, data.team]);
            // setTeamData(teamData.push(data.team));
        });

        socket.on(`expertGuideFor${facultyData.name}`, (data) => {
            setFacultyData(data);
            localStorage.setItem('facultyData', JSON.stringify(data));
        });

        socket.on(`fileUploadedFor${facultyData.name}`, (data) => {
            console.log(data.fileName);
            setFilename(data.fileName);
        });

        socket.on(`TeamAcceptedFor${facultyData.name}`, (data) => {
            console.log("Here");
            console.log(data);
            setFacultyData(data);
            localStorage.setItem('facultyData', JSON.stringify(data));
        });
    }, [facultyData.name, socket]);

    const handleViewFile = () => {
        window.open(`http://localhost:3500/uploads/${filename}`, '_blank');
    };

    const handleAccept = async (teamName) => {
        try {
            const response = await axios.post('http://localhost:3500/acceptByGuide', {
                teamName,
                facultyName: facultyData.name
            });
            localStorage.setItem('facultyData', JSON.stringify(response.data));
            setFacultyData(response.data);
            setTeamData(teamData.filter((team) => team.teamName !== teamName));
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleReject = async (teamName) => {
        try {
            const response = await axios.post('http://localhost:3500/rejectByGuide', {
                teamName,
                facultyName: facultyData.name
            });
            localStorage.setItem('facultyData', JSON.stringify(response.data));
            setFacultyData(response.data);
            setTeamData(teamData.filter((team) => team.teamName !== teamName));
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <div className="Faculty-Dashboard overflow-x-hidden">
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
            <div className='faculty-name'>
                <div>{facultyData.name}</div>
                <p>({facultyData.designation})</p>
                <p>({facultyData.department})</p>
            </div>
            <div className=' flex gap-40 mt-12 justify-center'>
                <div className='w-fit accepted-container'>
                    <div className='accepted-heading h-fit '>My Teams</div>
                    <div>
                        <div>
                            {facultyData.acceptedTeams && facultyData.acceptedTeams.length > 0 && (facultyData.acceptedTeams).map((team) => {
                                return (
                                    <ul className='accepted-name mt-3' key={team.teamName}>
                                        <Link to={`/evaluation/${team.teamName}/guide`}> <li>{team.teamName}</li></Link>
                                    </ul>
                                )
                            })}
                        </div>
                        <div>
                            {facultyData.teamsAllocatedToMe && facultyData.teamsAllocatedToMe.length > 0 && (facultyData.teamsAllocatedToMe).map((team) => {
                                return (
                                    <div key={team.teamName}>
                                        <Link to={`/evaluation/${team.teamName}/expert`}><p>{team.teamName} by {team.allocatedBy} </p></Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
                <div>
                    <Events />
                </div>

            </div>

            <div className="requests-container overflow-x-hidden">
                {teamData && teamData.length > 0 && teamData.map((team) => {
                    return (
                        <div className='requests-container1 p-3 mt-2' key={team._id}>
                            <div className='flex gap-5'><h1 className='requests-teamname text-xl font-semibold mb-4 text-black whitespace-nowrap'>{team.teamName}</h1><p style={{ marginTop: '1px' }}>(Project-Title)</p></div>
                            {team.membersList.map((member) => {
                                return (
                                    <div className='border-2 p-2 flex justify-around mt-2' key={member}>
                                        <div>{member.name}</div>
                                        <div>{member.email}</div>
                                        <div>{member.branch}</div>
                                        <div>{member.UID}</div>
                                    </div>
                                )
                            })}
                            <div className='flex gap-2'>
                                <button onClick={() => handleAccept(team.teamName)}>Accept</button>
                                <button onClick={() => handleReject(team.teamName)}>Reject</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default FacultyDashboard;
