import React, { useState, useEffect } from 'react';
import './Ev.css';

function GradeRubric() {
    const [submissionMarks, setSubmissionMarks] = useState(0);
    const [performanceMarks, setPerformanceMarks] = useState(0);
    const [totalMarks, setTotalMarks] = useState(0);

    useEffect(() => {
        const savedTotalMarks = localStorage.getItem('totalMarks');
        if (savedTotalMarks) {
            setTotalMarks(parseFloat(savedTotalMarks));
        }
    }, []); // Load total marks from local storage on component mount

    const handleSubmissionChange = (event) => {
        setSubmissionMarks(parseFloat(event.target.value));
    };

    const handlePerformanceChange = (event) => {
        setPerformanceMarks(parseFloat(event.target.value));
    };

    const handleSubmit = () => {
        const total = submissionMarks + performanceMarks;
        setTotalMarks(total);
        localStorage.setItem('totalMarks', total); // Save total marks to local storage
    };

    return (
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
            <button onClick={handleSubmit}>Submit</button>
            <div className='mark'>
                {totalMarks !== 0 && <p>Total Marks: {totalMarks}</p>}
            </div>
        </div>
    );
}

export default GradeRubric;
