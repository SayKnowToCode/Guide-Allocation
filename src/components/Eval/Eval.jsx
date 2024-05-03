import React, { useState, useEffect } from 'react';
import './Eval.css';
const Rubric = () => {
    const [teamName, setTeamName] = useState('');
    const [teamDescription, setTeamDescription] = useState('');
    const [selectedDocument, setSelectedDocument] = useState('');
    const [marks, setMarks] = useState({ performance: 0, submission: 0 });
    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [activePhase, setActivePhase] = useState(null);
    const [submissionMarks, setSubmissionMarks] = useState(0);
    const [performanceMarks, setPerformanceMarks] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [totalMarks, setTotalMarks] = useState(0);

    // Fetch team name and description from local storage
    useEffect(() => {
        const storedTeamName = localStorage.getItem('teamName');
        const storedTeamDescription = localStorage.getItem('teamDescription');
        const savedTotalMarks = localStorage.getItem('totalMarks');
        if (storedTeamName) setTeamName(storedTeamName);
        if (storedTeamDescription) setTeamDescription(storedTeamDescription);
        if (savedTotalMarks) setTotalMarks(parseFloat(savedTotalMarks));
    }, []);

    // Function to handle faculty allocation
    const handleFacultyAllocation = (selectedFaculty) => {
        setSelectedFaculty(selectedFaculty);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };
    const handleSubmissionChange = (event) => {
        setSubmissionMarks(parseFloat(event.target.value));
    };

    const handlePerformanceChange = (event) => {
        setPerformanceMarks(parseFloat(event.target.value));
    };

    const handleSubmitR = () => {
        const total = submissionMarks + performanceMarks;
        setTotalMarks(total);
        localStorage.setItem('totalMarks', total); // Save total marks to local storage
    };

    // Options for dropdown menu
    const facultyOptions = [
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



    return (
        <div className="rubric-container">
            <div className="team-info-box">
                <h2>Team Information</h2>
                <div className="team-info">
                    <div className="td">
                        <h3>Dev Wiz</h3>
                        <h4>Shreya</h4>
                        <h4>Ninad Maadhavi</h4>
                        <h4>Atharva Khabale</h4>
                    </div>
                    <div className="tm">
                        <h4>shreya.mehta22@spit.ac.in</h4>
                        <h4>ninad.maadhavi22@spit.ac.in</h4>
                        <h4>atharva.khabale22@spit.ac.in</h4>
                    </div>

                    <h3>{teamName}</h3>
                    <p>{teamDescription}</p>
                </div>
            </div>
            <div className="faculty-allocation">
                <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
                    <option value="">Allocate Team to Expert</option>
                    {facultyOptions.map((faculty, index) => (
                        <option key={index} value={faculty}>
                            {faculty}
                        </option>
                    ))}
                </select>
                <button onClick={handleSubmit}>Submit</button>
                {isSubmitted && selectedFaculty && <p className='exp'>Team allocated to: {selectedFaculty}</p>}
            </div>

            <div className="phase-boxes">
                <div className="phase-box" onClick={() => setActivePhase('Phase 1')}>
                    <h3>Phase 1</h3>
                </div>
                <div className="phase-box" onClick={() => setActivePhase('Phase 2')}>
                    <h3>Phase 2</h3>
                </div>
                <div className="phase-box" onClick={() => setActivePhase('Phase 3')}>
                    <h3>Phase 3</h3>
                </div>
                <div className="phase-box" onClick={() => setActivePhase('Phase 4')}>
                    <h3>Phase 4</h3>
                </div>
            </div>
            {activePhase && (
                <div className='rubric'>
                    <h1>Grade Rubric</h1>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Submission</td>
                                <td>
                                    <th>Very Late (0)</th>
                                    <input
                                        type="radio"
                                        name="submission"
                                        value="0"
                                        onChange={handleSubmissionChange}
                                    />
                                </td>
                                <td>
                                    <th>Late (0.5)</th>
                                    <input
                                        type="radio"
                                        name="submission"
                                        value="0.5"
                                        onChange={handleSubmissionChange}
                                    />
                                </td>
                                <td>
                                    <th>On Time (1)</th>
                                    <input
                                        type="radio"
                                        name="submission"
                                        value="1"
                                        onChange={handleSubmissionChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Performance</td>
                                <td>
                                    <th>Poor (0)</th>
                                    <input
                                        type="radio"
                                        name="performance"
                                        value="0"
                                        onChange={handlePerformanceChange}
                                    />
                                </td>
                                <td>
                                    <th>Can do Better (0.5)</th>
                                    <input
                                        type="radio"
                                        name="performance"
                                        value="0.5"
                                        onChange={handlePerformanceChange}
                                    />
                                </td>
                                <td>
                                    <th>Good (1)</th>
                                    <input
                                        type="radio"
                                        name="performance"
                                        value="1"
                                        onChange={handlePerformanceChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={handleSubmitR}>Submit</button>
                    <div className='mark'>
                        {totalMarks !== 0 && <p>Total Marks: {totalMarks}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Rubric;
