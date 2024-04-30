import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('facultyName', 'Dr. Kailas Devadkar')
        formData.append('teamName', 'Dev Wiz')

        try {
            const response = await axios.post('http://localhost:3500/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            console.log('File uploaded successfully');

        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };



    return (
        <div>
            <h2>Upload PDF</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Upload</button>
        </div>
    );
};

export default FileUpload;
