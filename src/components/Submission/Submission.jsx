import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Submission.css';

const Submission = () => {
    const teamData = JSON.parse(localStorage.getItem('teamData'));
    const [file, setFile] = useState(null);

    // Handler function to handle file upload for each phas

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFormSubmit = async (filename) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('teamName', teamData.teamName);
        formData.append('facultyName', teamData.acceptedGuide);
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

    return (
        <div className="subpg">
            {/* <div className="subhd">
                <h1 >Submission Page</h1>
            </div> */}

            <div className="submission-page">
                {/* Weekly Report Container */}
                <div className="submi-container">
                    <h2>Abstract</h2>
                    <div>
                        <input type="file" onChange={handleFileChange} />
                        <button onClick={() => handleFormSubmit('Abstract')}>Submit</button>
                    </div>
                    <button className='w-48' onClick={() => downloadFunc('Title Approval Form')}>Download Format</button>
                </div>

                <div className="submi-container">
                    <h2>Report</h2>
                    <div>
                        <input type="file" onChange={handleFileChange} />
                        <button onClick={() => handleFormSubmit('Report')}>Submit</button>
                    </div>
                    <button className='w-48' onClick={() => downloadFunc('Title Approval Form')}>Download Format</button>
                </div>

                {/* Weekly Report Container */}

                {/* Submit Button */}
            </div>
        </div>
    );
};

export default Submission;
