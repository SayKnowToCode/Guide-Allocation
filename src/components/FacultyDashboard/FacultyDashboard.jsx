import React, { useState } from 'react';
import Image from '../../1.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './FacultyDashboard.css'
const FacultyDashboard = () => {

    const [facultyData, setFacultyData] = useState(JSON.parse(localStorage.getItem('facultyData')))

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

            <div className="navbar2-container">
                <div className="navbar2">
                    <div className="home mr-0">
                        <img className='MyImg' src={Image} alt="" />    
                    </div>
                    <div className="home2 aka">
                        <Link>Home</Link>
                    </div>
                    <div className="home2">
                        <Link>Notifications</Link>
                    </div>
                    <div className="home2">
                        <Link>Expert</Link>
                    </div>
                    <div className="home2">
                        <Link>Evaluation</Link>
                    </div>
                    <div className="home2">
                        <Link>LogOut</Link>
                    </div>

                </div>
            </div>
            <h2>FacultyDashboard</h2>
            <div>{facultyData.name}</div>
            <div>{facultyData.email}</div>
            <div>{facultyData.department}</div>
            <div>{facultyData.designation}</div>
            <div>{facultyData.count}</div>

            <br />

            {(facultyData.domains).map((domain, index) => {
                return <p key={index}>{domain}</p>
            })}

            <br />

            {facultyData.teams.length > 0 && (facultyData.teams).map((team) => {
                return (
                    <div key={team}>
                        <p>{team}
                            <button onClick={() => handleAccept(team)}>Accept</button>
                            <button onClick={() => handleReject(team)}>Reject</button> </p>
                    </div>
                )
            })}

            <br />

            {facultyData.acceptedTeams.length > 0 && (facultyData.acceptedTeams).map((team) => {
                return (
                    <div key={team}>
                        <p>{team}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FacultyDashboard