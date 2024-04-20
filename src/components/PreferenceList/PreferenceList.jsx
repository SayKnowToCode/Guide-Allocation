import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PreferenceList.css'

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
    <div className='Pref-Main'>
      <div className="preference-list">
        <table className="table">
          <thead>
            <tr>
              <th className="th">Name</th>
              <th className="th">Email</th>
              <th className="th">Department</th>
              <th className="th">Designation</th>
              <th className="th">Domains</th>
              <th className="th">Action</th>
            </tr>
          </thead>
          <tbody>
            {profList.map((prof) => (
              <tr key={prof._id} className="tr">
                <td className="td">{prof.name}</td>
                <td className="td">{prof.email}</td>
                <td className="td">{prof.department}</td>
                <td className="td">{prof.designation}</td>
                <td className="td">{prof.domains.join(', ')}</td>
                <td className="td">
                  {reqProfs.includes(prof.name) ? (
                    <button className="button button-disabled" disabled>Requested</button>
                  ) : (
                    <button className="button" onClick={() => requestProf(prof.name)}>Request</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PreferenceList;
