import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PreferenceList.css'
import ProfessorRow from './professorrow';
import Search from '../ReqDivs/requests';
const PreferenceList = ({ socket }) => {

  const [profList, setProfList] = useState([])
  const [teamData, setTeamData] = useState(JSON.parse(localStorage.getItem('teamData')));
  const teamName = teamData.teamName
  const [reqProfs, setReqProfs] = useState(teamData.guides)

  const requestProf = async (facultyName) => {
    try {
      const response = await axios.put('http://localhost:3500/sendGuideRequest', {
        facultyName,
        teamName
      })
      setTeamData(response.data);
      localStorage.setItem('teamData', JSON.stringify(response.data));
      setReqProfs(response.data.guides);
    }
    catch (error) {
      console.log(error.response.data);
    }
  }

  const getProfList = async () => {
    try {
      const response = await axios.get('http://localhost:3500/profList');
      console.log(response.data);
      setProfList(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    socket.on(`GuideFull`, (data) => {
      console.log(data);
      getProfList();
    })
  }, [socket])

  useEffect(() => {
    getProfList();
  }, [])

  return (
    <div className='Pref-Main'>
      <div className='search-bar'>
      <Search/>
      </div>
      <div className="preference-list">
          <div className="tbody">
            {profList.map((prof) => (
              <ProfessorRow
                key={prof._id}
                professor={prof}
                isRequested={reqProfs.includes(prof.name)}
                onRequestProf={requestProf}
                className="professor-row"
                socket={socket}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PreferenceList;
  