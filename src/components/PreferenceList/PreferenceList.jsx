import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PreferenceList.css'

const PreferenceList = () => {

  const [profList, setProfList] = useState([])
  const teamData = JSON.parse(localStorage.getItem('teamData'));
  const teamName = teamData.teamName

  const requestProf = async (facultyName) => {
      try {
        await axios.put('http://localhost:3500/sendGuideRequest',{
            facultyName,
            teamName
        })
        
        
      }
      catch(error)
      {
        console.log(error.response.data);
      }
  }

  useEffect(() => {

    const getProfList = async () => {
      try {
        const response = await axios.get('http://localhost:3500/profList');
        console.log(response.data);
        setProfList(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }

    getProfList();

  }, [])

  return (
    <div className="preference-list">
      <div className="Professor-Container">
        {profList.map((prof) => {
          return (
            <div key={prof._id} className='Professor'>
              <div>
                <p style={{ color: 'white' }}>{prof.name}</p>
              </div>
              <div>{prof.email}</div>
              <div>{prof.department}</div>
              <div>{prof.designation}</div>
              <div>
                {(prof.domains).map((domain, index) => {
                  return <p key={index}>{domain}</p>
                })}
              </div>
              <div>
                <button onClick={() => requestProf(prof.name)}> Request </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default PreferenceList;
