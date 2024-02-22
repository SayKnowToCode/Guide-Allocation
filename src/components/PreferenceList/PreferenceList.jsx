import React, { useState,useEffect } from 'react';
import axios from 'axios';

const PreferenceList = () => {

  const [profList,setProfList] = useState([])
  const teamData = JSON.parse(localStorage.getItem('teamData'));
  const teamName = teamData.teamName

  const requestProf = async (facultyName) => {
      try {
        const response = await axios.post('http://localhost:3500/sendGuideRequest',{
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
    }catch(error)
    {
      console.log(error.response.data);
    }
    }

    getProfList();

  },[])

  return (
    <div className="preference-list">
      {profList.map((prof) => {
        return (
        <>
          
          <p key={prof._id} style={{color:'white'}}>{prof.name}</p>
          <hr />
          {(prof.domains).map((domain,index) => {
            return <p style={{color:'white'}} key={index}>{domain}</p>
          })}
          <hr />
          <button style={{color:'white'}} onClick={requestProf(prof.name)}> Request </button>
          <hr />
          <br />
          <hr />
          <br />
          <hr />
        </>
        )
      })}
      
    </div>
  );
};

export default PreferenceList;
