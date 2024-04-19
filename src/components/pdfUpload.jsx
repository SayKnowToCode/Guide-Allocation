import React, { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            // You can perform additional actions here, like sending the form data to your server using fetch or axios.
            // Example: 
            // fetch('your-upload-url', {
            //   method: 'POST',
            //   body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //   // Handle response from server
            // })
            // .catch(error => {
            //   // Handle error
            // });

            console.log('File uploaded:', file);
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div>
            <h2>Upload PDF</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} accept=".pdf" />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default FileUpload;
