import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
    const [name, setName] = useState('');
    const [UID, setUID] = useState('');
    const [email, setEmail] = useState('');
    const [branch, setBranch] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [teamName, setTeamName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const response = await axios.put('http://localhost:3500/register/user', {
                name,
                UID,
                email,
                branch,
                password,
                teamName,
            });

            console.log(response.data);
        } catch (error) {
            console.error(error.response.data.message);
        }

        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>

            <div>
                <label htmlFor="name">Name:</label>
                <input className='w-64 border border-solid border-black' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            </div>

            <div>
                <label htmlFor="UID">UID:</label>
                <input className='w-64 border border-solid border-black' type="text" id="UID" value={UID} onChange={(e) => setUID(e.target.value)} placeholder="UID" required />
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input className='w-64 border border-solid border-black' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            </div>

            <div>
                <label htmlFor="branch">Branch:</label>
                <input className='w-64 border border-solid border-black' type="text" id="branch" value={branch} onChange={(e) => setBranch(e.target.value)} placeholder="Branch" required />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input className='w-64 border border-solid border-black' type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input className='w-64 border border-solid border-black' type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />
            </div>

            <div>
                <label htmlFor="teamName">Team Name:</label>
                <input className='w-64 border border-solid border-black' type="text" id="teamName" value={teamName} onChange={(e) => setTeamName(e.target.value)} placeholder="Team Name" required />
            </div>

            <div>
                <button className='mt-6' type="submit">Register</button>
            </div>

        </form>

    );
};

export default UserRegistration;