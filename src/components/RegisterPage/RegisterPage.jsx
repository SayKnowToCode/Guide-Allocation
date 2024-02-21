import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderUID: '',
    leaderEmail: '',
    member1Name: '',
    member1UID: '',
    member1Email: '',
    member2Name: '',
    member2UID: '',
    member2Email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(formData.password === formData.confirmPassword)
    {
      try{
        const response = await axios.post('http://localhost:3500/register',{
          teamName : formData.teamName,
          password : formData.password,
          leaderName : formData.leaderName,
          leaderUID : formData.leaderUID,
          leaderEmail : formData.leaderEmail,
          member1Name : formData.member1Name, 
          member1UID : formData.member1UID,  
          member1Email : formData.member1Email,
          member2Name : formData.member2Name, 
          member2UID : formData.member2UID, 
          member2Email : formData.member2Email 
        })
        console.log(response.data);
        navigate('/');
      }
      catch(err)
      {
        console.log(err.response.data);
      }
      
    }
    else
      console.log("Password and Confirm Password do not match");
    
  };

  return (
    <div className='text-white'>
      <h2>Team Registration</h2>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        {/* Team Name */}
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          name="teamName"
          value={formData.teamName}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        {/* Leader Information */}
        <label htmlFor="leaderName">Leader Name:</label>
        <input
          type="text"
          id="leaderName"
          name="leaderName"
          value={formData.leaderName}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="leaderUID">Leader UID:</label>
        <input
          type="text"
          id="leaderUID"
          name="leaderUID"
          value={formData.leaderUID}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="leaderEmail">Leader SPIT Email:</label>
        <input
          type="email"
          id="leaderEmail"
          name="leaderEmail"
          value={formData.leaderEmail}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        {/* Member 1 Information */}
        <label htmlFor="member1Name">Member 1 Name:</label>
        <input
          type="text"
          id="member1Name"
          name="member1Name"
          value={formData.member1Name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="member1UID">Member 1 UID:</label>
        <input
          type="text"
          id="member1UID"
          name="member1UID"
          value={formData.member1UID}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="member1Email">Member 1 SPIT Email:</label>
        <input
          type="email"
          id="member1Email"
          name="member1Email"
          value={formData.member1Email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        {/* Member 2 Information */}
        <label htmlFor="member2Name">Member 2 Name:</label>
        <input
          type="text"
          id="member2Name"
          name="member2Name"
          value={formData.member2Name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="member2UID">Member 2 UID:</label>
        <input
          type="text"
          id="member2UID"
          name="member2UID"
          value={formData.member2UID}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="member2Email">Member 2 SPIT Email:</label>
        <input
          type="email"
          id="member2Email"
          name="member2Email"
          value={formData.member2Email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        {/* Password */}
        <label htmlFor="password">Set Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        {/* Confirm Password */}
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
