import React, { useState } from 'react';
import axios from 'axios';
import './Submission.css';

const Submission = () => {
    // State to hold uploaded PDFs for each phase
    const [phaseOnePdf, setPhaseOnePdf] = useState(null);
    const [phaseTwoPdf, setPhaseTwoPdf] = useState(null);
    const [phaseThreePdf, setPhaseThreePdf] = useState(null);
    const [weeklyReportPdf, setWeeklyReportPdf] = useState(null);
    const [caseStudyPdf, setCaseStudyPdf] = useState(null);
    const [presentationPdf, setPresentationPdf] = useState(null);

    // Handler function to handle file upload for each phase
    const handleFileUpload = (event, phase) => {
        const file = event.target.files[0];
        switch (phase) {
            case 'phaseOne':
                setPhaseOnePdf(file);
                break;
            case 'phaseTwo':
                setPhaseTwoPdf(file);
                break;
            case 'phaseThree':
                setPhaseThreePdf(file);
                break;
            case 'weeklyReport':
                setWeeklyReportPdf(file);
                break;
            case 'caseStudy':
                setCaseStudyPdf(file);
                break;
            case 'presentation':
                setPresentationPdf(file);
                break;
            default:
                break;
        }
    };

    // Handler function to submit the form
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('phaseOnePdf', phaseOnePdf);
        formData.append('phaseTwoPdf', phaseTwoPdf);
        formData.append('phaseThreePdf', phaseThreePdf);
        formData.append('weeklyReportPdf', weeklyReportPdf);
        formData.append('caseStudyPdf', caseStudyPdf);
        formData.append('presentationPdf', presentationPdf);

        try {
            const response = await axios.post('http://localhost:3500/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            console.log('Files uploaded successfully');

        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    return (
        <div className="submission-page">
            <h1 className="submi-title">Submission Page</h1>

            {/* Weekly Report Container */}
            <div className="submi-container">
                <h2>Weekly Report</h2>
                <div className="sub-container">
                    <table className="phase-table file-table">
                        {/* Table content */}
                    </table>
                    <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'weeklyReport')} />
                </div>
            </div>

            {/* Phase Tables Container */}
            <div className="submi-container">
                <h2>Phase Tables</h2>
                <div className="sub-container">
                    <div className="phase-table">
                        <h3>Phase 1</h3>
                        <div className="sub-container">
                            <table className="file-table">
                                {/* Table content */}
                            </table>
                            <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'phaseOne')} />
                        </div>
                    </div>
                    <div className="phase-table">
                        <h3>Phase 2</h3>
                        <div className="sub-container">
                            <table className="file-table">
                                {/* Table content */}
                            </table>
                            <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'phaseTwo')} />
                        </div>
                    </div>
                    <div className="phase-table">
                        <h3>Phase 3</h3>
                        <div className="sub-container">
                            <table className="file-table">
                                {/* Table content */}
                            </table>
                            <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'phaseThree')} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Study Container */}
            <div className="submi-container">
                <h2>Case Study</h2>
                <div className="sub-container">
                    <table className="phase-table file-table">
                        {/* Table content */}
                    </table>
                    <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'caseStudy')} />
                </div>
            </div>

            {/* Presentation Container */}
            <div className="submi-container">
                <h2>Presentation</h2>
                <div className="sub-container">
                    <table className="phase-table file-table">
                        {/* Table content */}
                    </table>
                    <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'presentation')} />
                </div>
            </div>

            {/* Submit Button */}
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Submission;
