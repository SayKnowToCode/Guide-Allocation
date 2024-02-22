import React from 'react'
import './FacultyDashboard.css'
const FacultyDashboard = () => {

    const facultyData = JSON.parse(localStorage.getItem('facultyData'));

  return (
    <div className='bg-white'>
        <div>FacultyDashboard</div>
        <div>{facultyData.name}</div>
        <div>{facultyData.email}</div>
        <div>{facultyData.department}</div>
        <div>{facultyData.designation}</div>
        <div>{facultyData.count}</div>

        <br />

        {(facultyData.domains).map((domain) => {
            return <p key={facultyData._id} >{domain}</p>
        })} 

        <br />

        <p>{facultyData.teams.length}</p>
        
    </div>
  )
}

export default FacultyDashboard