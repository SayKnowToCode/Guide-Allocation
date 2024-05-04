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
        <div className="subpg">
            {/* <div className="subhd">
                <h1 >Submission Page</h1>
            </div> */}

            <div className="submission-page">
                {/* Weekly Report Container */}
                <div className="submi-container">
                    <h2>Abstract</h2>
                    <div className="subone">
                        <div className="subinfo">
                            <p className='text-justify'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            </p>

                        </div>
                        <div className="sub-container">
                            <table className="phase-table file-table">
                                {/* Table content */}
                            </table>
                            <div>
                                <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'weeklyReport')} />
                                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Weekly Report Container */}
                <div className="submi-container">
                    <h2>Weekly Report</h2>
                    <div className="sub-container">
                        <table className="phase-table file-table">
                            {/* Table content */}
                        </table>
                        <div>
                            <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'weeklyReport')} />
                            <button className="submit-button" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>

                {/* Phase Tables Container */}
                {/* <div className="submi-container"> */}
                <h2>Phase Tables</h2>
                <div className="sub-container">
                    <div className="phase-table">
                        <h3>Phase 1</h3>
                        <div className="sub-container">
                            <table className="file-table">
                                {/* Table content */}
                            </table>
                            <div>
                                <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'phaseOne')} />
                                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                    {/* Repeat similar structure for other phases */}
                    <div className="phase-table">
                        <h3>Phase 2</h3>
                        <div className="sub-container">
                            <table className="file-table">
                                {/* Table content */}
                            </table>
                            <div>
                                <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'phaseOne')} />
                                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="phase-table">
                        <h3>Phase 3</h3>
                        <div className="sub-container">
                            <table className="file-table">
                                {/* Table content */}
                            </table>
                            <div>
                                <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'phaseOne')} />
                                <button className="submit-button" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* Repeat similar structure for other containers */}
                {/* Case Study Container */}
                <div className="submi-container">
                    <h2>Case Study</h2>
                    <div className="sub-container">
                        <table className="phase-table file-table">
                            {/* Table content */}
                        </table>
                        <input className="file-input" type="file" accept=".pdf" onChange={(e) => handleFileUpload(e, 'caseStudy')} />
                        <button className="submit-button" onClick={handleSubmit}>Submit</button>
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
                        <button className="submit-button" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
                {/* Submit Button */}
            </div>
        </div>
    );
};

export default Submission;
