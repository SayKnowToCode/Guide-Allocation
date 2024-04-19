import React, { useState } from 'react';
import './EvaluationForm.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EvaluationForm = () => {
  const { teamName } = useParams();
  const [marksPhase1, setMarksPhase1] = useState('');
  const [marksPhase2, setMarksPhase2] = useState('');
  const [marksPhase3, setMarksPhase3] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const facultyName = JSON.parse(localStorage.getItem('facultyData')).name;

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
      localStorage.setItem('facultyData', JSON.stringify(response.data));
    } catch (error) {
      console.log(error.message);
    }

  };

  const handleSubmitPhase1 = (e) => {
    e.preventDefault();
    // Perform any validation if needed

    // Package the evaluation data and pass it to the parent component

  }

  const handleSubmitPhase2 = async (e) => {
    e.preventDefault();

    // Perform any validation if needed

    // Package the evaluation data and pass it to the parent component

  }

  const handleSubmitPhase3 = (e) => {
    e.preventDefault();
    // Perform any validation if needed

    // Package the evaluation data and pass it to the parent component

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
          <button onClick={handleSubmitPhase1}>Submit</button>
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
          <button onClick={handleSubmitPhase2}>Submit</button>
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
          <button onClick={handleSubmitPhase3}>Submit</button>
        </label>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default EvaluationForm;
