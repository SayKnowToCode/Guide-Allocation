import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns'; // Import the format function from date-fns

const Admin = () => {
    const [phase1StartDate, setPhase1StartDate] = useState('');
    const [phase1EndDate, setPhase1EndDate] = useState('');
    const [phase2StartDate, setPhase2StartDate] = useState('');
    const [phase2EndDate, setPhase2EndDate] = useState('');
    const [phase3StartDate, setPhase3StartDate] = useState('');
    const [phase3EndDate, setPhase3EndDate] = useState('');
    const [filename, setFilename] = useState('');
    const [docname, setDocname] = useState('');
    const [file, setFile] = useState(null);
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await axios.get(`http://localhost:3500/fetchSubmissions`, {
                    params: {
                        teamName: 'Dev Wiz',
                        facultyName: 'Dr. Kailas Devadkar'
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

    const openPDF = (pdfData) => {
        // Create a Blob from the PDF data
        const buffer = new Uint8Array(pdfData);
        const blob = new Blob([buffer], { type: 'application/pdf' });
        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);
        // Open the PDF in a new window
        window.open(url, '_blank');
    };

    const handleSubmit = async (topic, startDate, endDate) => {
        try {
            // Append ':00' to the date string to include seconds
            const startDateWithSeconds = `${startDate}:00`;
            const endDateWithSeconds = `${endDate}:00`;
            // Format the dates using date-fns
            const formattedStartDate = format(new Date(startDateWithSeconds), 'yyyy-MM-dd HH:mm:ss');
            const formattedEndDate = format(new Date(endDateWithSeconds), 'yyyy-MM-dd HH:mm:ss');

            // Send a POST request to localhost:3500/setDate with the phase and formatted dates
            const response = await axios.post('http://localhost:3500/setDate', {
                topic,
                startDate: formattedStartDate,
                endDate: formattedEndDate
            });
            console.log(response.data); // Log the response if needed
            // You can add further actions after successful submission
            const start1Date = new Date(response.data.startDate);
            const end1Date = new Date(response.data.endDate);

            console.log(start1Date);
            console.log(end1Date);

            console.log(start1Date < new Date())
            console.log(end1Date < new Date())

        } catch (error) {
            console.error('Error submitting dates:', error.message);
        }
    };
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFormSubmit = async () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('teamName', 'Dev Wiz');
        formData.append('facultyName', 'Dr. Kailas Devadkar');
        formData.append('fileName', filename); // Add filename to formData
        try {
            await axios.post('http://localhost:3500/submissions', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Submission successful!');
        } catch (error) {
            console.error('Error submitting file:', error);
        }
    };
    const handleDocSubmit = async () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', docname); // Add filename to formData
        try {
            await axios.post('http://localhost:3500/docs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Doc Submission successful!');
        } catch (error) {
            console.error('Error submitting file:', error);
        }
    };

    const downloadFunc = async (fileName) => {
        const response = await axios.get(`http://localhost:3500/download/${fileName}`)
        openPDF(response.data.fileData.data);
    };

    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>
            <div className="input-group">
                <label htmlFor="phase1StartDate">Phase 1 Start Date:</label>
                <input
                    type="datetime-local" // Use datetime-local input type to include time
                    id="phase1StartDate"
                    value={phase1StartDate}
                    onChange={(e) => setPhase1StartDate(e.target.value)}
                />
                <label htmlFor="phase1EndDate">Phase 1 End Date:</label>
                <input
                    type="datetime-local" // Use datetime-local input type to include time
                    id="phase1EndDate"
                    value={phase1EndDate}
                    onChange={(e) => setPhase1EndDate(e.target.value)}
                />
                <button onClick={() => handleSubmit('Phase 2', phase1StartDate, phase1EndDate)}>Submit</button>
            </div>
            <div className="input-group">
                <label htmlFor="phase2StartDate">Phase 2 Start Date:</label>
                <input
                    type="datetime-local" // Use datetime-local input type to include time
                    id="phase2StartDate"
                    value={phase2StartDate}
                    onChange={(e) => setPhase2StartDate(e.target.value)}
                />
                <label htmlFor="phase2EndDate">Phase 2 End Date:</label>
                <input
                    type="datetime-local" // Use datetime-local input type to include time
                    id="phase2EndDate"
                    value={phase2EndDate}
                    onChange={(e) => setPhase2EndDate(e.target.value)}
                />
                <button onClick={() => handleSubmit(2, phase2StartDate, phase2EndDate)}>Submit</button>
            </div>
            <div className="input-group">
                <label htmlFor="phase3StartDate">Phase 3 Start Date:</label>
                <input
                    type="datetime-local" // Use datetime-local input type to include time
                    id="phase3StartDate"
                    value={phase3StartDate}
                    onChange={(e) => setPhase3StartDate(e.target.value)}
                />
                <label htmlFor="phase3EndDate">Phase 3 End Date:</label>
                <input
                    type="datetime-local" // Use datetime-local input type to include time
                    id="phase3EndDate"
                    value={phase3EndDate}
                    onChange={(e) => setPhase3EndDate(e.target.value)}
                />
                <button onClick={() => handleSubmit(3, phase3StartDate, phase3EndDate)}>Submit</button>
            </div>

            <div>
                <label>Filename:</label> {/* Add input field for filename */}
                <input type="text" value={filename} onChange={(e) => setFilename(e.target.value)} />
                <br />
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleFormSubmit}>Submit</button>
            </div>

            <div>
                <h2>Your Submissions</h2>
                <ul>
                    {submissions && submissions.map((submission, index) => (
                        <li key={index}>
                            {/* <a href={`http://localhost:3500/${submission.filePath}`} target="_blank" rel="noopener noreferrer">{submission.fileName}</a> */}
                            <button onClick={() => openPDF(submission.fileData.data)} >{submission.fileName}</button>


                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <label>Docname:</label> {/* Add input field for filename */}
                <input type="text" value={docname} onChange={(e) => setDocname(e.target.value)} />
                <br />
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleDocSubmit}>Submit</button>
            </div>

            <div>
                <button className='w-48' onClick={() => downloadFunc('Title Approval Form')}>Download Title Approval Form</button>
                <button className='w-48' onClick={() => downloadFunc('Problem Statements')}>Download Problem Statement</button>
            </div>
        </div>
    );
};

export default Admin;
