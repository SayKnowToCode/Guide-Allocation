import React, { useState } from 'react';
import './EvaluationForm.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EvaluationForm = () => {
  const { teamName, role } = useParams();
  const [marksPhase1, setMarksPhase1] = useState('');
  const [marksPhase2, setMarksPhase2] = useState('');
  const [marksPhase3, setMarksPhase3] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const facultyName = JSON.parse(localStorage.getItem('facultyData')).name;
  const [teamsAllocatedByMe, setTeamsAllocatedByMe] = useState(JSON.parse(localStorage.getItem('facultyData')).teamsAllocatedByMe);
  const teamNames = teamsAllocatedByMe.map(team => team.teamName);

  const facultyList = [
    "Dr. Prasenjit Bhavathankar",
    "Prof. Pramod Bide",
    "Dr. Kailas Devadkar",
    "Dr. Sudhir N. Dhage",
    "Dr. Surekha Dholay",
    "Prof. Sunil Ghane",
    "Prof. A. A. Godbole",
    "Prof. Reeta Koshy",
    "Prof. Swapnali Kurhade",
    "Dr. Anant Nimkar",
    "Prof. Jyoti Ramteke",
    "Dr. Nataasha Raul",
    "Dr. Rupali Sawant",
    "Prof. Abhijeet Salunke",
    "Prof. Jignesh Sisodia",
    "Dr. Sujata Kulkarni",
    "Prof.Dayanand Ambawade",
    "Prof. Sheetal Chaudhari",
    "Prof. Renuka Pawar",
    "Prof. Varsha Hole",
    "Prof. Aparna Halbe",
    "Prof. Nikahat Mulla",
    "Dr Aarti Karande",
    "Dr. Suhas Kakade",
    "Prof. Vipul Kushwaha",
    "Prof.Noshin Sabuwala",
    "Prof. Sakina Shaikh"
  ];

  const filteredFacultyList = facultyList.filter(faculty => faculty !== facultyName);

  const handleSubmitFaculty = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3500/externalGuide', {
        teamName,
        facultyName,
        selectedFaculty
      })
      console.log(response.data);
      setTeamsAllocatedByMe(response.data.teamsAllocatedByMe);
      localStorage.setItem('facultyData', JSON.stringify(response.data));
    } catch (error) {
      console.log(error.message);
    }

  };

  const handlePhaseSubmit = async (e, phase) => {
    e.preventDefault();

    switch (phase) {
      case 1:
        try {
          const response = await axios.post('http://localhost:3500/evaluation', {
            teamName,
            marks: Number(marksPhase1),
            phase: Number(phase),
            role,
            facultyName
          });
          console.log(response.data);
          localStorage.setItem('facultyData', JSON.stringify(response.data));
        }
        catch (error) {
          console.log(error.message);
        }
        break;
      case 2:
        try {
          const response = await axios.post('http://localhost:3500/evaluation', {
            teamName,
            marks: Number(marksPhase2),
            phase: Number(phase),
            role,
            facultyName
          });
          console.log("Here");
          console.log(response.data);
          localStorage.setItem('facultyData', JSON.stringify(response.data));
        }
        catch (error) {
          console.log(error.message);
        }
        break;
      case 3:
        try {
          const response = await axios.post('http://localhost:3500/evaluation', {
            teamName,
            marks: Number(marksPhase3),
            phase: Number(phase),
            role,
            facultyName
          });
          console.log(response.data);
          localStorage.setItem('facultyData', JSON.stringify(response.data));
        }
        catch (error) {
          console.log(error.message);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="evaluation-form">
      <div>
        <p>Team Name : {teamName}</p>
      </div>
      <h2>Evaluation Form</h2>
      <div>
        <label>
          Marks for Phase 1:
          <input
            type="number"
            value={marksPhase1}
            onChange={(e) => setMarksPhase1(e.target.value)}
          />
          <button onClick={(e) => handlePhaseSubmit(e, 1)}>Submit</button>
        </label>
      </div>
      <div>
        <label>
          Marks for Phase 2:
          <input
            type="number"
            value={marksPhase2}
            onChange={(e) => setMarksPhase2(e.target.value)}
          />
          <button onClick={(e) => handlePhaseSubmit(e, 2)}>Submit</button>
        </label>
      </div>
      <div>
        <label>
          Marks for Phase 3:
          <input
            type="number"
            value={marksPhase3}
            onChange={(e) => setMarksPhase3(e.target.value)}
          />
          <button onClick={(e) => handlePhaseSubmit(e, 3)}>Submit</button>
        </label>
      </div>
      {teamNames.includes(teamName) ?
        <div>
          <p>Team already allocated to {teamsAllocatedByMe.find(team => team.teamName === teamName).allocatedTo} </p>
        </div>
        : <div> {role === 'guide' && <div>
          <label>
            Select Faculty:
            <input
              type="text"
              value={selectedFaculty}
              onChange={(e) => setSelectedFaculty(e.target.value)}
              list="facultyList"
            />
            <datalist id="facultyList">
              {filteredFacultyList.map((faculty, index) => (
                <option key={index} value={faculty} />
              ))}
            </datalist>
          </label>
          <button onClick={handleSubmitFaculty}>Submit</button>
        </div>} </div>}
    </div>
  );
};

export default EvaluationForm;
