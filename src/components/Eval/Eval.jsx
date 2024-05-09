import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Eval.css';
import axios from 'axios';

const Rubric = () => {
    const { teamName, role } = useParams();
    const [teamData, setTeamData] = useState({});
    const [selectedDocument, setSelectedDocument] = useState('');
    const [marks, setMarks] = useState({ performance: 0, submission: 0 });
    const [selectedFaculty, setSelectedFaculty] = useState('');
    const [activePhase, setActivePhase] = useState(null);
    const [submissionMarks, setSubmissionMarks] = useState(0);
    const [performanceMarks, setPerformanceMarks] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [totalMarks, setTotalMarks] = useState(0);

    const facultyName = JSON.parse(localStorage.getItem('facultyData')).name;
    const [teamsAllocatedByMe, setTeamsAllocatedByMe] = useState(JSON.parse(localStorage.getItem('facultyData')).teamsAllocatedByMe);
    const teamNames = teamsAllocatedByMe.map(team => team.teamName);
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await axios.get(`http://localhost:3500/fetchSubmissions`, {
                    params: {
                        teamName: teamName,
                        facultyName: facultyName
                    }
                });
                console.log(response.data);
                setSubmissions(response.data);

            } catch (error) {
                console.error('Error fetching submissions:', error);
            }
        };
        fetchSubmissions();
    }, []);

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


    // Fetch team name and description from local storage
    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await axios.get(`http://localhost:3500/getTeam`, {
                    params: {
                        teamName
                    }
                });
                setTeamData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTeamData();

    }, []);

    // Function to handle faculty allocation
    const handleFacultyAllocation = (selectedFaculty) => {
        setSelectedFaculty(selectedFaculty);
    };
    const openPDF = (pdfData) => {
        // Create a Blob from the PDF data
        const buffer = new Uint8Array(pdfData);
        const blob = new Blob([buffer], { type: 'application/pdf' });
        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);
        // Open the PDF in a new window
        window.open(url, '_blank');
    };
    const downloadFunc = async (fileName) => {
        const response = await axios.get(`http://localhost:3500/download/${fileName}`)
        openPDF(response.data.fileData.data);
    };

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
            const something = teamData
            something.expertAllocated = selectedFaculty;
            setTeamData(something);
            localStorage.setItem('facultyData', JSON.stringify(response.data));
        } catch (error) {
            console.log(error.message);
        }

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

    return (
        <div className="rubric-container">
            <div className="team-info-box1">
                <h2>Team Information</h2>
                <div className="team-info1">
                    <div className="td">
                        <h3>{teamData.teamName}</h3>
                        {teamData && teamData.membersList && teamData.membersList.length > 0 && teamData.membersList.map((member) => (
                            <h4 key={member.name}>{member.name}</h4>
                        ))}

                    </div>
                    <div className="tm">
                        {teamData && teamData.membersList && teamData.membersList.length > 0 && teamData.membersList.map((member) => (
                            <h4 key={member.email}>{member.email}</h4>
                        ))}
                    </div>


                    <div>
                        <h2>Submissions</h2>
                        <ul>
                            {submissions && submissions.map((submission, index) => (
                                <li key={index}>
                                    {/* <a href={`http://localhost:3500/${submission.filePath}`} target="_blank" rel="noopener noreferrer">{submission.fileName}</a> */}
                                    <button onClick={() => openPDF(submission.fileData.data)} >{submission.fileName}</button>


                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {role === 'guide' && <div className="faculty-allocation1">
                <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
                    <option value="">Allocate Team to Expert</option>
                    {filteredFacultyList.map((faculty, index) => (
                        <option key={index} value={faculty}>
                            {faculty}
                        </option>
                    ))}
                </select>
                <button className='me' onClick={handleSubmitFaculty}>Submit</button>
                {teamData && teamData.expertAllocated && teamData.expertAllocated.length > 0 && <p className='exp1'>Team allocated to : {teamData.expertAllocated}</p>}
            </div>}

            <div className="phase-boxes1">
                <div className="us">
                    <div className="phase-box1" onClick={() => setActivePhase('Phase 1')}>
                        <h3>Phase 1</h3>
                    </div>
                    <p>Pdf</p>
                </div>
                <div className="us1">
                    <div className="phase-box1" onClick={() => setActivePhase('Phase 2')}>
                        <h3>Phase 2</h3>
                    </div>
                    <p>Pdf</p>
                </div>
                <div className="us2">
                    <div className="phase-box1" onClick={() => setActivePhase('Phase 3')}>
                        <h3>Phase 3</h3>
                    </div>
                    <p>Pdf</p>
                </div>
                <div className="us3">
                    <div className="phase-box1" onClick={() => setActivePhase('Phase 4')}>
                        <h3>Phase 4</h3>
                    </div>
                    <p>Pdf</p>
                </div>
            </div>
            {activePhase && (
                <div className='rubric1'>
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
                    <button className='me' onClick={handleSubmitR}>Submit</button>
                    <div className='mark'>
                        {totalMarks !== 0 && <p>Total Marks: {totalMarks}</p>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Rubric;
