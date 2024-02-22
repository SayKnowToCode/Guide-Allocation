import React,{useState} from 'react'
import axios from 'axios';

const FacultyDashboard = () => {

    const [facultyData,setFacultyData] = useState(JSON.parse(localStorage.getItem('facultyData')))

    const handleAccept = async (teamName) => {

        try {
            const response = await axios.post('http://localhost:3500/acceptByGuide',{
                teamName,
                facultyName : facultyData.name
            })
            localStorage.setItem('facultyData',JSON.stringify(response.data))
            setFacultyData(response.data)

        } catch (error) {
            console.log(error.message);
        }
    }

    const handleReject = async (teamName) => {
        try {
            const response = await axios.post('http://localhost:3500/rejectByGuide',{
                teamName,
                facultyName : facultyData.name
            })
            localStorage.setItem('facultyData',JSON.stringify(response.data))
            setFacultyData(response.data)
        } catch (error) {
            console.log(error.response.data);
        }
    }

  return (
    <div className='bg-white'>

        <div>FacultyDashboard</div>
        <div>{facultyData.name}</div>
        <div>{facultyData.email}</div>
        <div>{facultyData.department}</div>
        <div>{facultyData.designation}</div>
        <div>{facultyData.count}</div>

        <br />

        {(facultyData.domains).map((domain,index) => {
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
        
    </div>
  )
}

export default FacultyDashboard