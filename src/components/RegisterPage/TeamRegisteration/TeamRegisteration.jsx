import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const TeamRegisteration = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        page: 1,
        teamName: '',
        leaderName: '',
        leaderUID: '',
        leaderEmail: '',
        leaderBranch: '',
        leaderPassword: '',
        leaderConfirmPassword: '',
        member1Name: '',
        member1Email: '',
        member2Name: '',
        member2Email: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.leaderPassword !== '' && formData.leaderConfirmPassword !== '' && formData.leaderPassword === formData.leaderConfirmPassword) {
            try {
                const response = await axios.post('http://localhost:3500/register/team', {
                    teamName: formData.teamName,
                    leaderPassword: formData.leaderPassword,
                    leaderName: formData.leaderName,
                    leaderEmail: formData.leaderEmail,
                    leaderBranch: formData.leaderBranch,
                    leaderUID: formData.leaderUID,
                    member1Name: formData.member1Name,
                    member1Email: formData.member1Email,
                    member2Name: formData.member2Name,
                    member2Email: formData.member2Email
                })
                console.log(response.data);
                navigate('/');
            }
            catch (err) {
                console.log(err.message);
            }
        }
        else
            console.log("Password and Confirm Password do not match");

        console.log("Finished");
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const nextPage = () => {
        setFormData((prevData) => ({
            ...prevData,
            page: prevData.page + 1,
        }));
    };

    const prevPage = () => {
        setFormData((prevData) => ({
            ...prevData,
            page: prevData.page - 1,
        }));
    };

    const renderPage = () => {
        switch (formData.page) {
            case 1:
                return (
                    <div>
                        <h2>Only to be filled by the Leader !!!</h2>

                        <label>Team Name:</label>
                        <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} /> <br />

                        <label>Leader Name:</label>
                        <input type="text" name="leaderName" value={formData.leaderName} onChange={handleChange} /> <br />

                        <label>Email:</label>
                        <input type="text" name="leaderEmail" value={formData.leaderEmail} onChange={handleChange} /> <br />

                        <label>Branch:</label>
                        <input type="text" name="leaderBranch" value={formData.leaderBranch} onChange={handleChange} /> <br />

                        <label>UID:</label>
                        <input type="text" name="leaderUID" value={formData.leaderUID} onChange={handleChange} /> <br />

                        <label>Enter your password :</label>
                        <input type="password" name="leaderPassword" value={formData.leaderPassword} onChange={handleChange} /> <br />

                        <label>Confirm Password:</label>
                        <input type="password" name="leaderConfirmPassword" value={formData.leaderConfirmPassword} onChange={handleChange} /> <br />

                        <button onClick={nextPage}>Next</button>

                    </div>
                );
            case 2:
                return (
                    <div>
                        <h2>Page 2</h2>
                        <label>Member 1 Name:</label>
                        <input type="text" name="member1Name" value={formData.member1Name} onChange={handleChange} /> <br />

                        <label>Member 1 Email:</label>
                        <input type="email" name="member1Email" value={formData.member1Email} onChange={handleChange} /> <br />
                        {/* Add more member 1 details as needed */}
                        <button onClick={prevPage}>Back</button>
                        <button onClick={nextPage}>Next</button>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h2>Page 3</h2>
                        <label>Member 2 Name:</label>
                        <input type="text" name="member2Name" value={formData.member2Name} onChange={handleChange} />
                        <label>Member 2 Email:</label>
                        <input type="email" name="member2Email" value={formData.member2Email} onChange={handleChange} />
                        {/* Add more member 2 details as needed */}
                        <button onClick={prevPage}>Back</button>
                        <button type='submit' onClick={handleSubmit}>Submit</button>
                    </div>
                );

            default:
                return null;
        }
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>{renderPage()}</form>

            {/* Add any common form elements that should appear on all pages */}
        </div>
    );

};

export default TeamRegisteration;
