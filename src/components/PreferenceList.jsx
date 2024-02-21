import React, { useState,useEffect } from 'react';
import axios from 'axios';

const PreferenceList = () => {

  const [profList,setProfList] = useState([])

  const requestProf = (name) => {
    // Write this logic tmrw 
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
          <button style={{color:'white'}} onClick={requestProf(prof.name)}> Request </button>
        </>
        )
      })}
      
    </div>
  );
};

export default PreferenceList;
