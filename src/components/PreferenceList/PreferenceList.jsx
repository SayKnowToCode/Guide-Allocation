import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PreferenceList.css'
import ProfessorRow from './professorrow';
const PreferenceList = ({ socket }) => {

  const [profList, setProfList] = useState([])
  const teamData = JSON.parse(localStorage.getItem('teamData'));
  const teamName = teamData.teamName
  const [reqProfs, setReqProfs] = useState(teamData.guides)

  const requestProf = async (facultyName) => {
    try {
      const response = await axios.put('http://localhost:3500/sendGuideRequest', {
        facultyName,
        teamName
      })
      console.log(response.data.message);
      setReqProfs([...reqProfs, facultyName]);
      teamData.guides = [...teamData.guides, facultyName];
      localStorage.setItem('teamData', JSON.stringify(teamData));
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
      <div className="preference-list">
        <div className="table">
          <div className="tr">
            <div className="th">Professor Details</div>
            {/* <div className="th">Department</div> */}
            <div className="th">Domains</div>
            <div className="th">Action</div>
          </div>
          <div className="tbody">
            {profList.map((prof) => (
              <ProfessorRow
                key={prof._id}
                professor={prof}
                isRequested={reqProfs.includes(prof.name)}
                onRequestProf={requestProf}
                className="professor-row"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferenceList;
