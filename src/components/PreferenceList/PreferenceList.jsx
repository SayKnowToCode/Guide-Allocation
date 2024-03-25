import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PreferenceList.css'

const PreferenceList = ({ socket }) => {

  const [profList, setProfList] = useState([])
  const teamData = JSON.parse(localStorage.getItem('teamData'));
  const teamName = teamData.teamName
  const [status, setStatus] = useState('')

  const requestProf = async (facultyName) => {
    try {
      const response = await axios.put('http://localhost:3500/sendGuideRequest', {
        facultyName,
        teamName
      })
      console.log(response.data.message);
      setStatus('Request Sent');
    }
    catch (error) {
      console.log(error.response.data);
      setStatus('Request Failed');
    }
  }

  // useEffect(() => {
  //   socket.on(`${teamName}`, (data) => {
  //     console.log(data);
  //     console.log(data.name);
  //   })
  // }, [socket])

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
                {status === ''
                  ? <button onClick={() => requestProf(prof.name)}> Request </button>
                  : status}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default PreferenceList;
